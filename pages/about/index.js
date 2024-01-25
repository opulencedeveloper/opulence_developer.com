import SectionOne from "@/components/about/SectionOne";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Amobi Victor Chukwuka - OpulenceDeveloper</title>
        <meta
          name="description"
          content="Learn about Amobi Victor Chukwuka, a FullStack Software Engineer specializing in web development, application development and Back End development. Discover his passion for coding and creating meaningful digital experiences."
        />
        <meta
          name="keywords"
          content="OpulenceDeveloper, About Me, FullStack Software Engineer, Web Development, Application Development, Back End Development"
        />
        <meta name="author" content="Amobi Victor Chukwuka" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="About Amobi Victor Chukwuka - OpulenceDeveloper"
        />
        <meta
          property="og:description"
          content="Explore the profile of Amobi Victor Chukwuka, a skilled FullStack Software Engineer. Discover my journey, expertise, and passion for creating digital solutions."
        />
      </Head>
      <SectionOne />
      <Footer />
    </>
  );
};

export default About;
