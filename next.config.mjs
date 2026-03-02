/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ApexBuilder-manual',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
};

export default nextConfig;
