/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // For Vercel deployment compatibility
    dangerouslyAllowSVG: true, // Allow SVG images
    contentDispositionType: 'attachment', // Force browser to download SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Prevent scripts in SVG
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