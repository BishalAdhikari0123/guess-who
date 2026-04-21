const fs = require('fs');

let code = fs.readFileSync('fetchImages.js', 'utf8');

code = code.replace(
  `games['Valorant'] = valResponse.data.map(a => ({`,
  `games['Valorant'] = valResponse.data.filter(a => a.displayName.toLowerCase() !== 'fade').map(a => ({`
);

code = code.replace(
  `games['League of Legends'] = Object.values(lolResponse.data).map(c => ({`,
  `games['League of Legends'] = Object.values(lolResponse.data).filter(c => !['anivia', 'annie'].includes(c.name.toLowerCase())).map(c => ({`
);

const crkSnippet = `
  // Cookie Run: Kingdom
  try {
    const cookies = [
      { name: 'GingerBrave', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/0/05/GingerBrave_square.png' },
      { name: 'Strawberry Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/a/ab/Strawberry_Cookie_square.png' },
      { name: 'Wizard Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/9/91/Wizard_Cookie_square.png' },
      { name: 'Chili Pepper Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/1/14/Chili_Pepper_Cookie_square.png' },
      { name: 'Custard Cookie III', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/b/b3/Custard_Cookie_III_square.png' },
      { name: 'Pure Vanilla Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/0/09/Pure_Vanilla_Cookie_square.png' },
      { name: 'Hollyberry Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/f/f6/Hollyberry_Cookie_square.png' },
      { name: 'Dark Cacao Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/a/a9/Dark_Cacao_Cookie_square.png' },
      { name: 'Golden Cheese Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/4/4e/Golden_Cheese_Cookie_square.png' },
      { name: 'White Lily Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/8/87/White_Lily_Cookie_square.png' },
      { name: 'Espresso Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/f/f5/Espresso_Cookie_square.png' },
      { name: 'Madeleine Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/7/77/Madeleine_Cookie_square.png' },
      { name: 'Latte Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/1/1d/Latte_Cookie_square.png' },
      { name: 'Vampire Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/0/0e/Vampire_Cookie_square.png' },
      { name: 'Herb Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/e/ea/Herb_Cookie_square.png' },
      { name: 'Dark Choco Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/d/df/Dark_Choco_Cookie_square.png' },
      { name: 'Sea Fairy Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/6/69/Sea_Fairy_Cookie_square.png' },
      { name: 'Frost Queen Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/2/2f/Frost_Queen_Cookie_square.png' },
      { name: 'Black Pearl Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/4/44/Black_Pearl_Cookie_square.png' },
      { name: 'Moonlight Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/6/62/Moonlight_Cookie_square.png' },
      { name: 'Red Velvet Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/2/2e/Red_Velvet_Cookie_square.png' },
      { name: 'Cotton Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/5/53/Cotton_Cookie_square.png' },
      { name: 'Caramel Arrow Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/d/dd/Caramel_Arrow_Cookie_square.png' },
      { name: 'Financier Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/2/22/Financier_Cookie_square.png' },
      { name: 'Sorbet Shark Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/1/1c/Sorbet_Shark_Cookie_square.png' },
      { name: 'Eclair Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/5/5f/Eclair_Cookie_square.png' },
      { name: 'Wildberry Cookie', image: 'https://static.wikia.nocookie.net/cookierunkingdom/images/5/58/Wildberry_Cookie_square.png' }
    ];
    games['Cookie Run: Kingdom'] = cookies;
  } catch(e) { console.error('CRK error', e); }

  let out = \`export const otherGames = \${JSON.stringify(games, null, 2)};\\n\`;
`;

code = code.replace(
  "  let out = `export const otherGames = ${JSON.stringify(games, null, 2)};\\n`;",
  crkSnippet
);

fs.writeFileSync('fetchImages.js', code);
