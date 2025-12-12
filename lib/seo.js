/**
 * SEO Configuration and Utilities
 * Comprehensive SEO setup for maximum discoverability across all search platforms
 */

const siteConfig = {
  defaultTitle: 'OpulenceDeveloper | FullStack Software Engineer',
  titleTemplate: '%s | OpulenceDeveloper',
  defaultDescription:
    'FullStack Software Engineer Amobi Victor Chukwuka, specializing in AI Application Development, Web Development, Cross-Platform Mobile App Development, and Backend Development. CAC certified. Expert in JavaScript, TypeScript, Flutter, React, Next.js, Node.js, MongoDB, and PostgreSQL.',
  url: 'https://opulencedeveloper.com',
  siteName: 'OpulenceDeveloper',
  author: 'Amobi Victor Chukwuka',
  image: 'https://opulencedeveloper.com/images/opulence-developer-social-preview-image.png',
  twitterHandle: '@OpulenceDev', // Update with actual Twitter handle
  locale: 'en_US',
  type: 'website',
};

// Skills and technologies for keyword optimization
export const skills = [
  'FullStack Software Engineer',
  'Full Stack Developer',
  'AI Application Development',
  'Web Development',
  'Mobile App Development',
  'Backend Development',
  'JavaScript',
  'TypeScript',
  'Flutter',
  'React',
  'ReactJS',
  'Next.js',
  'NextJS',
  'Nuxt.js',
  'NuxtJS',
  'TailwindCSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'Arduino',
];

export const services = [
  'AI Application Development Services',
  'Web Development Services',
  'Mobile Application Development',
  'Backend Development Services',
  'Full Stack Development',
  'React Development',
  'Next.js Development',
  'Flutter App Development',
  'Node.js Backend Development',
  'Database Design',
  'API Development',
];

export const longTailKeywords = [
  'CAC registered software developer Nigeria',
  'FullStack software developer',
  'Next.js developer',
  'FullStack developer Nigeria',
  'React developer Enugu',
  'AI Application Development',
  'cross-platform mobile app development',
  'backend development services',
  'MongoDB developer',
  'PostgreSQL database development',
  'TypeScript development services',
  'software developer available',
  'professional software developer',
  'CAC certified software developer',
];

// Generate comprehensive keywords list
export const generateKeywords = (additional = []) => {
  return [
    ...skills,
    ...services,
    ...longTailKeywords,
    'OpulenceDeveloper',
    'Amobi Victor Chukwuka',
    'FullStack Software Engineer',
    'Software Developer',
    'CAC Registered',
    'CAC Certified',
    'Software Developer Nigeria',
    'Web Developer',
    'Mobile App Developer',
    'Backend Developer',
    ...additional,
  ].join(', ');
};

// Default SEO configuration
export const defaultSEO = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  canonical: siteConfig.url,
  openGraph: {
    type: siteConfig.type,
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: siteConfig.defaultTitle,
      },
    ],
  },
  twitter: {
    handle: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: siteConfig.author,
    },
    {
      name: 'keywords',
      content: generateKeywords(),
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#03262e',
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      name: 'googlebot',
      content: 'index, follow',
    },
    {
      name: 'bingbot',
      content: 'index, follow',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'canonical',
      href: siteConfig.url,
    },
  ],
};

// Generate Person schema for structured data
export const generatePersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Amobi Victor Chukwuka',
  alternateName: 'OpulenceDeveloper',
  url: siteConfig.url,
  jobTitle: 'FullStack Software Engineer',
  knowsAbout: skills,
  hasOccupation: [
    {
      '@type': 'Occupation',
      name: 'FullStack Software Engineer',
      occupationLocation: {
        '@type': 'City',
        name: 'Enugu',
        addressCountry: 'NG',
      },
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Enugu',
    addressCountry: 'NG',
  },
  sameAs: [
    // Add social media profiles here
    // 'https://github.com/yourusername',
    // 'https://linkedin.com/in/yourusername',
    // 'https://twitter.com/yourusername',
  ],
});

// Generate Portfolio schema
export const generatePortfolioSchema = (projects = []) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'OpulenceDeveloper Portfolio',
  description: siteConfig.defaultDescription,
  url: `${siteConfig.url}/projects`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.name || project.title,
        description: project.description || project.type,
        url: project.link,
        dateCreated: project.year,
        creator: {
          '@type': 'Person',
          name: 'Amobi Victor Chukwuka',
        },
        keywords: project.tools || '',
      },
    })),
  },
});

// Generate Service schema
export const generateServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'OpulenceDeveloper Services',
  description: siteConfig.defaultDescription,
  url: siteConfig.url,
  provider: {
    '@type': 'Person',
    '@id': siteConfig.url,
    name: 'Amobi Victor Chukwuka',
    alternateName: 'OpulenceDeveloper',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Enugu',
      addressCountry: 'NG',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'Worldwide',
  },
  serviceType: services,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '50+',
  },
});

// Generate Website schema
export const generateWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.siteName,
  url: siteConfig.url,
  description: siteConfig.defaultDescription,
  author: {
    '@type': 'Person',
    name: siteConfig.author,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

export default siteConfig;

