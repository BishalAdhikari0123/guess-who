import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TV Character Guess",
  description:
    "Play TV character guess mode with a dedicated Taarak Mehta Ka Ooltah Chashmah collection.",
  alternates: {
    canonical: "/tv",
  },
  openGraph: {
    title: "TV Character Guess",
    description:
      "Guess TV-series characters in fast rounds, including Taarak Mehta Ka Ooltah Chashmah.",
    url: "/tv",
  },
  twitter: {
    title: "TV Character Guess",
    description:
      "Guess TV-series characters in fast rounds, including Taarak Mehta Ka Ooltah Chashmah.",
  },
};

export { default } from "../page";
