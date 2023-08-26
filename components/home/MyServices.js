const skills = [
  "Web Development",
  "Mobile App. Development",
  "Back End Development",
];

import { useInView } from "react-intersection-observer";

const MyServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-140px", //triggers when the div is -50px up
  });
  inView;
  return (
    <section ref={ref} className="mt-24 mb-32 space-y-10">
      <h2 className="text-3xl text-primary1 text-center font-semibold md:text-4xl">
        My Services
      </h2>
      <div
        className={`flex flex-wrap justify-center items-center max-w-7xl mx-auto mt-7 px-5 lg:px-8 xl:px-0`}
      >
        {" "}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-28 w-full overflow-hidden mr-5 md:w-[30%]"
          >
            {" "}
            <div
              className={`flex items-center space-x-3 -mt-24  ${
                inView ? "animate-slideFromTop" : ""
              }`}
            >
              <div className="flex items-center justify-center flex-shrink-0 h-16 w-16 border-[7px] border-primary1 border-opacity-60">
                <div className="flex items-center justify-center flex-shrink-0 h-10 w-10 border-[5px] border-primary1 border-opacity-60">
                  {" "}
                  <div className="flex-shrink-0 h-7 w-7 border-[5px] border-primary1 border-opacity-60"></div>
                </div>
              </div>
              <p className="font-medium text-xl text-primary1 lg:text-2xl">
                {skill}
              </p>
            </div>{" "}
          </div>
        ))}{" "}
      </div>
    </section>
  );
};

export default MyServices;
