/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.midjourney.com'
      },
      {
        protocol: 'https',
        hostname: 'www.midjourney.com'
      }
    ]
  },
  publicRuntimeConfig: {
    metadataBase: 'https://www.keywarts.com/',
  },
};

export default nextConfig;
