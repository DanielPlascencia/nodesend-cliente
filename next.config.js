/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  env: {
    backendURL: "http://127.0.0.1:4000",
    frontendURL: "http://127.0.0.1:3000",
  },
};
