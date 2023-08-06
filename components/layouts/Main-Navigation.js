import Typewriter from "typewriter-effect";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import MobileNavigation from "./MobileNavigation";
import Portal from "../UI/Portal";

let navAnimationClass = "";

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
    link: "/code-support",
  },
];

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const activeLink = router.pathname;

  // useLayoutEffect(() => {
  //   console.log("in the main effect")
  //   localStorage.setItem("isHomeScreenVisited", "no");
  // }, []);

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
    <>
      {" "}
      <Portal>
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
          <div className="italic pl-12 text-[8.5px] -mt-2 md:mt-0 md:pl-28 md:text-base">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span className="italic">God gives the logic, I write the code</span>'
                  )
                  .start();
              }}
              options={{
                typeSpeed: 100,
                cursor: '<span class="text-base">|</span>',
                html: false,
              }}
            />
          </div>
        </div>
        <nav className="hidden lg:flex space-x-4 text-lg">
          {navLinks.map((linkData, index) => {
            const navLinkStyle =
              activeLink === linkData.link
                ? "border border-primary1 rounded-md flex items-center px-4 py-3"
                : "rounded-md flex items-center px-5";
            return (
              <Link className={navLinkStyle} href={linkData.link}>
                {linkData.title}
              </Link>
            );
          })}
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
      </header>
    </>
  );
};

export default MainNavigation;
