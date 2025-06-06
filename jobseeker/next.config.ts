import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    appDir: true, // This should be true for App Router
  },
};

export default nextConfig;
