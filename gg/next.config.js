/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com", "luxurywatchesusa.com"],
  },
  env: {
    REACT_APP_PUBLISH_KEY: process.env.REACT_APP_PUBLISH_KEY,
  }
}

module.exports = nextConfig
