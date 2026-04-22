import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const routes = ["/", "/how-to-play", "/modes"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: getSiteUrl(route).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
