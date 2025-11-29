import SectionOne from "@/components/about/SectionOne";
import Footer from "@/components/layouts/Footer";
import Layout from "@/components/layouts/Layout";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";
import { defaultSEO, generatePersonSchema, generateKeywords } from "@/lib/seo";

const About = () => {
  const seoConfig = {
    ...defaultSEO,
    title: "About Us - OpulenceDeveloper LLC | Software Development Company",
    description: "Learn about OpulenceDeveloper, a registered Limited Liability Company (LLC) and CAC certified software development company. Led by CEO Amobi Victor Chukwuka, specializing in AI Application Development, Web Development, Cross-Platform Mobile App Development, and Backend Development.",
    keywords: generateKeywords(['About Us', 'Company Profile', 'Software Development Company', 'LLC Nigeria', 'CAC Certified Company', 'CEO Amobi Victor Chukwuka', 'Software Company Enugu']),
    canonical: "https://opulencedeveloper.com/about",
    openGraph: {
      ...defaultSEO.openGraph,
      title: "About Us - OpulenceDeveloper LLC | Software Development Company",
      description: "Learn about OpulenceDeveloper, a registered Limited Liability Company (LLC) and CAC certified software development company. Led by CEO Amobi Victor Chukwuka.",
      url: "https://opulencedeveloper.com/about",
      type: "website",
    },
    twitter: {
      ...defaultSEO.twitter,
      title: "About Us - OpulenceDeveloper LLC | Software Development Company",
      description: "Registered Limited Liability Company (LLC) led by CEO Amobi Victor Chukwuka, and CAC certified software development company specializing in AI Application Development, Web Development, Cross-Platform Mobile App Development, and Backend Development.",
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
