/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/basic-features/eslint#linting-custom-directories-and-files
  eslint: {
    dirs: ['cypress', 'src'],
  },
  // https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#configure-the-project-to-use-the-edge-runtime
  experimental: {
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
