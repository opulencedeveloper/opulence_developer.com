/**
 * SEO Configuration and Utilities
 * Comprehensive SEO setup for maximum discoverability across all search platforms
 */

const siteConfig = {
  defaultTitle: 'OpulenceDeveloper | FullStack Software Engineer Portfolio',
  titleTemplate: '%s | OpulenceDeveloper',
  defaultDescription:
    'FullStack Software Engineer specializing in AI Application Development, Web Development, Mobile App Development, and Backend Development. Expert in JavaScript, TypeScript, Flutter, React, Next.js, Node.js, MongoDB, and PostgreSQL. Available for freelance projects.',
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
  'best Flutter developer portfolio',
  'Next.js developer with SEO expertise',
  'FullStack developer Nigeria',
  'React developer Port Harcourt',
  'AI Application Developer portfolio',
  'mobile app developer portfolio',
  'backend developer Node.js',
  'MongoDB developer expert',
  'PostgreSQL database developer',
  'TypeScript fullstack developer',
  'web developer available for hire',
  'freelance FullStack developer',
  'expert React developer',
  'professional Next.js developer',
];

// Generate comprehensive keywords list
export const generateKeywords = (additional = []) => {
  return [
    ...skills,
    ...services,
    ...longTailKeywords,
    'OpulenceDeveloper',
    'Amobi Victor Chukwuka',
    'Portfolio',
    'Software Engineer',
    'Developer Portfolio',
    'Web Developer',
    'App Developer',
    'Freelance Developer',
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
  worksFor: {
    '@type': 'Organization',
    name: 'OpulenceDeveloper',
  },
  knowsAbout: skills,
  hasOccupation: [
    {
      '@type': 'Occupation',
      name: 'AI Application Developer',
      occupationLocation: {
        '@type': 'City',
        name: 'Port Harcourt',
        addressCountry: 'NG',
      },
    },
    {
      '@type': 'Occupation',
      name: 'Web Developer',
      occupationLocation: {
        '@type': 'City',
        name: 'Port Harcourt',
        addressCountry: 'NG',
      },
    },
    {
      '@type': 'Occupation',
      name: 'Mobile App Developer',
      occupationLocation: {
        '@type': 'City',
        name: 'Port Harcourt',
        addressCountry: 'NG',
      },
    },
    {
      '@type': 'Occupation',
      name: 'Backend Developer',
      occupationLocation: {
        '@type': 'City',
        name: 'Port Harcourt',
        addressCountry: 'NG',
      },
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Port Harcourt',
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
    name: 'Amobi Victor Chukwuka',
    alternateName: 'OpulenceDeveloper',
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

