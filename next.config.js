/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Only add HMR config in development and client-side
    if (dev && !isServer) {
      config.watchOptions = {
        ignored: ['**/node_modules', '**/.next'],
        aggregateTimeout: 300,
        poll: 1000,
      }
    }
    return config
  }
}
module.exports = nextConfig