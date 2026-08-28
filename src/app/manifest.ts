import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ConvertX - Meta Ads & Performance Marketing Agency",
    short_name: "ConvertX",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#060608",
    theme_color: "#FF5500",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
