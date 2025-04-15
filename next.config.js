/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use these settings in production
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/semicolon',
    assetPrefix: '/semicolon/',
  } : {})
}

module.exports = nextConfig 