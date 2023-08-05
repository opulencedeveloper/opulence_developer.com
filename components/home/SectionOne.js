import Image from "next/image";
import React from "react";

import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <>
   
      <div className="relative z-20 text-center flex flex-col h-screen items-center justify-center space-y-8 text-primary1 px-5 pb-16 md:pb-0 md:px-12">
     
        <div className="w-full md:w-[95%]">
          <div className="flex flex-wrap justify-center items-center">
            <p className="text-lg font-medium md:text-4xl">Greetings, esteemed visitor! </p>
           <div className="h-10 w-10 md:h-20 md:w-20"> <Image
              src="/images/icon/online.gif"
              alt="call a doctor logo"
              className="h-full w-full bg-transparent"
              width={40}
              height={40}
            /></div>
          </div>
         <div className="text-2xl space-y-3 md:text-5xl 2xl:text-6xl">
            <p className="leading-tight font-semibold mb-10">
              What took you so long to find me? I'm{" "}
              <span className="text-white font-bold">Victor Amobi</span>, my expertise lies in the realm of
               <span className="text-white font-bold">{" "}
               FullStack Software Engineering. 
              </span>{""}
               
            </p>
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
         <div className="h-3 w-3 ml-2 md:h-4 md:w-4"> <Image
            src="/images/icon/arrow-right.svg"
            alt="arrow right icon"
            className="w-full h-full"
            width={16}
            height={16}
          /></div>
        </button>
      </div>
      <div className={`overflow-hidden py-6 -mt-20 bg-primary1 text-black text-xl ${styles.container}`}>
      <div className={`inline-block space-x-8 whitespace-nowrap ${styles.textWrapper}`}>
      <span>React.js</span>
            <span>Node.js</span> <span>Next.js</span>
            <span>Express.js</span> <span>MongoDB</span> <span>Mongoose</span>
            <span>Graphics</span> <span>Arduino</span>
            <span>IOT</span>
      </div>
    </div>
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
