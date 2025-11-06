import Footer from "@/components/layouts/Footer";
import Layout from "@/components/layouts/Layout";
import { NextSeo } from "next-seo";
import { defaultSEO, generatePortfolioSchema, generateKeywords } from "@/lib/seo";

const projects = [
  // {
  //   title: "Jack",
  //   type: "Website, Andriod & IOS App.",
  //   technology: "Next.js, TailwindCss, Flutter",
  //   status: "Deployed to Production",
  //   description:
  //     "Market for car parts",
  //   link: "https://staging.jack.parts",
  // },
  {
    title: "Janet Memorial Hospital",
    type: "Website",
    technology: "Next.js, TailwindCss",
    status: "Deployed to Production",
    description:
      "Highlights an intuitive user experience, integrating a dynamic interactive map for location tracking, seamless appointment booking functionality, and a sleek interface presenting hospital services. Witness my ability to blend aesthetics with practicality in this skillfully crafted website.",
    link: "https://janetmemorialhospital.com",
  },
  {
    title: "Tidier (Customer)",
    type: "Mobile App.",
    technology: "Flutter, Node.js, MongoDB",
    status: "Deployed to Production",
    description: "Find the perfect helping hand for your chores with our Housekeeper Hiring app! It's the easiest way to connect with reliable housekeepers who make your life easier. Browse through profiles, read reviews, and choose the right fit for your home.",
    link: "https://play.google.com/store/apps/details?id=com.app.tidier",
  },
  {
    title: "Tidier (Workers)",
    type: "Mobile App.",
    technology: "Flutter, Node.js, MongoDB",
    status: "Deployed to Production",
    description: "A the Housekeeper App, where skilled housekeepers can showcase their expertise and connect with clients seeking reliable cleaning services.",
    link: "https://play.google.com/store/apps/details?id=com.app.tidier.keeper",
  },
  {
    title: "Duoiba",
    type: "Website",
    technology: "Next.js, Node.js, TailwindCss, MongoDB",
    status: "Deployed to Production",
    description:
      "Duoiba helps merchants and vendors sell more to customers online by providing an e-commerce marketplace for them to get their own online stores, because online shops help businesses sell more to customers online. ",
    link: "https://duoiba.com",
  },
  {
    title: "Telecomsdata",
    type: "Mobile App.",
    technology: "Flutter, Node.js, MongoDB",
    status: "Deployed to Production",
    description: "Get more for less with the Bulk Data Purchase app! This app lets you buy a bunch of data all at once, saving you time and money.",
    link: "https://play.google.com/store/search?q=Telecomsdata&c=apps",
  },
  {
    title: "CALL-A-DOC",
    type: "Website",
    technology: "Next.js",
    status: "In Development",
    description:
      "This project showcases my proficiency in creating a seamless platform for scheduling virtual doctor appointments via video calls and chat. ",
    link: "",
  },
  {
    title: "Maureen Eugene",
    type: "Website",
    technology: "Next.js",
    status: "Deployed to Production",
    description:
      "In building this Content Writer Portfolio Website, I've meticulously orchestrated design and content to harmonize, creating a digital space that truly reflects the essence of the content writer's craft.",
    link: "https://maureenportfoliowebsite.vercel.app/",
  },

  {
    title: "Ologwu Samuel",
    type: "Website",
    technology: "Next.js",
    status: "Deployed to Production",
    description:
      "Portfolio website of a product designer",
    link: " https://ologwusamuel.vercel.app/",
  },
//{
 //   title: "Lizzy Match Tips",
 //   type: "Mobile App.",
 //   technology: "Flutter",
  //  status: "Deployed to Production",
  //  description: "Elevate your football predictions with the Match Tips app, your go-to companion for unlocking the secrets of every match. Immerse yourself in a world of expert analyses, strategic insights, and precise predictions",
   // link: "https://play.google.com/store/apps/details?id=tester.kma.lizzyfixedmatchtips",
  //},
];

const myProjects = [
  {
    title: "Whatsapp Status Saver",
    type: "Mobile App",
    technology: "Flutter",
    status: "In Development",
    description:
      "Encapsulates my dedication to crafting solutions that enhance users' digital interactions. Through this project, I've blended functionality with convenience, allowing users to savor and relive cherished moments shared on WhatsApp. ",
    link: "",
  },
  {
    title: "Social Downloader",
    type: "Web Site",
    technology: "Next.js",
    status: "In Development",
    description:
      "A user-friendly website designed to effortlessly download and save videos from various social media platforms, allowing you to preserve and enjoy your favorite online content offline.",
    link: "",
  },
  {
    title: "NYSC assist",
    type: "Mobile App",
    technology: "Flutter",
    status: "In Development",
    description:
      "Seamlessly match with compatible roommates and explore a variety of housing options through detailed profiles, location insights, and safety features, simplifying the search for youth services corpers seeking roommates and homes in places they have never been.",
    link: "",
  },

  {
    title: "Opulence Calender",
    type: "Website",
    technology: "React.js && Tailwind Css",
    status: "Deployed for Production",
    description:
      "The website highlights a dynamic calendar system that offers users daily, weekly, and monthly views. Notably, I developed this system with the intention of making its underlying code accessible for fellow developers to utilize.",
    link: "https://opulence-calender.vercel.app/",
  },
];

