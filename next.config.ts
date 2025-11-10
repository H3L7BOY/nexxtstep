// next.config.ts
import type { NextConfig } from 'next'

/**
 * Next.js configuration for NEXTSTEP project
 * Compatible with Next.js 15.x
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    // ✅ Allow production builds even if ESLint errors exist
    ignoreDuringBuilds: true,
  },

  images: {
    // Configure domains if using <Image /> (optional)
    // domains: ['example.com'],
  },

  experimental: {
    // Enable experimental typed routes (optional)
    typedRoutes: true,
  },
}

export default nextConfig
