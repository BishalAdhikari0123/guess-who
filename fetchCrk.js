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

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  try {
    const listUrl = 'https://cookierunkingdom.fandom.com/api.php?action=query&list=categorymembers&cmtitle=Category:Playable_Cookies&cmlimit=500&format=json';
    const listData = await fetchJson(listUrl);
    
    // Get cookies that are "X Cookie" or just characters
    let cookies = listData.query.categorymembers;
    
    // Make chunks of 50 to query image info
    const chunkSize = 50;
    const crkRoster = [];

    for (let i = 0; i < cookies.length; i += chunkSize) {
      const chunk = cookies.slice(i, i + chunkSize);
      
      // Let's try `<Name> head.png` OR `<Name>_head.png`... 
      // For Fandom, spaces turn into underscores but you can query with spaces
      // Example: "Adventurer Cookie" => "File:Adventurer head.png"
      // Wait, some characters like "GingerBrave" don't include "Cookie" usually in the image name, but let's try the title without " Cookie" + " head.png"
      const titles = chunk.map(c => {
         const name = c.title;
         const cleanName = name.endsWith(' Cookie') ? name.replace(' Cookie', '') : name;
         return `File:${cleanName} head.png`;
      });
      
      const imgUrl = `https://cookierunkingdom.fandom.com/api.php?action=query&prop=imageinfo&titles=${encodeURIComponent(titles.join('|'))}&iiprop=url&format=json`;
      const imgData = await fetchJson(imgUrl);
      
      if (imgData.query && imgData.query.pages) {
        for (const pageObj of Object.values(imgData.query.pages)) {
           if (pageObj.imageinfo && pageObj.imageinfo[0] && pageObj.imageinfo[0].url) {
             const fullTitle = pageObj.title; // "File:Adventurer head.png"
             let pName = fullTitle.replace('File:', '').replace(' head.png', '');
             // Capitalize each word properly for the character name?
             crkRoster.push({
               name: pName + (pName.toLowerCase() !== 'gingerbrave' && !pName.toLowerCase().includes('cookie') ? ' Cookie' : ''),
               image: pageObj.imageinfo[0].url
             });
           }
        }
      }
      await sleep(200); // respect rate limits
    }

    console.log('CRK Heroes fetched:', crkRoster.length);
    console.log(crkRoster.slice(0, 5));

    // Update existing other-games.ts
    let src = fs.readFileSync('src/lib/other-games.ts', 'utf-8');
    
    // Load as object using Function constructor or JSON
    // We'll just replace the whole file since we have fetchImages.js to do all games? No, let's just inject into other_games.ts or re-read/re-write.
    
    // Simplest: regex replace "Cookie Run: Kingdom": [ ... ]
    let gamesMap = null;
    try {
        const exported = fs.readFileSync('src/lib/other-games.ts', 'utf-8');
        const jsonStr = exported.substring(exported.indexOf('{'), exported.lastIndexOf(';'));
        gamesMap = eval('(' + jsonStr + ')');
    } catch(e) {
        console.error("Parse error", e);
    }
    
    if (gamesMap) {
        gamesMap['Cookie Run: Kingdom'] = crkRoster;
        
        const out = `export const otherGames = ${JSON.stringify(gamesMap, null, 2)};\n`;
        fs.writeFileSync('src/lib/other-games.ts', out);
        console.log('Successfully updated other-games.ts with CRK heroes!');
    }
  } catch (err) {
    console.error(err);
  }
}
main();
