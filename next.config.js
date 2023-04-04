/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'cf.bstatic.com'],
  },
};

module.exports = nextConfig;
