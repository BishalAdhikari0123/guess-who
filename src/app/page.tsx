"use client";

import { useState, useEffect } from "react";
type Hero = {
  name: string;
  image: string;
};

const heroes: Hero[] = [
  {
    "name": "Aamon",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/3/3b/Aamon.png"
  },
  {
    "name": "Akai",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/c/c1/Akai.png"
  },
  {
    "name": "Aldous",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/b/bc/Aldous.png"
  },
  {
    "name": "Alice",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/8/82/Alice.png"
  },
  {
    "name": "Alpha",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/a/a8/Alpha.png"
  },
  {
    "name": "Alucard",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/e/e7/Alucard.png"
  },
  {
    "name": "Angela",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/f/fd/Angela.png"
  },
  {
    "name": "Argus",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/2/26/Argus.png"
  },
  {
    "name": "Arlott",
    "image": "https://ui-avatars.com/api/?name=Arlott&background=random"
  },
  {
    "name": "Atlas",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/0/04/Atlas.png"
  },
  {
    "name": "Aulus",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/a/ae/Aulus.png"
  },
  {
    "name": "Aurora",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/8/89/Aurora.png"
  },
  {
    "name": "Badang",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/1/10/Badang.png"
  },
  {
    "name": "Balmond",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/e/e1/Balmond.png"
  },
  {
    "name": "Bane",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/9/9a/Bane.png"
  },
  {
    "name": "Barats",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/5/50/Barats.png"
  },
  {
    "name": "Baxia",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/a/a5/Baxia.png"
  },
  {
    "name": "Beatrix",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/c/c2/Beatrix.png"
  },
  {
    "name": "Belerick",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/1/17/Belerick.png"
  },
  {
    "name": "Benedetta",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/f/f9/Benedetta.png"
  },
  {
    "name": "Brody",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/4/4c/Brody.png"
  },
  {
    "name": "Bruno",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/e/e7/Bruno.png"
  },
  {
    "name": "Carmilla",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/1/1d/Carmilla.png"
  },
  {
    "name": "Cecilion",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/4/41/Cecilion.png"
  },
  {
    "name": "Chang'e",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/8/87/Chang%27e.png"
  },
  {
    "name": "Chip",
    "image": "https://ui-avatars.com/api/?name=Chip&background=random"
  },
  {
    "name": "Chou",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/0/0f/Chou.png"
  },
  {
    "name": "Cici",
    "image": "https://ui-avatars.com/api/?name=Cici&background=random"
  },
  {
    "name": "Claude",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/0/0b/Claude.png"
  },
  {
    "name": "Clint",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/3/31/Clint.png"
  },
  {
    "name": "Cyclops",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/a/a9/Cyclops.png"
  },
  {
    "name": "Diggie",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/9/93/Diggie.png"
  },
  {
    "name": "Dyrroth",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/b/ba/Dyrroth.png"
  },
  {
    "name": "Edith",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/0/09/Edith.png"
  },
  {
    "name": "Esmeralda",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/d/d1/Esmeralda.png"
  },
  {
    "name": "Estes",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/7/7c/Estes.png"
  },
  {
    "name": "Eudora",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/9/93/Eudora.png"
  },
  {
    "name": "Fanny",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/5/54/Fanny.png"
  },
  {
    "name": "Faramis",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/7/72/Faramis.png"
  },
  {
    "name": "Floryn",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/7/71/Floryn.png"
  },
  {
    "name": "Franco",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/4/48/Franco.png"
  },
  {
    "name": "Fredrinn",
    "image": "https://ui-avatars.com/api/?name=Fredrinn&background=random"
  },
  {
    "name": "Freya",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/2/29/Freya.png"
  },
  {
    "name": "Gatotkaca",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/c/cc/Gatotkaca.png"
  },
  {
    "name": "Gloo",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/7/71/Gloo.png"
  },
  {
    "name": "Gord",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/3/34/Gord.png"
  },
  {
    "name": "Granger",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/4/4d/Granger.png"
  },
  {
    "name": "Grock",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/2/2b/Grock.png"
  },
  {
    "name": "Guinevere",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/8/89/Guinevere.png"
  },
  {
    "name": "Gusion",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/b/b2/Gusion.png"
  },
  {
    "name": "Hanabi",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/0/0e/Hanabi.png"
  },
  {
    "name": "Hanzo",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/f/ff/Hanzo.png"
  },
  {
    "name": "Harith",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/6/60/Harith.png"
  },
  {
    "name": "Harley",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/e/e4/Harley.png"
  },
  {
    "name": "Hayabusa",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/7/78/Hayabusa.png"
  },
  {
    "name": "Helcurt",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/f/f6/Helcurt.png"
  },
  {
    "name": "Hilda",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/5/58/Hilda.png"
  },
  {
    "name": "Hylos",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/d/d6/Hylos.png"
  },
  {
    "name": "Irithel",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/6/6b/Irithel.png"
  },
  {
    "name": "Ixia",
    "image": "https://ui-avatars.com/api/?name=Ixia&background=random"
  },
  {
    "name": "Jawhead",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/a/a7/Jawhead.png"
  },
  {
    "name": "Johnson",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/5/56/Johnson.png"
  },
  {
    "name": "Joy",
    "image": "https://ui-avatars.com/api/?name=Joy&background=random"
  },
  {
    "name": "Julian",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/7/77/Julian.png"
  },
  {
    "name": "Kadita",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/4/46/Kadita.png"
  },
  {
    "name": "Kagura",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/a/af/Kagura.png"
  },
  {
    "name": "Kaja",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/1/16/Kaja.png"
  },
  {
    "name": "Karina",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/8/8b/Karina.png"
  },
  {
    "name": "Karrie",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/1/11/Karrie.png"
  },
  {
    "name": "Khaleed",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/9/91/Khaleed.png"
  },
  {
    "name": "Khufra",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/0/02/Khufra.png"
  },
  {
    "name": "Kimmy",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/6/65/Kimmy.png"
  },
  {
    "name": "Lancelot",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/c/cd/Lancelot.png"
  },
  {
    "name": "Lapu-Lapu",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/8/82/Lapu-Lapu.png"
  },
  {
    "name": "Layla",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/c/c8/Layla.png"
  },
  {
    "name": "Leomord",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/5/59/Leomord.png"
  },
  {
    "name": "Lesley",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/6/69/Lesley.png"
  },
  {
    "name": "Ling",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/6/6d/Ling.png"
  },
  {
    "name": "Lolita",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/2/22/Lolita.png"
  },
  {
    "name": "Luo Yi",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/0/02/Luo_Yi.png"
  },
  {
    "name": "Lylia",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/6/61/Lylia.png"
  },
  {
    "name": "Martis",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/5/57/Martis.png"
  },
  {
    "name": "Masha",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/f/f4/Masha.png"
  },
  {
    "name": "Mathilda",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/9/95/Mathilda.png"
  },
  {
    "name": "Melissa",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/7/74/Melissa.png"
  },
  {
    "name": "Minotaur",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/7/7e/Minotaur.png"
  },
  {
    "name": "Minsitthar",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/3/37/Minsitthar.png"
  },
  {
    "name": "Miya",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/3/37/Miya.png"
  },
  {
    "name": "Moskov",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/8/82/Moskov.png"
  },
  {
    "name": "Nana",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/3/38/Nana.png"
  },
  {
    "name": "Natalia",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/8/82/Natalia.png"
  },
  {
    "name": "Natan",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/2/22/Natan.png"
  },
  {
    "name": "Nolan",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/1/19/Nolan.png"
  },
  {
    "name": "Novaria",
    "image": "https://ui-avatars.com/api/?name=Novaria&background=random"
  },
  {
    "name": "Odette",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/2/28/Odette.png"
  },
  {
    "name": "Paquito",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/5/57/Paquito.png"
  },
  {
    "name": "Pharsa",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/7/7b/Pharsa.png"
  },
  {
    "name": "Phoveus",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/e/ea/Phoveus.png"
  },
  {
    "name": "Popol and Kupa",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/f/fb/Popol_and_Kupa.png"
  },
  {
    "name": "Rafaela",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/8/87/Rafaela.png"
  },
  {
    "name": "Roger",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/c/c7/Roger.png"
  },
  {
    "name": "Ruby",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/a/a9/Ruby.png"
  },
  {
    "name": "Saber",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/2/23/Saber.png"
  },
  {
    "name": "Selena",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/1/1b/Selena.png"
  },
  {
    "name": "Silvanna",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/a/a9/Silvanna.png"
  },
  {
    "name": "Sun",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/6/61/Sun.png"
  },
  {
    "name": "Suyou",
    "image": "https://ui-avatars.com/api/?name=Suyou&background=random"
  },
  {
    "name": "Terizla",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/a/ac/Terizla.png"
  },
  {
    "name": "Thamuz",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/1/19/Thamuz.png"
  },
  {
    "name": "Tigreal",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/b/be/Tigreal.png"
  },
  {
    "name": "Uranus",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/e/ec/Uranus.png"
  },
  {
    "name": "Vale",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/6/63/Vale.png"
  },
  {
    "name": "Valentina",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/9/90/Valentina.png"
  },
  {
    "name": "Valir",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/9/95/Valir.png"
  },
  {
    "name": "Vexana",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/0/0a/Vexana.png"
  },
  {
    "name": "Wanwan",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/5/5c/Wanwan.png"
  },
  {
    "name": "X.Borg",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/5/55/X.Borg.png"
  },
  {
    "name": "Xavier",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/7/7d/Xavier.png"
  },
  {
    "name": "Yi Sun-shin",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/7/74/Yi_Sun-shin.png"
  },
  {
    "name": "Yin",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/f/f6/Yin.png"
  },
  {
    "name": "Yu Zhong",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/1/1b/Yu_Zhong.png"
  },
  {
    "name": "Yve",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/3/3d/Yve.png"
  },
  {
    "name": "Zhask",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/f/f6/Zhask.png"
  },
  {
    "name": "Zhuxin",
    "image": "https://ui-avatars.com/api/?name=Zhuxin&background=random"
  },
  {
    "name": "Zilong",
    "image": "https://static.wikia.nocookie.net/mobile-legends/images/6/66/Zilong.png"
  }
];

