import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  
  {
    title: "Code Support",
    link: "/code-support",
  },{
    title: "About",
    link: "/about",
  },
];



const MobileNavigation = (props) => {
  const router = useRouter();
  const activeLink = router.pathname;
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const companyName = "<OpulenceDeveloper/>";

  return (
    <div className="overflow-y-auto bg-white text-white pb-8 w-full h-full">
      
      <div className="bg-primary flex justify-between items-center py-8 px-5">
      <div>
          <h1 className="animate-shimmering-silver-text font-poppins leading-none text-xl font-bold text-medium md:text-4xl">
            {companyName}
          </h1>
         <div className="italic pl-12 text-[10px] md:pl-28 md:text-base"><Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span className="italic">God gives the logic, I write the code</span>'
                )
                .start();
            }}
            options={{
              typeSpeed: 100,
              cursor: '<span class="text-[9px]">|</span>',
              html: false,
            }}
          /></div> 
         
        </div>
        <button
          className={`${props.navAnimationClass} block hamburger 2xl:hidden focus:outline-none`}
          type="button"
          onClick={props.onClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="overflow-y-auto h-[80%]">
        {" "}
       <div> {navLinks.map((linkData, index) => {
          const textColor =
            activeLink === linkData.link
              ? "text-primary text-medium animate-flicker-neon"
              : "text-primary1";
          return <Link
              onClick={props.onClick}
              key={index}
              className={`${textColor} my-5 text-lg block py-5 border-b w-full text-center`}
              href={linkData.link}
            >
              {linkData.title}
            </Link>
        })}{" "} </div>
        <button className="flex items-center mx-auto bg-black px-5 py-3 text-white rounded-md">
         <p> Send Message</p>
          
          <Image
            src="/images/icon/arrow-right.svg"
            alt="arrow right icon"
            className="h-4 w-4 ml-2"
            width={16}
            height={16}
          />
        </button>
         </div>
     
    </div>
  );
};

export default MobileNavigation;
