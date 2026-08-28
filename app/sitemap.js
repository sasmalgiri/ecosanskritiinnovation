const SITE = 'https://ecosanskritiinnovations.co.in';

export default function sitemap() {
  const routes = [
    '', '/work', '/services', '/products',
    '/products/mailin', '/products/antya-yuga', '/products/5s-contact-manager',
    '/products/kalsmritikosh', '/products/photo-ai', '/founder', '/contact',
    '/legal/terms', '/legal/privacy', '/legal/eula',
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    // /work and /services carry the commercial intent, so they rank just under
    // the homepage rather than level with a legal page.
    priority:
      path === '' ? 1
      : path === '/work' || path === '/services' ? 0.9
      : path.startsWith('/legal') ? 0.4
      : 0.7,
  }));
}
