import { useEffect, useRef } from "react";
import Head from "next/head";

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

const HomePage = () => {
  const sectionRefs = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

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
            color: "#000000",
            duration: 1,
          }),
          toggleActions: "play none none none",

        });
        ScrollTrigger.refresh()
      });
    });
  }, []);

  

  return (
   <>
    <Head>
        <title>OpulenceDeveloper | FullStack Software Engineer Portfolio</title>
        <meta
          property="title"
          content="OpulenceDeveloper | FullStack Software Engineer Portfolio"
        />{" "}
        <meta
          name="description"
          content="Welcome to OpulenceDeveloper's portfolio! Want a website? Want an App? I'm available for you, Explore a collection of projects showcasing FullStack Software Engineering expertise."
        />
        <meta
          name="keywords"
          content="OpulenceDeveloper, Portfolio, FullStack Software Engineer, Web Development, Mobile Application Development, Back End Development"
        />
        <meta name="author" content="Amobi Victor Chukwuka" />
        <meta
          property="og:title"
          content="OpulenceDeveloper | FullStack Software Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Want a website? Want an App? I'm available for you, Discover a portfolio of FullStack Software Engineering projects by Amobi Victor Chukwuka. Explore web and application development expertise."
        />
      </Head>

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
