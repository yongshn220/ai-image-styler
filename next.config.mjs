/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com'
      }
    ]
  },
  publicRuntimeConfig: {
    metadataBase: 'https://www.keywarts.com/',
  },
};

export default nextConfig;
