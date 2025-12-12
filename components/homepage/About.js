"use client";
import { useEffect, useRef } from "react";
// import profileImg from "/src/assets/images/profile.jpg";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "../UI/Heading";

export default function About({ forwardedRef }) {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={(el) => {
      aboutSection.current = el;
      if (forwardedRef) {
        if (typeof forwardedRef === 'function') {
          forwardedRef(el);
        } else {
          forwardedRef.current = el;
        }
      }
    }} aria-label="about me">
     
      
      {/* Company Section */}
      {/* <div className="my-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-heading-3 2xl:text-7xl font-semibold leading-tight mb-6">
            About the Company
          </h2>
          <motion.p
            className="text-body-1 2xl:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We are a registered Limited Liability Company (LLC) based in Enugu, Nigeria.
            Led by our CEO, we are dedicated to delivering exceptional digital solutions.
            Our expertise encompasses website development, web applications, cross-platform mobile applications,
            AI applications, and backend systems.
            <br />
            <br />
            We provide freelance services to clients worldwide and also build our own products.
            From concept to launch, we deliver scalable solutions by combining clean code
            with thoughtful design and industry best practices.
          </motion.p>
        </motion.div>
      </div> */}
      
      {/* Personal Section */}
      <div className="mt-20 pt-12 border-t border-secondary-600/10">
       <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
       >
         <Heading title="about me" />
       </motion.div>
       
        <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
          <motion.div 
            className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2"
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <motion.img
              ref={profile}
              loading="lazy"
              className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
              src={"../../assets/images/profile.svg"}
              width="600"
              height="800"
              alt="portrait image of Amobi Victor Chukwuka also known as Opulence Developer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-md border-2 border-secondary-600 opacity-0"
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: "0 0 30px rgba(209, 209, 199, 0.3)",
              }}
            />
          </motion.div>
          <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
            <div className="w-full space-y-4 2xl:space-y-10">
              <h2
                ref={heading}
                className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
              >
                A brief intro, who am I?
              </h2>
              <motion.p
                ref={body}
                className="translate-y-10 text-body-1 2xl:text-4xl opacity-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I am Amobi Victor Chukwuka, a fullstack software engineer based in Enugu, Nigeria.
                I specialize in website development, web applications, cross-platform mobile apps, AI applications, and backend systems.
                <br />
                <br />
                I provide freelance services to clients worldwide and build my own products.
                My approach combines clean code architecture with thoughtful design, delivering scalable solutions from concept to launch.
                <br />
                <br />
                I continuously stay abreast of emerging technologies and industry best practices, fostering continuous learning and innovation in my work.
                <motion.a
                  className="underline duration-300 ease-in-out hover:text-secondary-700 pl-1"
                  href="https://youtube.com/shorts/f7kedhflEpc?si=dXaI28b4v1SsK0M8"
                  whileHover={{ scale: 1.1, x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  YouTube
                </motion.a>
                <br />
                <motion.a
                  target="_blank"
                  className="cursor-pointer underline duration-300 ease-in-out hover:text-secondary-700 pl-1"
                  href="/assets/cv/Amobi_Victor_CV.pdf"
                  whileHover={{ scale: 1.1, x: 5 }}
                  transition={{ type: "keyframes", duration: 0.5, ease: "easeInOut" }}
                >
                  View CV
                </motion.a>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}