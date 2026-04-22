type Character = {
  name: string;
  image: string;
};

const avatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=111827&color=f8fafc&size=256&format=png`;

const toCharacters = (names: string[]): Character[] => names.map((name) => ({ name, image: avatar(name) }));

const onePiece = toCharacters([
  "Monkey D. Luffy",
  "Roronoa Zoro",
  "Nami",
  "Usopp",
  "Sanji",
  "Tony Tony Chopper",
  "Nico Robin",
  "Franky",
  "Brook",
  "Jinbe",
  "Portgas D. Ace",
  "Trafalgar Law",
]);

const naruto = toCharacters([
  "Naruto Uzumaki",
  "Sasuke Uchiha",
  "Sakura Haruno",
  "Kakashi Hatake",
  "Hinata Hyuga",
  "Shikamaru Nara",
  "Gaara",
  "Itachi Uchiha",
  "Jiraiya",
  "Tsunade",
  "Might Guy",
  "Madara Uchiha",
]);

const dragonBall = toCharacters([
  "Goku",
  "Vegeta",
  "Gohan",
  "Piccolo",
  "Future Trunks",
  "Krillin",
  "Bulma",
  "Frieza",
  "Beerus",
  "Whis",
]);

const attackOnTitan = toCharacters([
  "Eren Yeager",
  "Mikasa Ackerman",
  "Armin Arlert",
  "Levi Ackerman",
  "Erwin Smith",
  "Hange Zoe",
  "Reiner Braun",
  "Annie Leonhart",
  "Jean Kirstein",
  "Historia Reiss",
]);

const demonSlayer = toCharacters([
  "Tanjiro Kamado",
  "Nezuko Kamado",
  "Zenitsu Agatsuma",
  "Inosuke Hashibira",
  "Kyojuro Rengoku",
  "Giyu Tomioka",
  "Shinobu Kocho",
  "Tengen Uzui",
  "Muzan Kibutsuji",
  "Kanao Tsuyuri",
]);

const uniqueByName = (characters: Character[]) => {
  const seen = new Set<string>();
  return characters.filter((character) => {
    if (seen.has(character.name)) return false;
    seen.add(character.name);
    return true;
  });
};

const allAnime = uniqueByName([
  ...onePiece,
  ...naruto,
  ...dragonBall,
  ...attackOnTitan,
  ...demonSlayer,
]);

export const animeCollections: Record<string, Character[]> = {
  "One Piece": onePiece,
  Naruto: naruto,
  "Dragon Ball": dragonBall,
  "Attack on Titan": attackOnTitan,
  "Demon Slayer": demonSlayer,
  "All Anime": allAnime,
};
