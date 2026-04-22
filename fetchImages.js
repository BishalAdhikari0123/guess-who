const fs = require('fs');
const https = require('https');

async function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(JSON.parse(body)));
    }).on('error', reject);
  });
}

async function main() {
  const games = {};

  // Genshin Impact
  try {
    const genshinResponse = await fetchJson('https://genshin.jmp.blue/characters');
    const genshinChars = [];
    for (const c of genshinResponse) {
      if (c.includes('traveler')) continue;
      genshinChars.push({
        name: c.charAt(0).toUpperCase() + c.slice(1).replace('-', ' '),
        image: `https://genshin.jmp.blue/characters/${c}/icon`
      });
    }
    games['Genshin Impact'] = genshinChars;
  } catch(e) { console.error('Genshin error', e); }

  // Valorant
  try {
    const valResponse = await fetchJson('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
    games['Valorant'] = valResponse.data.filter(a => a.displayName.toLowerCase() !== 'fade').map(a => ({
      name: a.displayName,
      image: a.displayIconSmall
    }));
  } catch(e) { console.error('Valorant error', e); }

  // League of Legends
  try {
    const lolResponse = await fetchJson('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json');
    games['League of Legends'] = Object.values(lolResponse.data).filter(c => !['anivia', 'annie'].includes(c.name.toLowerCase())).map(c => ({
      name: c.name,
      image: `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${c.image.full}`
    }));
  } catch(e) { console.error('LoL error', e); }

  // Overwatch
  try {
    const owResponse = await fetchJson('https://overfast-api.tekrop.fr/heroes');
    games['Overwatch'] = owResponse.map(h => ({
      name: h.name,
      image: h.portrait
    }));
  } catch(e) { console.error('OW error', e); }

  // Dota 2
  try {
    const dotaResponse = await fetchJson('https://api.opendota.com/api/heroStats');
    games['Dota 2'] = dotaResponse.filter(h => h.img).map(h => ({
      name: h.localized_name,
      image: `https://cdn.cloudflare.steamstatic.com${h.img.replace(/\?$/, '')}`
    }));
  } catch(e) { console.error('Dota error', e); }


  // Cookie Run: Kingdom
  try {
    const listUrl = 'https://cookierunkingdom.fandom.com/api.php?action=query&list=categorymembers&cmtitle=Category:Playable_Cookies&cmlimit=500&format=json';
    const listData = await fetchJson(listUrl);
    const cookies = listData.query.categorymembers || [];

    const crkRoster = [];
    const chunkSize = 50;

    for (let i = 0; i < cookies.length; i += chunkSize) {
      const chunk = cookies.slice(i, i + chunkSize);
      const fileTitles = chunk.map((c) => {
        const cleanName = c.title.endsWith(' Cookie') ? c.title.replace(' Cookie', '') : c.title;
        return `File:${cleanName} head.png`;
      });

      const imgUrl = `https://cookierunkingdom.fandom.com/api.php?action=query&prop=imageinfo&titles=${encodeURIComponent(fileTitles.join('|'))}&iiprop=url&format=json`;
      const imgData = await fetchJson(imgUrl);

      if (imgData.query && imgData.query.pages) {
        for (const pageObj of Object.values(imgData.query.pages)) {
          if (pageObj.imageinfo && pageObj.imageinfo[0] && pageObj.imageinfo[0].url) {
            const fileTitle = pageObj.title || '';
            const rawName = fileTitle.replace('File:', '').replace(' head.png', '').trim();
            const cookieName = rawName.toLowerCase() !== 'gingerbrave' && !rawName.toLowerCase().includes('cookie')
              ? `${rawName} Cookie`
              : rawName;

            crkRoster.push({
              name: cookieName,
              image: pageObj.imageinfo[0].url,
            });
          }
        }
      }
    }

    games['Cookie Run: Kingdom'] = crkRoster;
  } catch(e) { console.error('CRK error', e); }

  let out = `export const otherGames = ${JSON.stringify(games, null, 2)};\n`;

  fs.writeFileSync('src/lib/other-games.ts', out);
  console.log('Finished updating other-games.ts');
}

main();
