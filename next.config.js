/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "cloudflare-ipfs.com" },
    ],
  },
};

module.exports = nextConfig;
