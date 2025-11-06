/**
 * Dynamic Sitemap Generator
 * Generates sitemap.xml for all pages in the portfolio
 */

const siteUrl = 'https://opulencedeveloper.com';

// All pages and their priorities
const pages = [
  {
    url: '',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/projects',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/code-support',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/cyndi-data-vendor',
    changefreq: 'monthly',
    priority: 0.6,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/shop',
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/kings-collection',
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/mercy-cuisine',
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/miaj-corporation',
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/miras-collection',
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/opulence-developer-software',
    changefreq: 'monthly',
    priority: 0.6,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/splendor-cakes-and-pasteries',
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/venerable-enterprice',
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/ydc-clothing',
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: new Date().toISOString(),
  },
];

function generateSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

export default generateSitemap;

