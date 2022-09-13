/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['flowbite.com', 'mdbootstrap.com'],
  },
  output: 'standalone',
};

module.exports = nextConfig;
