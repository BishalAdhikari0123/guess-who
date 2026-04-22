export const siteName = "MLBB- Guess Who";

export const siteDescription =
  "Play a fast Mobile Legends, anime, manhwa, and gaming character guess game with offline elimination boards and 6-digit online matches.";

export const siteKeywords = [
  "guess who game",
  "Mobile Legends game",
  "MLBB quiz",
  "anime character game",
  "manhwa character game",
  "online party game",
  "character guessing game",
  "browser game",
  "monetized game",
];

const defaultBaseUrl = "http://localhost:3000";

export function getSiteUrl(path: string = "/") {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? defaultBaseUrl;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, base);
}
