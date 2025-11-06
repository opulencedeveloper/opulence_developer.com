import { useEffect, useState } from "react";

import Cursor from "@/components/UI/Cursor.js";

import Head from "next/head";
import { Toaster } from 'sonner';

// import 'intersection-observer';


import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  const [isOnboarding, setIsOnBoarding] = useState(true); 
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnBoarding(false);
    }, 8000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Opulence Developer | FullStack Software Engineer',
    alternateName: 'OpulenceDeveloper',
    url: 'https://opulencedeveloper.com',
    logo: 'https://opulencedeveloper.com/images/opulence-developer-social-preview-image.png',
    description: 'FullStack Software Engineer specializing in AI Engineering, Web Development, Mobile App Development, and Backend Development',
    founder: {
      '@type': 'Person',
      name: 'Amobi Victor Chukwuka',
      alternateName: 'OpulenceDeveloper',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Professional Services',
      url: 'https://opulencedeveloper.com',
    },
    sameAs: [
      // Add social media URLs here when available
    ],
  };

  return ( <> 
      <Head>
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      <meta name="theme-color" content="#03262e" /> 
        <meta
          property="og:image"
          content="https://opulencedeveloper.com/images/opulence-developer-social-preview-image.png"
        />
        <meta
          property="og:url"   
          content="https://opulencedeveloper.com"
        />
        <meta property="og:type" content="website" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://opulencedeveloper.com" />
      </Head>
      {/* {isOnboarding && <Onboarding />} */}
      {/* <Layout> */}
      <Cursor />
       <Toaster richColors position="top-right" />
        <Component {...pageProps} />
      {/* </Layout> */}
      
    {/* </main> */}
    </>
  );
}
