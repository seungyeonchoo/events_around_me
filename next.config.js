/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ };
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  async rewrites() {
    return [
      {
        source: '/signin/:path*',
        destination: 'http://localhost:5000/signin/:path*',
      },
      {
        source: '/users/:path*',
        destination: 'http://localhost:5000/users/:path*',
      },
      {
        source: '/habits/:path*',
        destination: 'http://localhost:5000/habits/:path*',
      },
      {
        source: '/diaries/:path*',
        destination: 'http://localhost:5000/diaries/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
