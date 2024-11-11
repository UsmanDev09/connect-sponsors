import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PRIVATE_REPO_URL: process.env.PRIVATE_REPO_URL
  }

};

export default nextConfig;
