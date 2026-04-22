type Character = {
  name: string;
  image: string;
};

const avatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0f172a&color=f8fafc&size=256&format=png`;

const toCharacters = (names: string[]): Character[] => names.map((name) => ({ name, image: avatar(name) }));

const soloLeveling = toCharacters([
  "Sung Jin-Woo",
  "Cha Hae-In",
  "Yoo Jin-Ho",
  "Go Gun-Hee",
  "Choi Jong-In",
  "Baek Yoonho",
  "Thomas Andre",
  "Liu Zhigang",
  "Ashborn",
  "Beru",
]);

const omniscientReader = toCharacters([
  "Kim Dokja",
  "Yoo Joonghyuk",
  "Han Sooyoung",
  "Jung Heewon",
  "Lee Hyunsung",
  "Shin Yoosung",
  "Lee Gilyoung",
  "Yoo Sangah",
  "Uriel",
  "Bihyung",
]);

const towerOfGod = toCharacters([
  "Twenty-Fifth Bam",
  "Khun Aguero Agnis",
  "Rak Wraithraiser",
  "Rachel",
  "Yuri Jahad",
  "Urek Mazino",
  "Endorsi Jahad",
  "Ha Jinsung",
  "Karaka",
  "Kallavan",
]);

const godOfHighSchool = toCharacters([
  "Jin Mori",
  "Han Daewi",
  "Yu Mira",
  "Park Mubong",
  "Ilpyo Park",
  "Baek Seungchul",
  "Dean",
  "Uma",
  "Sujin Lee",
  "Q",
]);

const tbate = toCharacters([
  "Arthur Leywin",
  "Tessia Eralith",
  "Sylvie",
  "Virion Eralith",
  "Jasmine Flamesworth",
  "Bairon Wykes",
  "Alea Triscan",
  "Caera Denoir",
  "Regis",
  "Agrona Vritra",
]);

const uniqueByName = (characters: Character[]) => {
  const seen = new Set<string>();
  return characters.filter((character) => {
    if (seen.has(character.name)) return false;
    seen.add(character.name);
    return true;
  });
};

const allManhwa = uniqueByName([
  ...soloLeveling,
  ...omniscientReader,
  ...towerOfGod,
  ...godOfHighSchool,
  ...tbate,
]);

export const manhwaCollections: Record<string, Character[]> = {
  "Solo Leveling": soloLeveling,
  "Omniscient Reader": omniscientReader,
  "Tower of God": towerOfGod,
  "The God of High School": godOfHighSchool,
  "The Beginning After The End": tbate,
  "Top Manhwa Mix": allManhwa,
};
