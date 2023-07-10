/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  },

  async rewrites() {
    return [
      // {
      //   source: '/signup/:path*',
      //   destination: 'http://localhost:5000/signup/:path*',
      // },
      // {
      //   source: '/signin/:path*',
      //   destination: 'http://localhost:5000/signin/:path*',
      // },
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
    ];
  },
};

module.exports = nextConfig;
