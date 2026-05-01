import { MetadataRoute } from "next";
import { experiments } from "@/data/experiments";

const baseUrl = "https://ml-lab-seven.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // Homepage
  const homepage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1.0,
  };

  // Experiments index page
  const experimentsPage = {
    url: `${baseUrl}/experiments`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  };

  // Individual experiment pages
  const experimentPages = experiments.map((exp) => ({
    url: `${baseUrl}/experiments/${exp.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [homepage, experimentsPage, ...experimentPages];
}
