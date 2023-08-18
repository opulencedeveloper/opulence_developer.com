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
];

const SectionTemplate = (props) => {
  const { type } = props;
  return (
    <div className={`flex w-[47%] h-max ${
        type === "left" && "mt-80"
      }`}>
      {type === "left" && (
        <div className="w-3 pt-7  overflow-hidden inline-block">
          <div className=" h-3 bg-primary1 rotate-45 transform origin-bottom-right"></div>
        </div>
      )}
      <div
        className="w-full h-full border-4 border-primary1 rounded-lg p-5"
      >
        <p className="font-medium text-lg mb-2 leading-snug md:text-2xl">Janet Memorial Hospital</p>
        <p className="text-base">
          <span className="font-medium text-base text-white mr-1">Type: </span>{" "}
          Website
        </p>
        <p className="text-base">
          <span className="font-medium text-base text-white mr-1">
            Technology:
          </span>{" "}
          Next.js
        </p>
        <p className="text-base">
          <span className="font-medium text-white mr-1">Status:</span>{" "}
          Deployed for Production
        </p>
        <p className="hidden md:block">
          <span className=" font-medium text-md text-white mr-1">
            Description:
          </span>{" "}
          Highlights an intuitive user experience, integrating a dynamic
          interactive map for location tracking, seamless appointment booking
          functionality, and a sleek interface presenting hospital services.
          Witness my ability to blend aesthetics with practicality in this
          skillfully crafted website.
        </p>
        <div className="flex justify-end mt-3">
          <a className="px-2 py-1 text-base rounded-lg border border-primary-1">
            Live Project
          </a>
        </div>
      </div>
      {type === "right" && (
        <div className="w-3 pt-7  overflow-hidden inline-block">
          <div className=" h-3 bg-primary1 rotate-45 transform origin-top-left"></div>
        </div>
      )}
    </div>
  );
};

// https://chat.openai.com/share/76fa6d41-950c-4897-a21a-03790c927b21
const Projects = () => {
  return (
    <section className="px-5 text-primary1 pt-10 md:px-12">
      <div className="flex justify-between mb-8 text-xl font-semibold md:text-3xl">
        <p className="w-[45%] animate-float">Projects</p>

        <p className="w-[45%] animate-float2">My Projects</p>
      </div>
      <div className="flex justify-between">
        <SectionTemplate type="right" />
        <div className="flex flex-col items-center pt-4 w-[0.7%]">
          <div className="w-5 h-5 border-2 border-gray-500 rounded-full md:w-10 md:h-10"></div>
          <div className="w-[60%] h-60 bg-primary1"></div>
        </div>
        <SectionTemplate type="left" />
      </div>
    </section>
  );
};

export default Projects;
