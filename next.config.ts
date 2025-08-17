/** @type {import('next').NextConfig} */
const SOL_URL =
  process.env.SOL_URL ||
  "https://philosopher-sol-git-main-gilalexander1s-projects.vercel.app";

const nextConfig = {
  async rewrites() {
    return [
      { source: "/sol", destination: SOL_URL },
      { source: "/sol/:path*", destination: `${SOL_URL}/:path*` },
    ];
  },
};

module.exports = nextConfig;
