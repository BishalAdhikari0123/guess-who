import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Games Character Guess",
	description:
		"Play game-character guess mode with multiple game universes, elimination boards, and online room support.",
	alternates: {
		canonical: "/games",
	},
	openGraph: {
		title: "Games Character Guess",
		description:
			"Challenge friends in game-character guess mode with fast rounds and online room play.",
		url: "/games",
	},
	twitter: {
		title: "Games Character Guess",
		description:
			"Challenge friends in game-character guess mode with fast rounds and online room play.",
	},
};

export { default } from "../page";
