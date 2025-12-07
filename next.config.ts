import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    // remotePatterns removed - all assets are local
  },
};

export default nextConfig;
