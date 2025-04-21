import type { NextConfig } from "next";
import { hostname } from 'os';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '**',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
