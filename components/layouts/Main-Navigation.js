import Typewriter from "typewriter-effect";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import Portal from "../UI/Portal";
import Image from "next/image";

let navAnimationClass = "";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);  
  const router = useRouter();
  const activeLink = router.pathname;

  const toggleDrawer = () => {
    if (isOpen) {
      navAnimationClass = "";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    } else {
      navAnimationClass = "open";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    }
  };

  const companyName = "<OpulenceDeveloper/>";
  return (
   <> <Portal>
   <div
     className={` fixed inset-y-0 h-screen w-screen lg:hidden transform  ${
       isOpen ? "translate-y-0 z-50" : "-translate-y-full"
     } transition-transform duration-1000 ease-in-out`}
   >
     <MobileNavigation 
       navAnimationClass={navAnimationClass}
       onClick={toggleDrawer}
     />
   </div>
 </Portal> 
  
 <header className="relative z-20 flex justify-between items-center h-20 pt-2 px-5 md:pt-10 md:px-12">
  
        <div>
          <h1 className="leading-none text-lg font-bold md:text-4xl">
            {companyName}
          </h1>
         <div className="italic pl-12 text-[8.5px] -mt-2 md:mt-0 md:pl-28 md:text-base"><Typewriter
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
        <nav className="hidden lg:flex space-x-4 text-lg">
          
            <Link  className={
              activeLink === "/"
                ? "border border-primary1 rounded-md flex items-center px-4 py-3"
                : "rounded-md flex items-center px-5"
            } href="/">Home</Link>
          
          
            <Link className={
              activeLink === "/about"
                ? "border border-primary1 rounded-md flex items-center px-4 py-3"
                : "rounded-md flex items-center px-5"
            } href="/about">About</Link>

<Link className={
              activeLink === "/abou"
                ? "border border-primary1 rounded-md flex items-center px-4 py-3"
                : "rounded-md flex items-center px-5"
            } href="/about">Products</Link>

<Link className={
              activeLink === "/abou"
                ? "border border-primary1 rounded-md flex items-center px-4 py-3"
                : "rounded-md flex items-center px-5"
            } href="/about">Projects</Link>
          
        </nav>
        <button
        className={`${navAnimationClass} z-0 block hamburger lg:hidden focus:outline-none`}
        type="button"
        onClick={toggleDrawer}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
     
    </header></>
  );
};

export default MainNavigation;
