/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // https://nextjs.org/docs/basic-features/eslint#linting-custom-directories-and-files
  eslint: {
    dirs: ['config', 'cypress', 'src'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
