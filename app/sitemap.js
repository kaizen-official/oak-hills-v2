import { site } from "@/lib/site";

export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/residences",
    "/amenities",
    "/location",
    "/gallery",
    "/construction-updates",
    "/contact",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
