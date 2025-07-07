/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Remove unoptimized: true to allow proper image optimization
    // Remove localhost-only domains to allow production deployment
  },
  // Add static asset optimization
  experimental: {
    optimizePackageImports: ['@heroicons/react']
  }
}

module.exports = nextConfig 