/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use these settings in production
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/devlfmd',
    assetPrefix: '/devlfmd/',
  } : {})
}

module.exports = nextConfig 