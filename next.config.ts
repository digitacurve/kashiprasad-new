import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/puja-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