type Message = { id: number; text: string; sender: "system" | "user" | "correct" | "incorrect" };

export default function GuessWhoGame() {
  const [selected, setSelected] = useState<string[]>([]);
  const [displayedHeroes, setDisplayedHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    const shuffled = [...heroes].sort(() => 0.5 - Math.random());
    setDisplayedHeroes(shuffled.slice(0, 50));
  }, []);

  const toggleSelection = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter(n => n !== name));
    } else {
      setSelected([...selected, name]);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
          <h1 className="text-3xl text-yellow-600 uppercase tracking-widest font-bold m-0 drop-shadow-md">Guess The Hero</h1>
          <div className="flex gap-3">
            <button 
              className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-lg border border-slate-600 transition-colors shadow-sm font-semibold"
              onClick={() => setSelected([])}
            >
              Reset Clicks
            </button>
            <button 
              className="bg-yellow-600 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg border border-yellow-500 transition-colors shadow-sm font-bold"
              onClick={() => {
                setSelected([]);
                const shuffled = [...heroes].sort(() => 0.5 - Math.random());
                setDisplayedHeroes(shuffled.slice(0, 50));
              }}
            >
              Shuffle Heroes
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 w-full">
          {displayedHeroes.map((hero) => {
            const isSelected = selected.includes(hero.name);
            return (
              <div 
                key={hero.name}
                onClick={() => toggleSelection(hero.name)}
                className={`relative cursor-pointer transition-all duration-300 rounded-xl overflow-hidden border-4 ${
                  isSelected 
                    ? "border-red-900 opacity-25 grayscale scale-95" 
                    : "border-slate-800 hover:border-yellow-600 shadow-md hover:-translate-y-1 hover:shadow-yellow-600/20"
                }`}
              >
                <div className="aspect-square bg-slate-900">
                  <img 
                    src={hero.image} 
                    alt={hero.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent pt-6 pb-2 px-2 text-center">
                  <span className="font-bold text-sm tracking-wide capitalize drop-shadow-md">{hero.name}</span>
                </div>
                {isSelected && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-red-600 text-7xl font-black drop-shadow-[0_2px_4px_rgba(0,0,0,1)] opacity-90 scale-125">X</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
