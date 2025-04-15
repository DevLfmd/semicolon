/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/semicolon',
  assetPrefix: '/semicolon/',
  trailingSlash: true,
}

module.exports = nextConfig 