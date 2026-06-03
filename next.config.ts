import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the Turbopack workspace root to this project so it doesn't infer a
  // parent directory (the app lives beside the KMP project in a shared folder).
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
