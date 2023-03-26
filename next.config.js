/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/basic-features/eslint#linting-custom-directories-and-files
  eslint: {
    dirs: ['config', 'cypress', 'src'],
  },
  experimental: {
    appDir: true,
    // https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#configure-the-project-to-use-the-edge-runtime
    runtime: 'edge',
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
