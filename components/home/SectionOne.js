import Image from "next/image";
import React, { useState, useEffect } from "react";

import styles from "./SectionOne.module.css";

const skills = [
  "Flutter",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Graphics",
  "Arduino",
  "IOT",
];

const TextTransition = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(skills[0]);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);

      setTimeout(() => {
        const newIndex = (currentPhraseIndex + 1) % skills.length;
        setCurrentPhraseIndex(newIndex);
        setCurrentPhrase(skills[newIndex]);
        setIsGlitching(false);
      }, 500); // Delay before updating phrase
    }, 1500);

    return () => clearInterval(interval);
  }, [currentPhraseIndex]);

  return (
    <div className="flex items-center justify-center mt-10">
      <h1
        className={`text-4xl font-semibold ${
          isGlitching ? "animate-glitch" : ""
        }`}
      >
        {currentPhrase}
      </h1>
    </div>
  );
};

const SectionOne = () => {
  return (
    <>
      <div className="relative z-20 text-center flex flex-col h-screen items-center justify-center space-y-8 text-primary1 px-5 pb-16 md:pb-0 md:px-12">
        <div className="w-full md:w-[95%]">
          

          
          <div className="relative z-50 flex flex-wrap justify-center items-center animate-text-glitch">
            <p className="text-lg font-medium md:text-4xl">
              Greetings, esteemed visitor!{" "}
            </p>
            <div className="h-10 w-10 md:h-20 md:w-20">
              {" "}
              <Image
                src="/images/icon/online.gif"
                alt="call a doctor logo"
                className="h-full w-full bg-transparent"
                width={40}
                height={40}
              />
            </div>
          </div>
          {/* <div className="h-[40px] mt-5 overflow-hidden">
            {" "}
            <p className="text-xl animate-fade-in-up-text md:text-2xl">
              Full-Stack Software Engineer
            </p>{" "}
          </div> */}
          <div className="relative z-50 text-2xl space-y-3  md:text-5xl 2xl:text-6xl">
            {/* animate-float */}
            <h2 className="leading-tight font-semibold mb-10 animate-text-glitch">
              What took you so long to find me? I'm{" "}
              <span className="text-white font-bold">Victor Amobi</span>, my
              expertise lies in the realm of
              <span className="animate-scramble-text text-white font-bold">
                {" "}
                FullStack Software Engineering.
              </span>
              {""}
            </h2>
          </div>
        </div>
        {/* <div className="max-w-7xl text-base lg:text-xl">
        <p>It's great to finally connect with you.</p>
        <p>I can't help but wonder what amazing things we can achieve together now that we've found each other.</p>
        <p>I am passionate about using technology to solve problems and build innovative solutions. With experience in both frontend and backend development, I am skilled in a variety of programming languages and frameworks. I take pride in delivering high-quality, performant code that meets the needs of my clients and users. Browse my portfolio to see some of my recent projects and get in touch to learn more about how I can help bring your ideas to life.</p>
          {" "}
       
        </div> */}

        <button className="flex items-center bg-black px-5 h-11 text-white rounded-md md:h-14">
          <p className="text-sm md:text-lg">Send Message</p>
          <div className="h-5 w-5 ml-2 rounded-full overflow-hidden md:h-7 md:w-7">
            {" "}
            <Image
              src="/images/icon/send.gif"
              alt="arrow right icon"
              className="w-full h-full"
              width={16}
              height={16}
            />
          </div>
        </button>
      </div>
      <div className={`-mt-20 bg-primary1 py-6 flex overflow-hidden`}>
        <div className={`animate-slideLeftRight space-x-8 text-xl text-primary`}>
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
      <TextTransition />
      {/* <div className=" py-6 bg-primary1 text-black text-xl">
        <div className="inline-block overflow-hidden">
          <marquee className="my-marquee space-x-8 flex items-center">
            <span>React.js</span>
            <span>Node.js</span> <span>Next.js</span>
            <span>Express.js</span> <span>MongoDB</span> <span>Mongoose</span>
            <span>Graphics</span> <span>Arduino</span>
            <span>IOT</span>
          </marquee>
        </div>
      </div> */}
    </>
  );
};

export default SectionOne;
