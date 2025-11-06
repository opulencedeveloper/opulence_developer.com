import { useEffect, useRef } from "react";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from "@/components/UI/NavBar";
import Hero from "@/components/homepage/Hero";
import Role from "@/components/homepage/Role";
import About from "@/components/homepage/About";
import Services from "@/components/homepage/Services";
import Works from "@/components/homepage/Works";
import Contact from "@/components/homepage/Contact";
import Footer from "@/components/UI/Footer";
import { defaultSEO, generatePersonSchema, generateServiceSchema, generateWebsiteSchema, generatePortfolioSchema, generateKeywords } from "@/lib/seo";

const HomePage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRefs = useRef([]); // Creating a sectionRefs array

  // Scrub animation of section headings
  useEffect(() => {
    //TODO Learn useContext and useRef here
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");

      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 550px",
          end: "bottom 550px",
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",

        });
        ScrollTrigger.refresh()
      });
    });
  }, []);

  

  // Projects data for structured data
  const projects = [
    {
      name: "Ebocab Passenger and Driver App",
      description: "Mobile application for passenger and driver management",
      link: "https://www.ebocab.com/",
      year: "2025",
      tools: "Flutter • Node.js • TypeScript",
      type: "App. Development • Backend Dev."
    },
    {
      name: "REI capital growth",
      description: "Financial services platform",
      link: "https://reicapitalgrowth.com/",
      year: "2021",
      tools: "HTML • CSS • Javascript",
      type: "Frontend Development"
    },
    {
      name: "AI Assistant",
      description: "AI-powered assistant platform",
      link: "https://aanbestedingsjurist.ai",
      year: "2023",
      tools: "HTML • TailwindCSS • Javascript",
      type: "Frontend Development"
    },
    {
      name: "Contentmatch",
      description: "Content matching platform",
      link: "https://contentmatch.io",
      year: "2023",
      tools: "HTML • TailwindCSS • Javascript",
      type: "Frontend Development"
    },
    {
      name: "Outstanding dot website",
      description: "Business website platform",
      link: "https://outstandingdot.com",
      year: "2023",
      tools: "Node.js • Typescript • PostgreSql",
      type: "Backend Development"
    },
    {
      name: "Uchecrypt",
      description: "Cryptocurrency platform",
      link: "https://uchecrypt.com",
      year: "2023",
      tools: "Next.js • TailwindCSS • Node.js • MongoDb",
      type: "Backend • Front end Development"
    },
    {
      name: "Ebocab",
      description: "Transportation platform",
      link: "https://www.ebocab.com",
      year: "2024",
      tools: "Next.js • Node.js",
      type: "Backend • Front end Development"
    }
  ];

  const seoConfig = {
    ...defaultSEO,
    title: "OpulenceDeveloper | FullStack Software Engineer Portfolio",
    description: "FullStack Software Engineer specializing in AI Engineering, Web Development, Mobile App Development, and Backend Development. Expert in JavaScript, TypeScript, Flutter, React, Next.js, Node.js, MongoDB, and PostgreSQL. Available for freelance projects. Want a website? Want an App? I'm available for you.",
    keywords: generateKeywords(['Portfolio', 'Freelance Developer', 'Available for Hire', 'Web Developer Nigeria', 'React Developer', 'Next.js Expert']),
    canonical: "https://opulencedeveloper.com",
    openGraph: {
      ...defaultSEO.openGraph,
      title: "OpulenceDeveloper | FullStack Software Engineer Portfolio",
      description: "FullStack Software Engineer specializing in AI Engineering, Web Development, Mobile App Development, and Backend Development. Expert in JavaScript, TypeScript, Flutter, React, Next.js, Node.js, MongoDB, and PostgreSQL. Available for freelance projects.",
      url: "https://opulencedeveloper.com",
    },
    twitter: {
      ...defaultSEO.twitter,
      title: "OpulenceDeveloper | FullStack Software Engineer Portfolio",
      description: "FullStack Software Engineer specializing in AI Engineering, Web Development, Mobile App Development, and Backend Development.",
    },
    additionalMetaTags: [
      ...defaultSEO.additionalMetaTags,
      {
        name: "language",
        content: "English",
      },
      {
        name: "geo.region",
        content: "NG-RI",
      },
      {
        name: "geo.placename",
        content: "Port Harcourt",
      },
      {
        name: "geo.position",
        content: "4.8156;7.0498",
      },
      {
        name: "ICBM",
        content: "4.8156, 7.0498",
      },
    ],
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateServiceSchema()),
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateWebsiteSchema()),
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generatePortfolioSchema(projects)),
      }}
    />

      <div className="bg-secondary-100">
      <NavBar sectionRefs={sectionRefs.current} />{" "}
      {/* passing sectionRefs props to give access to Navbar, Navbar can then access the props which have access to the array of sectionRef and loop over it */}
      <Hero />
      <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
        <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />{" "}
        {/* forwardedRef props to pass into the child component to access the ref, then this will go into the useRef array  */}
        <About />
        <Services />
        <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
        <Contact />
      </main>
      <Footer />
    </div>
   </> 
  );
};

export default HomePage;
