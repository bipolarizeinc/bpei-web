import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.polarpaw.online";
  return [
    "",
    "/services",
    "/about",
    "/contact",
    "/intake",
    "/etas",
    "/ecosystem",
    "/academy",
    "/lender-readiness",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : ["/etas", "/ecosystem", "/academy", "/lender-readiness"].includes(path) ? 0.9 : 0.8,
  }));
}
