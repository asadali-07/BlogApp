/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Cloudinary base URL
        pathname: '/**', // Allow all paths
      },
    ],
  },
};

export default nextConfig;

