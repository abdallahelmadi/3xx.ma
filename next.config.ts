import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true
  },
  images: {
    qualities: [75, 85, 95, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
}

export default nextConfig