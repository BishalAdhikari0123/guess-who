const fs = require('fs');

const games = [
  { name: 'Genshin Impact', c: ['Aether','Lumine','Amber','Barbara','Beidou','Bennett','Chongyun','Diluc','Diona','Eula','Fischl','Ganyu','Hu Tao','Jean','Kaeya','Klee','Keqing','Lisa','Mona','Ningguang','Noelle','Qiqi','Razor','Rosaria','Sucrose','Tartaglia','Venti','Xiangling','Xiao','Xingqiu','Xinyan','Yanfei','Zhongli','Albedo','Alice','Ayaka','Ayato','Baizhu', 'Childe'] },
  { name: 'Valorant', c: ['Brimstone','Viper','Omen','Killjoy','Cypher','Sova','Sage','Phoenix','Jett','Reyna','Raze','Breach','Skye','Yoru','Astra','KAY/O','Chamber','Neon','Fade','Fade','Harbor','Gekko','Deadlock','Iso', 'Clove', 'Vyse'] },
  { name: 'League of Legends', c: ['Ahri','Akali','Alistar','Amumu','Anivia','Annie','Ashe','Annie','Anivia','Aphelios','Aatrox','Aurelion Sol','Azir','Bard','Blitzcrank','Brand','Braum','Caitlyn','Camille','Cassiopeia','Cho Gath','Corki','Darius','Diana','Dr. Mundo','Draven','Ekko','Elise','Evelynn','Ezreal','Fiddlesticks','Fiora','Fizz','Galio','Gangplank', 'Garen'] },
  { name: 'Overwatch', c: ['Ana','Ashe','Baptiste','Bastion','Brigitte','Cassidy','Cassidy','Doomfist','D.Va','Echo','Genji','Hanzo','Illari','Junker Queen','Junkrat','Kiriko','Lifeweaver','Lucio','Mauga','Mei','Mercy','Moira','Orisa','Pharah','Ramattra','Reaper','Reinhardt','Roadhog','Sigma','Sojourn','Soldier: 76','Sombra', 'Symmetra', 'Torbjorn', 'Tracer'] },
  { name: 'Dota 2', c: ['Abaddon','Alchemist','Ancient Apparition','Anti-Mage','Arc Warden','Axe','Bane','Batrider','Beastmaster','Bloodseeker','Bounty Hunter','Brewmaster','Bristleback','Broodmother','Centaur Warrunner','Chaos Knight','Chen','Clinkz','Clockwerk','Crystal Maiden','Dark Seer','Dazzle','Death Prophet','Disruptor','Doom','Dragon Knight', 'Drow Ranger', 'Earth Spirit'] }
];

let out = `export const otherGames = {\n`;
for (const g of games) {
  out += `  "${g.name}": [\n`;
  for(let i=0; i < g.c.length; i++) {
    out += `    { name: "${g.c[i]}", image: "https://ui-avatars.com/api/?name=${encodeURIComponent(g.c[i])}&background=random" },\n`;
  }
  out += `  ],\n`;
}
out += `};\n`;

if (!fs.existsSync('src/lib')) { fs.mkdirSync('src/lib', { recursive: true }); }
fs.writeFileSync('src/lib/other-games.ts', out);
