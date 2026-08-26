const SITE = 'https://ecosanskritiinnovations.co.in';

export default function sitemap() {
  const routes = [
    '', '/products',
    '/products/mailin', '/products/antya-yuga', '/products/5s-contact-manager',
    '/products/kalsmritikosh', '/products/photo-ai', '/founder', '/contact',
    '/legal/terms', '/legal/privacy', '/legal/eula',
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
