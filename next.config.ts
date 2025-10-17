import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },

  images: {
    remotePatterns: [{ hostname: "upload.wikimedia.org" }],
  },
};

export default nextConfig;
