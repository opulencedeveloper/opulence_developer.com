import SectionOne from "@/components/about/SectionOne";
import Footer from "@/components/layouts/Footer";
import Layout from "@/components/layouts/Layout";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";
import { defaultSEO, generatePersonSchema, generateKeywords } from "@/lib/seo";

const About = () => {
  const seoConfig = {
    ...defaultSEO,
    title: "About Me - OpulenceDeveloper | FullStack Software Engineer",
    description: "Learn about Amobi Victor Chukwuka, a CAC certified FullStack Software Engineer specializing in AI Application Development, Web Development, Cross-Platform Mobile App Development, and Backend Development.",
    keywords: generateKeywords(['About Me', 'FullStack Software Engineer', 'Software Developer', 'CAC Certified', 'Amobi Victor Chukwuka', 'Software Developer Enugu']),
    canonical: "https://opulencedeveloper.com/about",
    openGraph: {
      ...defaultSEO.openGraph,
      title: "About Me - OpulenceDeveloper | FullStack Software Engineer",
      description: "Learn about Amobi Victor Chukwuka, a CAC certified FullStack Software Engineer.",
      url: "https://opulencedeveloper.com/about",
      type: "website",
    },
    twitter: {
      ...defaultSEO.twitter,
      title: "About Me - OpulenceDeveloper | FullStack Software Engineer",
      description: "FullStack Software Engineer Amobi Victor Chukwuka, CAC certified, specializing in AI Application Development, Web Development, Cross-Platform Mobile App Development, and Backend Development.",
    },
  };

  return (
    <>
      <Head>
        {generateNextSeo(seoConfig)}
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />
      <Layout>
      <SectionOne /> 
      </Layout>
      <Footer />
    </>
  );
};

export default About;
