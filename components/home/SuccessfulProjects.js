import Image from "next/image";
import Counter from "../UI/Counter";
import { useInView } from "react-intersection-observer";

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
    title: "Bugs Solved",
    number: "212",
    alt: "Amobi Victor Hardware Bugs Solved Icon",
    image: "bugs-solved-icon.jpg",
  },
];

const SuccessfulProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <section ref={ref} className="z-0 bg-black-50 mb-14 py-16 flex md:mb-20">
      <div className=" flex flex-col justify-center max-w-[120rem] mx-auto md:justify-evenly md:flex-row">
        {projects.map((projectData, index) => (
          <div
            key={index}
            className="w-full my-8 flex space-y-2 flex-col items-center justify-center text-center  md:mx-5 md:w-44"
          >
            <div className="h-24 w-24 bg-white overflow-hidden rounded-full p-1">
              <Image
                src={`/images/icon/${projectData.image}`}
                alt={projectData.alt}
                className="w-full h-full"
                loading="eager"
                priority
                width={200}
                height={200}
              />
            </div>
            {inView && <Counter percentage={projectData.number} />}
            <p className="font-light text-lg">{projectData.title}</p>
          </div>
        ))}{" "}
      </div>
    </section>
  );
};

export default SuccessfulProjects;
