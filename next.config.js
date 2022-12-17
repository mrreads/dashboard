/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    api: 'http://localhost:3000/api/',
  },
}

module.exports = nextConfig
