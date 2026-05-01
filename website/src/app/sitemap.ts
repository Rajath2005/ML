import { MetadataRoute } from "next";
import { experiments } from "@/data/experiments";

const baseUrl = "https://ml-lab-seven.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split('T')[0];

  // Homepage
  const homepage = {
    url: baseUrl,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 1.0,
  };

  // Experiments index page
  const experimentsPage = {
    url: `${baseUrl}/experiments`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  };

  // Individual experiment pages
  const experimentPages = experiments.map((exp) => ({
    url: `${baseUrl}/experiments/${exp.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [homepage, experimentsPage, ...experimentPages];
}