const SectionTemplate = (props) => {
  const { type, index, projectData } = props;
  return (
    <div
      className={`flex w-full h-max ${
        type === "left" || index > 0 ? "mt-40" : "mt-5"
      }`}
    >
      {type === "left" && (
        <div className="flex-shrink-0 w-2 pt-7  overflow-hidden inline-block md:w-3">
          <div className=" h-2 bg-primary1 rotate-45 transform origin-bottom-right md:h-3"></div>
        </div>
      )}
      <div className="w-full space-y-2 h-full border-4 border-primary1 rounded-lg p-3 md:p-5">
        <p className="font-medium text-lg mb-2 leading-none md:text-2xl">
          {projectData.title}
        </p>
        <p className="text-sm leading-snug md:text-base">
          <span className="font-medium text-base text-white mr-1 md:text-lg">
            Type:{" "}
          </span>{" "}
          {projectData.type}
        </p>
        <p className="text-sm leading-snug md:text-base">
          <span className="font-medium text-base text-white mr-1 md:text-lg">
            Technology:
          </span>{" "}
          {projectData.technology}
        </p>
        <p className="text-sm leading-snug md:text-base">
          <span className="font-medium text-base text-white mr-1 md:text-lg">
            Status:
          </span>{" "}
          {projectData.status}
        </p>
        <p className="text-sm leading-snug md:text-base">
          <span className="font-medium text-base text-white mr-1 md:text-lg">
            Description:
          </span>{" "}
          {projectData.description}
        </p>
        <div className="flex justify-end mt-3">
          <a
            target="_blank"
            href={projectData.status !== "In Development" && projectData.link}
            className="px-2 py-1 text-xs rounded-lg border border-primary-1 md:text-base"
          >
            {projectData.status === "In Development"
              ? "In Dev."
              : "Live Project"}
          </a>
        </div>
      </div>
      {type === "right" && (
        <div className="flex-shrink-0 w-2 pt-7  overflow-hidden inline-block md:w-3">
          <div className="h-2 bg-primary1 rotate-45 transform origin-top-left md:h-3"></div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  // Combine all projects for structured data
  const allProjects = [
    ...projects.map(p => ({ name: p.title, description: p.description, link: p.link, year: p.status, tools: p.technology, type: p.type })),
    ...myProjects.map(p => ({ name: p.title, description: p.description, link: p.link || '', year: p.status, tools: p.technology, type: p.type }))
  ];

  const seoConfig = {
    ...defaultSEO,
    title: "Portfolio Projects - FullStack Software Engineering Projects | OpulenceDeveloper",
    description: "Explore a diverse collection of FullStack Software Engineering projects by OpulenceDeveloper. Discover web applications, mobile apps, AI projects, and backend systems built with React, Next.js, Flutter, Node.js, MongoDB, PostgreSQL, and more. View live projects and case studies.",
    keywords: generateKeywords(['Portfolio Projects', 'Web Development Projects', 'Mobile App Projects', 'React Projects', 'Next.js Projects', 'Flutter Projects', 'Node.js Projects', 'Case Studies', 'Project Showcase']),
    canonical: "https://opulencedeveloper.com/projects",
    openGraph: {
      ...defaultSEO.openGraph,
      title: "Portfolio Projects - FullStack Software Engineering Projects | OpulenceDeveloper",
      description: "Explore a diverse collection of FullStack Software Engineering projects including web applications, mobile apps, AI projects, and backend systems.",
      url: "https://opulencedeveloper.com/projects",
    },
    twitter: {
      ...defaultSEO.twitter,
      title: "Portfolio Projects - FullStack Software Engineering Projects",
      description: "Explore a diverse collection of FullStack Software Engineering projects by OpulenceDeveloper.",
    },
  };

  return (
    <>
      <NextSeo {...seoConfig} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePortfolioSchema(allProjects)),
        }}
      />
    <Layout>  <section className="px-3 text-primary1 mt-10 md:px-12 md:mt-28">
        <div className="flex justify-between mb-8 text-lg font-semibold md:text-3xl">
          <p className="w-[45%] animate-float text-center">Projects</p>

          <p className="w-[45%] animate-float2 text-center">
            Personal Projects
          </p>
        </div>
        <div className="flex justify-between">
          <div className="w-[47%] md:w-[49%]">
            {projects.map((projectData, index) => (
              <span key={index}>
                <SectionTemplate
                  projectData={projectData}
                  index={index}
                  type="right"
                />
              </span>
            ))}
          </div>

          <div className="w-[1%] bg-primary1 mb-40 rounded-full stainless-steel"></div>

          <div className="w-[47%] md:w-[49%]">
            {myProjects.map((projectData, index) => (
              <span key={index}>
                <SectionTemplate
                  projectData={projectData}
                  index={index}
                  type="left"
                />
              </span>
            ))}
          </div>
        </div>

        <div className=" flex justify-center my-10 md:my-20">
          <a
            target="_blank"
            href="https://github.com/opulencedeveloper"
            className="transition-transform duration-300 transform hover:scale-105 focus:outline-none border px-4 py-3"
          >
            See More
          </a>
        </div>
      </section>{" "}
      </Layout>
      <Footer />
    </>
  );
};

export default Projects;
