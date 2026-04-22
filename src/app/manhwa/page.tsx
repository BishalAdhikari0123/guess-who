import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Manhwa Character Guess",
	description:
		"Play manhwa character guess mode with popular titles, elimination boards, and multiplayer-ready rooms.",
	alternates: {
		canonical: "/manhwa",
	},
	openGraph: {
		title: "Manhwa Character Guess",
		description:
			"Jump into manhwa character guessing with quick rounds and online room support.",
		url: "/manhwa",
	},
	twitter: {
		title: "Manhwa Character Guess",
		description:
			"Jump into manhwa character guessing with quick rounds and online room support.",
	},
};

export { default } from "../page";
