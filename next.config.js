/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['photo-zmp3.zmdcdn.me', 'photo-resize-zmp3.zmdcdn.me', 's240-ava-talk-zmp3.zmdcdn.me'],
    minimumCacheTTL: 1500000,
  },
  compiler: {
    removeConsole: false,
  },
  swcMinify: true,
}

module.exports = nextConfig
