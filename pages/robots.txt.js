/**
 * Dynamic Robots.txt Route
 * Generates robots.txt at /robots.txt
 */

function Robots() {
  // This component will never render
  return null;
}

export async function getServerSideProps({ res }) {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://opulencedeveloper.com/sitemap.xml

# Allow all search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Allow AI crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

# Block admin and API routes
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Crawl-delay for respectful crawling
Crawl-delay: 1
`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
}

export default Robots;

