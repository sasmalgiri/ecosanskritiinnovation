/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Old WordPress URLs -> new routes, so existing links and search-engine
  // results keep working after the migration. 308 = permanent redirect.
  async redirects() {
    return [
      { source: '/360-2', destination: '/founder', permanent: true },
      { source: '/5s-contact-manager', destination: '/products/5s-contact-manager', permanent: true },
      { source: '/contact-me', destination: '/contact', permanent: true },
      { source: '/terms-and-conditions', destination: '/legal/terms', permanent: true },
      { source: '/privacy-policy', destination: '/legal/privacy', permanent: true },
      { source: '/legal-requirements', destination: '/legal/terms', permanent: true },
      { source: '/my-account', destination: '/legal/eula', permanent: true },
    ];
  },
};

export default nextConfig;
