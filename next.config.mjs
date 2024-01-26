/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'top-right',
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'bit.ly'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bit.ly',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
};

export default nextConfig;
