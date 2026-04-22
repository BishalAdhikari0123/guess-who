import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Anime Character Guess",
	description:
		"Guess anime characters across curated series with elimination gameplay and optional online room matches.",
	alternates: {
		canonical: "/anime",
	},
	openGraph: {
		title: "Anime Character Guess",
		description:
			"Test your anime knowledge in a fast character-guess game with online and offline modes.",
		url: "/anime",
	},
	twitter: {
		title: "Anime Character Guess",
		description:
			"Test your anime knowledge in a fast character-guess game with online and offline modes.",
	},
};

export { default } from "../page";
