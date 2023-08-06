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
    title: "Shop",
    link: "/shop",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Code Support",
    link: "/code-support",}
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
    <div className="flex flex-col justify-between bg-white text-white pb-8 w-full h-full">
        <div>
      <div className="bg-primary flex justify-between items-center p-8">
      <div>
          <p className="font-poppins leading-none text-xl font-bold text-medium md:text-4xl">
            {companyName}
          </p>
         <div className="italic pl-12 text-[10px] -mt-2 md:mt-0 md:pl-28 md:text-base"><Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span className="italic">God gives the logic, I write the code</span>'
                )
                .start();
            }}
            options={{
              typeSpeed: 100,
              cursor: '<span class="text-xl">|</span>',
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
      <div className="flex flex-col overflow-y-auto">
        {" "}
       <div> {navLinks.map((linkData, index) => {
          const textColor =
            activeLink === linkData.link
              ? "text-primary text-medium"
              : "text-primary1";
          return <Link
              onClick={props.onClick}
              key={index}
              className={`${textColor} my-5 text-lg block py-5 border-b w-full text-center`}
              href={linkData.link}
            >
              {linkData.title}
            </Link>
        })}{" "} </div> </div>
        
      </div>
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
  );
};

export default MobileNavigation;
