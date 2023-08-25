const skills = [
  "Web Development",
  "Mobile App. Development",
  "Back End Development",
];

import { useInView } from "react-intersection-observer";

const WhatIDo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-140px", //triggers when the div is -50px up
  });
  inView;
  return (
    <section ref={ref} className="mt-24 mb-32 ">
      <h2 className="text-3xl text-center font-medium md:text-4xl">What I do</h2>
      <div
        className={`flex flex-wrap justify-between items-center max-w-7xl mx-auto mt-7 px-5 lg:px-0`}
      >
        {" "}
        {skills.map((skill, index) => (
          <div key={index} className="flex-shrink-0 h-28 w-full overflow-hidden md:w-[30%]">
            {" "}
            <div className={`flex items-center space-x-3 -mt-24  ${
                inView ? "animate-slideFromTop" : ""
              }`}
            >
              <div className="flex-shrink-0 h-16 w-16 bg-primary1 opacity-60"></div>
              <p className="font-medium text-xl text-primary1 md:text-2xl">
                {skill}
              </p>
            </div>{" "}
          </div>
        ))}{" "}
      </div>
    </section>
  );
};

export default WhatIDo;
