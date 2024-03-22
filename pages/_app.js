import { useEffect, useState } from "react";

import Cursor from "@/components/UI/Cursor.js";

import Head from "next/head";

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
  return ( <> 
      <Head>
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Opulence Developer | FullStack Software Engineer',
              url: 'https://opulencedeveloper.com',
              logo: 'https://opulencedeveloper.com/favicon.ico', // URL to your logo image
            }),
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
      </Head>
      {/* {isOnboarding && <Onboarding />} */}
      {/* <Layout> */}
      <Cursor />
        <Component {...pageProps} />
      {/* </Layout> */}
      
    {/* </main> */}
    </>
  );
}
