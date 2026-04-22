"use client";

import { useState, useEffect, useRef } from "react";
import Peer, { DataConnection } from "peerjs";
import { otherGames } from "../lib/other-games";
import { animeCollections } from "../lib/anime-characters";
import { manhwaCollections } from "../lib/manhwa-characters";
import Link from "next/link";
import SimpleStatusChip from "@/components/game/SimpleStatusChip";

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

type MatchFormat = "bo3" | "bo5";
type MajorMode = "games" | "manhwa" | "anime";

type NetMessage =
  | { type: "format"; format: MatchFormat }
  | { type: "ready"; ready: boolean }
  | { type: "secretLocked"; name: string }
  | { type: "guess"; name: string }
  | { type: "roundEnd"; guess: string; correct: boolean; winner: "me" | "opponent" }
  | { type: "nextRound" }
  | { type: "resetMatch" }
  | { type: "ping"; at: number }
  | { type: "pong"; at: number };

export default function GuessWhoGame() {
  const [selected, setSelected] = useState<string[]>([]);
  const [displayedHeroes, setDisplayedHeroes] = useState<Hero[]>([]);
  const [heroCount, setHeroCount] = useState<number | 'all'>(50);
  const [majorMode, setMajorMode] = useState<MajorMode>("games");
  const [gameMode, setGameMode] = useState<string>("Mobile Legends");
  const [onlineMode, setOnlineMode] = useState<boolean>(false);
  const [matchFormat, setMatchFormat] = useState<MatchFormat>("bo3");
  const [myScore, setMyScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [roundNumber, setRoundNumber] = useState(1);
  const [roundWinner, setRoundWinner] = useState<"me" | "opponent" | null>(null);
  const [matchWinner, setMatchWinner] = useState<"me" | "opponent" | null>(null);
  const [mySecret, setMySecret] = useState<string>("");
  const [opponentSecret, setOpponentSecret] = useState<string>("");
  const [myReady, setMyReady] = useState(false);
  const [opponentReady, setOpponentReady] = useState(false);
  const [guessInput, setGuessInput] = useState<string>("");
  const [lastGuessInfo, setLastGuessInfo] = useState<string>("");

  const [connectionStatus, setConnectionStatus] = useState<
    "offline" | "hosting" | "joining" | "connected"
  >("offline");
  const [rtcState, setRtcState] = useState<string>("new");
  const [channelState, setChannelState] = useState<string>("closed");
  const [peerLive, setPeerLive] = useState(false);
  const [latencyMs, setLatencyMs] = useState<number | null>(null);
  const [lastSeenAt, setLastSeenAt] = useState<number | null>(null);
  const [roomCode, setRoomCode] = useState("");
  const [joinCode, setJoinCode] = useState("");

  const peerRef = useRef<Peer | null>(null);
  const connRef = useRef<DataConnection | null>(null);
  const autoGuessRoundRef = useRef<number>(-1);
  const heartbeatTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const winsNeeded = matchFormat === "bo3" ? 2 : 3;

  const gameCollections: Record<string, Hero[]> = {
    "Mobile Legends": heroes,
    ...((otherGames as Record<string, Hero[]>) || {}),
  };

  const collectionsByMajor: Record<MajorMode, Record<string, Hero[]>> = {
    games: gameCollections,
    manhwa: manhwaCollections as Record<string, Hero[]>,
    anime: animeCollections as Record<string, Hero[]>,
  };

  const currentCollections = collectionsByMajor[majorMode];

  useEffect(() => {
    const keys = Object.keys(currentCollections);
    if (!keys.includes(gameMode)) {
      setGameMode(keys[0] || "Mobile Legends");
    }
  }, [majorMode]);

  useEffect(() => {
    const currentRoster = currentCollections[gameMode] || [];
    setDisplayedHeroes(heroCount === 'all' ? currentRoster : currentRoster.slice(0, heroCount));
    setSelected([]);
    setMySecret("");
    setOpponentSecret("");
    setMyReady(false);
    setOpponentReady(false);
    setLastGuessInfo("");
  }, [heroCount, gameMode, majorMode]);

  useEffect(() => {
    if (!onlineMode || connectionStatus !== "connected") return;
    const remaining = displayedHeroes.filter((h) => !selected.includes(h.name));
    if (
      myReady &&
      opponentReady &&
      opponentSecret &&
      !roundWinner &&
      !matchWinner &&
      remaining.length === 1 &&
      autoGuessRoundRef.current !== roundNumber
    ) {
      const onlyName = remaining[0].name;
      autoGuessRoundRef.current = roundNumber;
      setGuessInput(onlyName);
      const correct = onlyName === opponentSecret;
      const winner: "me" | "opponent" = correct ? "me" : "opponent";
      setLastGuessInfo(`Auto-guess: ${onlyName} (${correct ? "correct" : "wrong"})`);
      concludeRound(winner);
      sendMessage({ type: "guess", name: onlyName });
      sendMessage({ type: "roundEnd", guess: onlyName, correct, winner });
    }
  }, [onlineMode, connectionStatus, myReady, opponentReady, opponentSecret, roundWinner, matchWinner, selected, displayedHeroes, roundNumber]);

  useEffect(() => {
    if (!onlineMode || connectionStatus !== "connected") {
      if (heartbeatTimerRef.current) {
        clearInterval(heartbeatTimerRef.current);
        heartbeatTimerRef.current = null;
      }
      setPeerLive(false);
      setLatencyMs(null);
      return;
    }

    if (heartbeatTimerRef.current) clearInterval(heartbeatTimerRef.current);
    heartbeatTimerRef.current = setInterval(() => {
      sendMessage({ type: "ping", at: Date.now() });
    }, 3000);

    return () => {
      if (heartbeatTimerRef.current) {
        clearInterval(heartbeatTimerRef.current);
        heartbeatTimerRef.current = null;
      }
    };
  }, [onlineMode, connectionStatus]);

  useEffect(() => {
    if (!lastSeenAt) return;
    const watcher = setInterval(() => {
      if (Date.now() - lastSeenAt > 10000) {
        setPeerLive(false);
      }
    }, 1500);
    return () => clearInterval(watcher);
  }, [lastSeenAt]);

  const teardownConnection = () => {
    if (heartbeatTimerRef.current) {
      clearInterval(heartbeatTimerRef.current);
      heartbeatTimerRef.current = null;
    }

    if (connRef.current) {
      connRef.current.close();
      connRef.current = null;
    }

    if (peerRef.current) {
      peerRef.current.destroy();
      peerRef.current = null;
    }

    setConnectionStatus("offline");
    setRtcState("new");
    setChannelState("closed");
    setPeerLive(false);
    setLatencyMs(null);
    setLastSeenAt(null);
    setOpponentReady(false);
  };

  const attachConnection = (conn: DataConnection) => {
    connRef.current = conn;
    setChannelState(conn.open ? "open" : "connecting");

    conn.on("open", () => {
      setConnectionStatus("connected");
      setChannelState("open");
      sendMessage({ type: "ping", at: Date.now() });
      if (mySecret) {
        sendMessage({ type: "secretLocked", name: mySecret });
      }
      if (myReady) {
        sendMessage({ type: "ready", ready: true });
      }
    });

    conn.on("close", () => {
      setConnectionStatus("offline");
      setChannelState("closed");
      setPeerLive(false);
    });

    conn.on("data", (payload) => {
      try {
        const msg = (typeof payload === "string" ? JSON.parse(payload) : payload) as NetMessage;
        handleNetMessage(msg);
      } catch {
        // ignore malformed packets
      }
    });

    conn.on("error", (err) => {
      setLastGuessInfo(`Connection error: ${err.type}`);
      setConnectionStatus("offline");
      setPeerLive(false);
    });
  };

  const sendMessage = (message: NetMessage) => {
    if (connRef.current && connRef.current.open) {
      connRef.current.send(message);
    }
  };

  const generateRoomCode = () => `${Math.floor(100000 + Math.random() * 900000)}`;

  const hostWithCode = async () => {
    teardownConnection();
    const code = generateRoomCode();
    setRoomCode(code);
    setJoinCode(code);
    setConnectionStatus("hosting");
    setRtcState("creating-host");

    const peer = new Peer(code);
    peerRef.current = peer;

    peer.on("open", () => {
      setRtcState("host-ready");
    });

    peer.on("connection", (conn) => {
      setRtcState("peer-joined");
      attachConnection(conn);
    });

    peer.on("disconnected", () => {
      setConnectionStatus("offline");
      setPeerLive(false);
      setRtcState("disconnected");
    });

    peer.on("error", (err) => {
      setLastGuessInfo(`Peer error: ${err.type}`);
      setConnectionStatus("offline");
      setRtcState(`error:${err.type}`);
    });
  };

  const joinWithCode = async () => {
    const code = joinCode.trim();
    if (!/^\d{6}$/.test(code)) {
      setLastGuessInfo("Enter a valid 6-digit code.");
      return;
    }

    teardownConnection();
    setConnectionStatus("joining");
    setRtcState("creating-client");

    const peer = new Peer();
    peerRef.current = peer;

    peer.on("open", () => {
      setRtcState("client-ready");
      const conn = peer.connect(code, { reliable: true });
      attachConnection(conn);
    });

    peer.on("disconnected", () => {
      setConnectionStatus("offline");
      setPeerLive(false);
      setRtcState("disconnected");
    });

    peer.on("error", (err) => {
      setLastGuessInfo(`Peer error: ${err.type}`);
      setConnectionStatus("offline");
      setRtcState(`error:${err.type}`);
    });
  };

  const copyRoomCode = async () => {
    if (!roomCode) return;
    await navigator.clipboard.writeText(roomCode);
  };

  const concludeRound = (winner: "me" | "opponent") => {
    if (roundWinner || matchWinner) return;

    const nextMy = myScore + (winner === "me" ? 1 : 0);
    const nextOpp = opponentScore + (winner === "opponent" ? 1 : 0);

    setMyScore(nextMy);
    setOpponentScore(nextOpp);
    setRoundWinner(winner);

    if (nextMy >= winsNeeded || nextOpp >= winsNeeded) {
      setMatchWinner(winner);
    }
  };

  const resetRound = (broadcast = true) => {
    setSelected([]);
    setGuessInput("");
    setLastGuessInfo("");
    setMySecret("");
    setOpponentSecret("");
    setMyReady(false);
    setOpponentReady(false);
    setRoundWinner(null);
    autoGuessRoundRef.current = -1;
    setRoundNumber((r) => r + 1);
    if (broadcast) sendMessage({ type: "nextRound" });
  };

  const resetMatch = (broadcast = true) => {
    setMyScore(0);
    setOpponentScore(0);
    setRoundNumber(1);
    setMatchWinner(null);
    setRoundWinner(null);
    setSelected([]);
    setGuessInput("");
    setLastGuessInfo("");
    setMySecret("");
    setOpponentSecret("");
    setMyReady(false);
    setOpponentReady(false);
    autoGuessRoundRef.current = -1;
    if (broadcast) sendMessage({ type: "resetMatch" });
  };

  const handleNetMessage = (msg: NetMessage) => {
    switch (msg.type) {
      case "format":
        setMatchFormat(msg.format);
        break;
      case "ready":
        setOpponentReady(msg.ready);
        break;
      case "secretLocked":
        setOpponentSecret(msg.name);
        setLastGuessInfo("Opponent locked a secret character.");
        break;
      case "guess": {
        setLastGuessInfo(`Opponent guessed: ${msg.name}`);
        break;
      }
      case "roundEnd":
        setLastGuessInfo(`Your guess: ${msg.guess} (${msg.correct ? "correct" : "wrong"})`);
        concludeRound(msg.winner);
        break;
      case "nextRound":
        resetRound(false);
        break;
      case "resetMatch":
        resetMatch(false);
        break;
      case "ping":
        setPeerLive(true);
        setLastSeenAt(Date.now());
        sendMessage({ type: "pong", at: msg.at });
        break;
      case "pong":
        setPeerLive(true);
        setLastSeenAt(Date.now());
        setLatencyMs(Math.max(0, Date.now() - msg.at));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    return () => teardownConnection();
  }, []);

  const toggleSelection = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter(n => n !== name));
    } else {
      setSelected([...selected, name]);
    }
  };

  const lockSecret = () => {
    if (!mySecret) return;
    setMyReady(true);
    sendMessage({ type: "secretLocked", name: mySecret });
    sendMessage({ type: "ready", ready: true });
  };

  const sendGuess = () => {
    if (!guessInput || !myReady || !opponentReady || !opponentSecret || roundWinner || matchWinner) return;
    const correct = !!opponentSecret && guessInput === opponentSecret;
    const winner: "me" | "opponent" = correct ? "me" : "opponent";
    setLastGuessInfo(`Your guess: ${guessInput} (${correct ? "correct" : "wrong"})`);
    concludeRound(winner);
    sendMessage({ type: "guess", name: guessInput });
    sendMessage({ type: "roundEnd", guess: guessInput, correct, winner });
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      
      {/* Dynamic Grid Background Overlay */}
      <div className="pointer-events-none absolute inset-0" />

      {/* Sticky Header with Glassmorphism */}
      <div className="sticky top-0 z-50 bg-neutral-950 border-b border-white/15 mb-6">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white m-0">
              Guess The Character
            </h1>
            <p className="text-zinc-300 text-sm mt-1">Simple elimination board for offline and online play.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className={`px-4 py-2 rounded-md border font-medium text-xs uppercase transition-all ${onlineMode ? "border-white bg-white text-black" : "border-white/20 bg-zinc-900 text-zinc-200"}`}
              onClick={() => {
                const next = !onlineMode;
                setOnlineMode(next);
                if (!next) {
                  teardownConnection();
                  setRoomCode("");
                  setJoinCode("");
                }
              }}
            >
              {onlineMode ? "Online Mode On" : "Online Mode Off"}
            </button>
            <select
              title="Select Major Mode"
              className="px-3 py-2 rounded-md border border-white/20 bg-zinc-900 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
              value={majorMode}
              onChange={(e) => setMajorMode(e.target.value as MajorMode)}
            >
              <option value="games">Games</option>
              <option value="manhwa">Manhwa</option>
              <option value="anime">Anime</option>
            </select>
            <select
              title="Select Collection"
              className="px-3 py-2 rounded-md border border-white/20 bg-zinc-900 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
              value={gameMode}
              onChange={(e) => setGameMode(e.target.value)}
            >
              {Object.keys(currentCollections).map((game) => (
                <option key={game} value={game}>{game}</option>
              ))}
            </select>
            <select
              title="Select Hero Count"
              className="px-3 py-2 rounded-md border border-white/20 bg-zinc-900 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
              value={heroCount}
              onChange={(e) => {
                const val = e.target.value;
                setHeroCount(val === 'all' ? 'all' : Number(val));
                setSelected([]);
              }}
            >
              <option value={25}>25 Heroes</option>
              <option value={50}>50 Heroes</option>
              <option value={75}>75 Heroes</option>
              <option value="all">All Heroes</option>
            </select>
            <button 
              className="px-4 py-2 rounded-md border border-white/20 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 text-sm transition"
              onClick={() => setSelected([])}
            >
              Reset Clicks
            </button>
            <Link href="/how-to-play" className="px-4 py-2 rounded-md border border-white/20 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 text-sm">How to Play</Link>
            <Link href="/modes" className="px-4 py-2 rounded-md border border-white/20 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 text-sm">Modes</Link>
          </div>
        </div>
      </div>

      {onlineMode && (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-6 relative z-10">
          <div className="rounded-lg border border-white/15 bg-zinc-950 p-4 md:p-5 space-y-4">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div className="flex items-center gap-3">
                <SimpleStatusChip label="Status" value={connectionStatus} tone={connectionStatus === "connected" ? "good" : "neutral"} />
                <div className={`h-2.5 w-2.5 rounded-full ${peerLive ? "bg-emerald-400 animate-pulse" : "bg-red-400"}`} />
                <SimpleStatusChip label="Peer" value={peerLive ? "Live" : "Not Live"} tone={peerLive ? "good" : "bad"} />
                {latencyMs !== null && <SimpleStatusChip label="Ping" value={`${latencyMs}ms`} />}
              </div>
              <div className="flex items-center gap-2">
                <label className="text-xs uppercase tracking-widest text-zinc-400">Format</label>
                <select
                  className="px-3 py-2 rounded border border-white/20 bg-black text-sm text-zinc-100"
                  value={matchFormat}
                  onChange={(e) => {
                    const f = e.target.value as MatchFormat;
                    setMatchFormat(f);
                    sendMessage({ type: "format", format: f });
                  }}
                >
                  <option value="bo3">Best of 3</option>
                  <option value="bo5">Best of 5</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-2 rounded border border-white/20 bg-zinc-900 text-xs uppercase" onClick={hostWithCode}>Host with 6-Digit Code</button>
              <div className="flex items-center gap-2 rounded border border-white/20 bg-zinc-900 px-2 py-1">
                <input
                  className="w-28 bg-transparent text-center tracking-[0.35em] text-sm outline-none text-zinc-100"
                  placeholder="000000"
                  maxLength={6}
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                />
                <button className="px-2 py-1 rounded border border-white/20 bg-black text-[11px] uppercase text-zinc-100" onClick={joinWithCode}>Join</button>
              </div>
              <button className="px-3 py-2 rounded border border-white/20 bg-zinc-900 text-xs uppercase disabled:opacity-50" onClick={copyRoomCode} disabled={!roomCode}>Copy Room Code</button>
              <button className="px-3 py-2 rounded border border-white/25 bg-black text-xs uppercase" onClick={teardownConnection}>Disconnect</button>
            </div>

            <div className="text-[11px] text-zinc-400 uppercase tracking-wider">
              RTC: {rtcState} | Data channel: {channelState}
            </div>
            <div className="text-sm font-semibold tracking-[0.2em] text-zinc-100 uppercase">
              Room Code: {roomCode || "------"}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 rounded border border-white/15 bg-black space-y-2">
                <div className="text-xs uppercase tracking-widest text-zinc-300">Secret Character (Only you can see)</div>
                <select
                  className="w-full px-3 py-2 rounded border border-white/20 bg-zinc-900 text-sm text-zinc-100"
                  value={mySecret}
                  onChange={(e) => {
                    setMySecret(e.target.value);
                    if (myReady) {
                      setMyReady(false);
                      sendMessage({ type: "ready", ready: false });
                    }
                  }}
                >
                  <option value="">Select your secret character</option>
                  {displayedHeroes.map((h) => (
                    <option key={`secret-${h.name}`} value={h.name}>{h.name}</option>
                  ))}
                </select>
                <button className="px-3 py-2 rounded border border-white/25 bg-white text-black text-xs uppercase font-semibold" onClick={lockSecret}>Lock Character</button>
                <div className="text-xs text-zinc-300">You: {myReady ? "Ready" : "Not Ready"} | Opponent: {opponentReady ? "Ready" : "Not Ready"}</div>
                <div className="text-[11px] text-zinc-400">Opponent secret stored: {opponentSecret ? "Yes" : "Waiting..."}</div>
              </div>

              <div className="p-3 rounded border border-white/15 bg-black space-y-2">
                <div className="text-xs uppercase tracking-widest text-zinc-300">Guess Opponent Character</div>
                <select
                  className="w-full px-3 py-2 rounded border border-white/20 bg-zinc-900 text-sm text-zinc-100"
                  value={guessInput}
                  onChange={(e) => setGuessInput(e.target.value)}
                  disabled={!myReady || !opponentReady || !!roundWinner || !!matchWinner}
                >
                  <option value="">Select your guess</option>
                  {displayedHeroes.map((h) => (
                    <option key={`guess-${h.name}`} value={h.name}>{h.name}</option>
                  ))}
                </select>
                <button className="px-3 py-2 rounded border border-white/25 bg-white text-black text-xs uppercase font-semibold disabled:opacity-60" onClick={sendGuess} disabled={!guessInput || !myReady || !opponentReady || !!roundWinner || !!matchWinner}>Submit Guess</button>
                <div className="text-xs text-zinc-300">{lastGuessInfo || "No guesses yet."}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/15">
              <div className="text-sm font-bold">Round {roundNumber} | You {myScore} - {opponentScore} Opponent | First to {winsNeeded}</div>
              <div className="flex gap-2">
                {roundWinner && !matchWinner && (
                  <button className="px-3 py-2 rounded border border-white/25 bg-zinc-900 text-xs uppercase" onClick={() => resetRound(true)}>Next Round</button>
                )}
                {matchWinner && (
                  <button className="px-3 py-2 rounded border border-white/25 bg-zinc-900 text-xs uppercase" onClick={() => resetMatch(true)}>Reset Match</button>
                )}
              </div>
            </div>

            {roundWinner && <div className="text-sm text-zinc-200">Round winner: {roundWinner === "me" ? "You" : "Opponent"}</div>}
            {matchWinner && <div className="text-base text-white font-bold">Match winner: {matchWinner === "me" ? "You" : "Opponent"}</div>}
          </div>
        </div>
      )}

      {/* Main Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 flex flex-col items-center relative z-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 gap-3 sm:gap-4 w-full">
          {displayedHeroes.map((hero) => {
            const isSelected = selected.includes(hero.name);
            return (
              <div 
                key={hero.name}
                onClick={() => toggleSelection(hero.name)}
                className={`group relative cursor-pointer transition-all duration-500 rounded-lg overflow-hidden shadow-xl aspect-[3/4] flex flex-col bg-slate-900 ${
                  isSelected 
                    ? "opacity-30 grayscale-[1] scale-[0.95] border border-zinc-700" 
                    : "hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(255,255,255,0.08)] border border-zinc-700 hover:border-zinc-300"
                }`}
              >
                {/* Image Section */}
                <div className={`absolute inset-0 w-full h-full ${gameMode === "Cookie Run: Kingdom" ? "bg-slate-100" : "bg-black"}`}>
                  <img 
                    src={hero.image} 
                    alt={hero.name} 
                    className={`w-full h-full object-contain p-1 transition-all duration-700 ${!isSelected ? "group-hover:scale-[1.08] group-hover:brightness-110" : ""}`}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(hero.name)}&background=1e293b&color=f8fafc&size=256`;
                    }}
                    loading="lazy"
                  />
                  {/* Subtle vignette gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 pb-3 pt-6 px-1 text-center pointer-events-none">
                    <span className="font-bold text-[11px] sm:text-[12px] tracking-widest text-slate-100 uppercase drop-shadow-[0_3px_5px_rgba(0,0,0,1)] break-words">
                      {hero.name}
                    </span>
                  </div>
                </div>

                {/* Red X Cross Out Overlay */}
                {isSelected && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="relative flex items-center justify-center w-full h-full">
                      <div className="absolute w-[150%] h-2.5 bg-white/90 rotate-[55deg] shadow-[0_0_18px_rgba(255,255,255,0.35)] blur-[0.5px]"></div>
                      <div className="absolute w-[150%] h-2.5 bg-white/90 -rotate-[55deg] shadow-[0_0_18px_rgba(255,255,255,0.35)] blur-[0.5px]"></div>
                    </div>
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