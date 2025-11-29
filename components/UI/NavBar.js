"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    // Apply dark theme for Role section (sectionRefs[0])
    if (sectionRefs[0]) {
      ScrollTrigger.create({
        trigger: sectionRefs[0],
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        onEnter: () => {
          // Dark theme when entering Role section
          gsap.to(navBar.current, { color: "#DDDDD5", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#0E0E0C", duration: 0.3 });
        },
        onLeave: () => {
          // Don't revert to light here - Works section will maintain dark theme
        },
        onEnterBack: () => {
          // Dark theme when scrolling back into Role section
          gsap.to(navBar.current, { color: "#DDDDD5", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#0E0E0C", duration: 0.3 });
        },
        onLeaveBack: () => {
          // Revert to light theme when scrolling back out of Role section (going to Hero)
          gsap.to(navBar.current, { color: "#0E0E0C", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#FAFAF9", duration: 0.3 });
        },
      });
    }

    // Apply dark theme for Works section (sectionRefs[1]) - maintains dark theme
    if (sectionRefs[1]) {
      ScrollTrigger.create({
        trigger: sectionRefs[1],
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        onEnter: () => {
          // Dark theme when entering Works section
          gsap.to(navBar.current, { color: "#DDDDD5", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#0E0E0C", duration: 0.3 });
        },
        onLeave: () => {
          // Revert to light theme when leaving Works section (going to Services)
          gsap.to(navBar.current, { color: "#0E0E0C", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#FAFAF9", duration: 0.3 });
        },
        onEnterBack: () => {
          // Dark theme when scrolling back into Works section
          gsap.to(navBar.current, { color: "#DDDDD5", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#0E0E0C", duration: 0.3 });
        },
        onLeaveBack: () => {
          // Don't revert here - Role section will maintain dark theme
        },
      });
    }

    // Services section should be light mode - ensure it reverts from Works dark theme
    if (sectionRefs[3]) {
      ScrollTrigger.create({
        trigger: sectionRefs[3],
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        onEnter: () => {
          // Light theme when entering Services section
          gsap.to(navBar.current, { color: "#0E0E0C", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#FAFAF9", duration: 0.3 });
        },
        onLeave: () => {
          // Don't change here - About will maintain light theme
        },
        onEnterBack: () => {
          // Light theme when scrolling back into Services section
          gsap.to(navBar.current, { color: "#0E0E0C", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#FAFAF9", duration: 0.3 });
        },
        onLeaveBack: () => {
          // Don't change here - Works section will maintain dark theme
        },
      });
    }

    // About section should be light mode
    if (sectionRefs[4]) {
      ScrollTrigger.create({
        trigger: sectionRefs[4],
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        onEnter: () => {
          // Light theme when entering About section
          gsap.to(navBar.current, { color: "#0E0E0C", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#FAFAF9", duration: 0.3 });
        },
        onLeave: () => {
          // Don't change here - Certifications will handle its own theme
        },
        onEnterBack: () => {
          // Light theme when scrolling back into About section
          gsap.to(navBar.current, { color: "#0E0E0C", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#FAFAF9", duration: 0.3 });
        },
        onLeaveBack: () => {
          // Don't change here - Services section will maintain light theme
        },
      });
    }

    // Apply dark theme for Certifications section (sectionRefs[2])
    if (sectionRefs[2]) {
      ScrollTrigger.create({
        trigger: sectionRefs[2],
        start: "center center",
        end: "bottom center",
        // markers: true,
        onEnter: () => {
          // Dark theme when entering Certifications section
          gsap.to(navBar.current, { color: "#DDDDD5", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#0E0E0C", duration: 0.3 });
        },
        onLeave: () => {
          // Revert to light theme when leaving Certifications section (going to Contact)
          gsap.to(navBar.current, { color: "#0E0E0C", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#FAFAF9", duration: 0.3 });
        },
        onEnterBack: () => {
          // Dark theme when scrolling back into Certifications section
          gsap.to(navBar.current, { color: "#DDDDD5", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#0E0E0C", duration: 0.3 });
        },
        onLeaveBack: () => {
          // Revert to light theme when scrolling back out of Certifications section
          gsap.to(navBar.current, { color: "#0E0E0C", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#FAFAF9", duration: 0.3 });
        },
      });
    }

    // Contact section should be light mode
    if (sectionRefs[5]) {
      ScrollTrigger.create({
        trigger: sectionRefs[5],
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        onEnter: () => {
          // Light theme when entering Contact section
          gsap.to(navBar.current, { color: "#0E0E0C", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#FAFAF9", duration: 0.3 });
        },
        onLeave: () => {
          // Don't change here - Contact is the last section
        },
        onEnterBack: () => {
          // Light theme when scrolling back into Contact section
          gsap.to(navBar.current, { color: "#0E0E0C", duration: 0.3 });
          gsap.to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C", duration: 0.3 });
          gsap.to(".bg-secondary-100", { backgroundColor: "#FAFAF9", duration: 0.3 });
        },
        onLeaveBack: () => {
          // Don't change here - Certifications will handle its own theme
        },
      });
    }

    // Refresh ScrollTrigger to ensure all triggers are properly initialized
    ScrollTrigger.refresh();


  }, [sectionRefs]);

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <svg
          ref={logo}
          className="h-[40px] w-[90px] md:h-[80px] size7:w-[100px] md:w-[250px] "
          height="45"
          viewBox="0 0 451 45"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style></style>
          </defs>
          <title>Opulencedeveloper</title>
          <text transform="translate(5 20)" className="text-[4.5rem]" fontWeight={900}>
            opulence
          </text>
          <text transform="translate(50 80)" className="text-[4.5rem]" fontWeight={900}>
            _developer
          </text>
          {/* <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.5 1.5H111V6.50001H113.5C112.119 6.50001 111 7.61931 111 9.00001V11.5H116V9.00001C116 10.3807 117.119 11.5 118.5 11.5H121V6.50001H118.5C119.881 6.50001 121 5.38072 121 4V1.5H116V4C116 2.61929 114.881 1.5 113.5 1.5ZM116 6.50001H113.5C114.881 6.50001 116 7.61931 116 9.00001V6.50001ZM116 6.50001V4C116 5.38072 117.119 6.50001 118.5 6.50001H116Z"
          /> */}
        </svg>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <motion.a 
          href="#about" 
          className="group relative hidden md:inline-block"
          whileHover={{ scale: 1.1, y: -2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span>About</span>
          <motion.span 
            className="absolute bottom-0 left-0 h-[0.125em] rounded-full bg-secondary-600"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
        <motion.a 
          href="#services" 
          className="group relative hidden md:inline-block"
          whileHover={{ scale: 1.1, y: -2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span>Services</span>
          <motion.span 
            className="absolute bottom-0 left-0 h-[0.125em] rounded-full bg-secondary-600"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
        <motion.a 
          href="#works" 
          className="group relative hidden md:inline-block"
          whileHover={{ scale: 1.1, y: -2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span>Projects</span>
          <motion.span 
            className="absolute bottom-0 left-0 h-[0.125em] rounded-full bg-secondary-600"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
        <motion.a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="relative w-fit">
            <motion.span 
              className="absolute bottom-2 h-[0.1em] bg-secondary-700 opacity-90 size7:h-[0.15em]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="text-sm size5:text-base ">Let&apos;s Talk.</span>
          </span>
        </motion.a>
      </nav>
    </header>
  );
}
