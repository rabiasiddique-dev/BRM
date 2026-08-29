/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Redirect property listing pages to projects page
      {
        source: '/properties',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/properties/:slug',
        destination: '/projects',
        permanent: true,
      },
      // Redirect area-specific property pages to projects
      {
        source: '/areas',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/areas/:slug',
        destination: '/projects',
        permanent: true,
      },
      // Redirect sell/rent property pages to contact
      {
        source: '/sell-your-property',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/rent-your-property',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
