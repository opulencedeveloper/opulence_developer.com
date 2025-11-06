/**
 * Dynamic Sitemap Route
 * Generates sitemap.xml at /sitemap.xml
 */

import generateSitemap from '@/lib/sitemap';

function Sitemap() {
  // This component will never render
  return null;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;

