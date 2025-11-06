"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import {useRef, useEffect} from "react";
import { motion } from "framer-motion";


export default function ServiceUi({ title, description, items }) {

  const serviceUi = useRef(null)
  const heading = useRef(null)
  const body = useRef(null)
  const services = useRef(null)
  const line = useRef(null)

      
  useEffect(() => {
    ScrollTrigger.create({
      trigger: serviceUi.current,
      // markers: true,
      start:"150px bottom",
      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2)
        .to (line.current, { width: "100%", ease: "power4.inOut", duration: 1.5 }, 0.2)
        .to(services.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25}, 0.5),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [serviceUi])


  return (
    <div ref={serviceUi} className=" mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24">
      <div className="space-y-6">
        <div className="space-y-3 2xl:space-y-10">
          <h3 ref={heading} className="text-heading-3 2xl:text-7xl font-semibold leading-tight  translate-y-10 opacity-0">
            {title}
          </h3>
          <p ref={body} className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl  translate-y-10 opacity-0">{description}</p>
        </div>
        <div ref={line} className="h-1 w-0 bg-accent-100 opacity-50 md:hidden"></div>
      </div>

      <div ref={services}  className=" select-none leading-[2.3rem] text-secondary-500 md:leading-[2.5rem] lg:leading-[3.4rem]  translate-y-10 opacity-0">
        {items.map((item, index) => {
          return (
            <motion.p 
              key={index} 
              className="font-general text-special 2xl:text-7xl font-extrabold"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1 + 0.5, 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                scale: 1.1, 
                x: 20,
                color: "#D1D1C7",
                textShadow: "0 0 30px rgba(209, 209, 199, 0.5)"
              }}
            >
              {item}
            </motion.p>
          );
        })}
      </div>
    </div>
  );
}
