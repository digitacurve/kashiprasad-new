import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kashi Prasad - Sacred Consecrated Malas & Ratnas",
    short_name: "Kashi Prasad",
    description: "Authentic consecrated 5-Mukhi Nepali Rudraksha, Certified Vedic Ratnas, and Kashi Vishwanath Puja Services sanctified in Varanasi.",
    start_url: "/",
    display: "standalone",
    background_color: "#06080c",
    theme_color: "#06080c",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icon-96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
  };
}
