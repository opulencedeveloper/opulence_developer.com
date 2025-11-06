import SectionOne from "@/components/about/SectionOne";
import Footer from "@/components/layouts/Footer";
import Layout from "@/components/layouts/Layout";
import { NextSeo } from "next-seo";
import { defaultSEO, generatePersonSchema, generateKeywords } from "@/lib/seo";

const About = () => {
  const seoConfig = {
    ...defaultSEO,
    title: "About Amobi Victor Chukwuka - FullStack Software Engineer | OpulenceDeveloper",
    description: "Learn about Amobi Victor Chukwuka (OpulenceDeveloper), a FullStack Software Engineer based in Port Harcourt, Nigeria. Specializing in AI Engineering, Web Development, Mobile App Development, and Backend Development. Expert in JavaScript, TypeScript, Flutter, React, Next.js, Node.js, MongoDB, and PostgreSQL.",
    keywords: generateKeywords(['About Me', 'Developer Profile', 'Software Engineer Nigeria', 'FullStack Developer Port Harcourt', 'Amobi Victor Chukwuka']),
    canonical: "https://opulencedeveloper.com/about",
    openGraph: {
      ...defaultSEO.openGraph,
      title: "About Amobi Victor Chukwuka - FullStack Software Engineer | OpulenceDeveloper",
      description: "Learn about Amobi Victor Chukwuka, a FullStack Software Engineer specializing in AI Engineering, Web Development, Mobile App Development, and Backend Development. Based in Port Harcourt, Nigeria.",
      url: "https://opulencedeveloper.com/about",
      type: "profile",
    },
    twitter: {
      ...defaultSEO.twitter,
      title: "About Amobi Victor Chukwuka - FullStack Software Engineer",
      description: "FullStack Software Engineer specializing in AI Engineering, Web Development, Mobile App Development, and Backend Development.",
    },
  };

  return (
    <>
      <NextSeo {...seoConfig} />
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
