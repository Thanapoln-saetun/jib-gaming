/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Add this back for Vercel deployment compatibility
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    // Enable static image optimization
    domains: [], // Keep empty for local images
  },
  // Static asset optimization
  experimental: {
    optimizePackageImports: ['@heroicons/react']
  }
}

module.exports = nextConfig 