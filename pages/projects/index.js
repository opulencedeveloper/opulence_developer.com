const projects = [
  {
    title: "Janet Memorial Hospital",
    type: "Website",
    technology: "Next.js",
    status: "Deployed for Production",
    description:
      "Highlights an intuitive user experience, integrating a dynamic interactive map for location tracking, seamless appointment booking functionality, and a sleek interface presenting hospital services. Witness my ability to blend aesthetics with practicality in this skillfully crafted website.",
    link: "",
  },
  {
    title: "CALL-A-DOC",
    type: "Website",
    technology: "Next.js",
    status: "In Developement",
    description:
      "This project showcases my proficiency in creating a seamless platform for scheduling virtual doctor appointments via video calls and chat. ",
    link: "",
  },
  {
    title: "Maureen Eugene",
    type: "Website",
    technology: "Next.js",
    status: "In Developement",
    description:
      "In building this Content Writer Portfolio Website, I've meticulously orchestrated design and content to harmonize, creating a digital space that truly reflects the essence of the content writer's craft.",
    link: "",
  },
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
];

const SectionTemplate = (props) => {
  const { type, index, projectData } = props;
  return (
    <div
      className={`flex w-full h-max ${
        type === "left" || index > 0 ? "mt-80" : ""
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
        <p className="text-sm leading-snug">
          <span className="font-medium text-base text-white mr-1 ">Type: </span>{" "}
          {projectData.type}
        </p>
        <p className="text-sm leading-snug">
          <span className="font-medium text-base text-white mr-1">
            Technology:
          </span>{" "}
          {projectData.technology}
        </p>
        <p className="text-sm leading-snug">
          <span className="font-medium text-base text-white mr-1">Status:</span> {projectData.status}
        </p>
        <p className="hidden md:block">
          <span className=" font-medium text-md text-white mr-1">
            Description:
          </span>{" "}
          {projectData.description}
        </p>
        <div className="flex justify-end mt-3">
          <a className="px-2 py-1 text-xs rounded-lg border border-primary-1 md:text-base">
            Live Project
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

// https://chat.openai.com/share/76fa6d41-950c-4897-a21a-03790c927b21
const Projects = () => {
  return (
    <section className="px-3 text-primary1 mt-28 md:px-12">
      <div className="flex justify-between mb-8 text-lg font-semibold md:text-3xl">
        <p className="w-[45%] animate-float text-center">Projects</p>

        <p className="w-[45%] animate-float2 text-center">Personal Projects</p>
      </div>
      <div className="flex justify-between">
        <div className="w-[47%] md:w-[49%]">
          {projects.map((projectData, index) => (
            <span key={index}>
              <SectionTemplate projectData={projectData} index={index} type="right" />
            </span>
          ))}
        </div>
     
                <div className="w-[1%] bg-primary1 mb-40"></div>
              
        <div className="w-[47%] md:w-[49%]">
          {myProjects.map((projectData, index) => (
            <span key={index}>
              <SectionTemplate projectData={projectData} index={index} type="left" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
