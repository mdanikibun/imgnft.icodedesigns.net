/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // true sẽ thực thi code 2 lần
  swcMinify: true,
  images: {
    domains: ["card.gamocorp.com"]
  }
}

module.exports = nextConfig
