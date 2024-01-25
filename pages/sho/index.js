import Image from "next/image";

import { useRef, useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

const animationTiming = {
  enter: 400,
  exit: 0,
};

const fags = [
  {
    title: "Telecommunications",
    description:
      "Lörem ipsum demotyp förväntis: inklusive ditt ad cringe. Onde dedölig irev hänyr. Treliga muräl i blingbling. Ogooglebar vagt vivis, radiotyp. Spes borade om häkronde dos fastän astrose. Didin diligt. Pseudoling uhuvis monotyp, plus varen tills pren. ",
  },
  {
    title: "Software",
    description:
      "Lörem ipsum demotyp förväntis: inklusive ditt ad cringe. Onde dedölig irev hänyr. Treliga muräl i blingbling. Ogooglebar vagt vivis, radiotyp. Spes borade om häkronde dos fastän astrose. Didin diligt. Pseudoling uhuvis monotyp, plus varen tills pren. ",
  }
];

const HelpCenterInfo = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nodeRef = useRef(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

 

  return (
    <div className="pt-14">
       

      <div className="w-full">
        {fags.map((fag, index) => (
          <div key={index} className="border border-ash rounded-xl px-5 py-3 mb-5 md:px-8">
            <button
              className="flex items-center justify-between w-full py-3 transition duration-300 ease-in-out"
              onClick={() => handleToggle(index)}
            >
              <span className="text-[18px] text-start font-medium text-gray-1 md:text-[24px]">
                {fag.title}
              </span>
              <div className="relative flex-shrink-0 h-[28px] w-[28px] md:h-[32px] md:w-[32px] border-[3px] border-primary1  rounded-full">
                <div
                  className={`absolute w-[70%] rounded-full h-[3px] bg-primary1 inset-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    activeIndex === index ? "rotate-90" : ""
                  } transition duration-300 ease-in-out`}
                ></div>
                <div
                  className={`absolute w-[70%] rounded-full h-[3px] bg-primary1 inset-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    activeIndex === index ? "rotate-180" : ""
                  } transition duration-300 ease-in-out`}
                ></div>
              </div>
            </button>

            <CSSTransition
              nodeRef={nodeRef}
              mountOnEnter
              unmountOnExit
              in={activeIndex === index}
              timeout={animationTiming}
              classNames={{
                enter: "",
                enterActive: "OpenShop",
                exit: "",
                exitActive: "",
              }}
            >
              <div ref={nodeRef} className="py-2 text-custom4 text-base md:text-[20px]">
                {fag.description}
              </div>
            </CSSTransition>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenterInfo;