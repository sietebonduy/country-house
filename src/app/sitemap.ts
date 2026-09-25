import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      images: site.photos.map(absoluteUrl),
    },
  ];
}
