const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Needed to make react-dnd-beautiful
  reactStrictMode: false,
};

module.exports = withNextIntl(nextConfig);
