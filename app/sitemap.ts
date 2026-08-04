import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.polarpaw.online";
  return ["", "/services", "/about", "/contact", "/intake", "/etas"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/etas" ? 0.9 : 0.8,
  }));
}
