import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const routes = ["/", "/games", "/anime", "/manhwa", "/tv", "/how-to-play", "/modes"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: getSiteUrl(route).toString(),
    lastModified: now,
    changeFrequency: route === "/" || route === "/games" || route === "/anime" || route === "/manhwa" || route === "/tv" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/games" || route === "/anime" || route === "/manhwa" || route === "/tv"
          ? 0.9
          : 0.7,
  }));
}
