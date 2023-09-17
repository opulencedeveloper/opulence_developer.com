

import ProjectsList from "../UI/ProjectsList";

const projects = [
  {
    title: "Happy Clients",
    alt: "Amobi Victor Happy Clients Icon",
    number: 400,
    image: "happy-clients-icon.png",
  },
  {
    title: "Software Projects",
    alt: "Amobi Victor Software Projects Icon",
    number: 74,
    image: "software-projects-icon.jpg",
  },
  {
    title: "Hardware Projects",
    alt: "Amobi Victor Hardware Projects Icon",
    number: 42,
    image: "hardware-projects-icon.png",
  },
  {
    title: "Developers Bugs Fixed",
    number: "212",
    alt: "Amobi Victor Hardware Bugs Solved Icon",
    image: "bugs-solved-icon.jpg",
  },
];

const SuccessfulProjects = () => {
 
  return (
    <section className="z-0 bg-black-50 py-16 flex">
      <div className=" flex flex-col justify-center max-w-[120rem] mx-auto lg:justify-evenly lg:flex-row">
        {projects.map((projectData, index) => (
          <span key={index}>
            <ProjectsList projectData={projectData} />
          </span>
        ))}{" "}
      </div>
    </section>
  );
};

export default SuccessfulProjects;
