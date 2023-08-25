import Head from "next/head";

import SectionOne from "@/components/home/SectionOne";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";
import WhatIDo from "@/components/home/WhatIDo";

let isHomeScreenVisited;
export default function Home() {
  return (
    <>
      <Head>
        <title>OpulenceDeveloper | FullStack Software Engineer Portfolio</title>
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
      <SectionOne />
      <WhatIDo />
      <SectionTwo />
      <SectionThree />
    </>
  );
}
