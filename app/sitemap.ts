import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eleverve.green";
  const routes = [
    "",
    "/model",
    "/why-now",
    "/platform",
    "/solutions",
    "/technology",
    "/execution",
    "/portfolio",
    "/esg",
    "/team",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
