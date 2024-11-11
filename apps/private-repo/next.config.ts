import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PUBLIC_REPO_URL: process.env.PUBLIC_REPO_URL
  }
};

export default nextConfig;
