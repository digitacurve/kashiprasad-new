import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kashiprasad.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/account",
          "/account/*",
          "/api/*",
          "/checkout",
          "/cart",
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/*.png$", "/*.jpg$", "/*.jpeg$", "/*.webp$", "/*.svg$"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

