"use client";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
//import heroImg from "/src/assets/images/heroimg.webp";

export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);
  const scrollLine = useRef(null);
  const scroll = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scrollLine.current, {
      translateX: -40,
      duration: 1.5,
      ease: "power4.inOut",
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(imgContainer.current, {
      scale: 1.3,
      duration: 3.25,
      ease: "power3.inOut",
    })
      .from(
        img.current,
        { scale: 2, duration: 3.2, ease: "power4.inOut" },
        "-=3.1"
      )
      .to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2.5")
      .from(scroll.current, { opacity: 0, duration: 1, ease: "out" }, "-=2");
  }, []);

  return (
    <section
      id="hero"
      className="hero relative flex h-screen w-full select-none overflow-hidden items-center justify-center mt-0 md:mt-20"
      aria-label="hero"
    >
      <motion.div 
        className="z-10 flex w-full  flex-col items-center text-title font-bold uppercase text-accent-300  2xl:space-y-16 2xl:text-[10vw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      <motion.div 
        className="title 2xl:py-16"
        initial={{ opacity: 0, x: -100, rotateY: -90 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.05, x: 20 }}
      >
           {/* Learn more about useRef */}
           <h1 ref={(el) => (titles.current[0] = el)} className="translate-y-96 overflow-visible">
             Welcome
           </h1>
         </motion.div>
         <motion.div 
           className="title 2xl:py-16"
           initial={{ opacity: 0, x: 100, rotateY: 90 }}
           animate={{ opacity: 1, x: 0, rotateY: 0 }}
           transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
           whileHover={{ scale: 1.05, x: -20 }}
         >
         <h1 ref={(el) => (titles.current[1] = el)} className="translate-y-96 font-outline-3 md:font-outline-4 text-transparent overflow-visible">
          Esteemed
           </h1>
         </motion.div>
         <motion.div 
           className="title 2xl:py-16"
           initial={{ opacity: 0, y: 100, scale: 0.8 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
           whileHover={{ scale: 1.1, y: -10 }}
         >
           <h1 ref={(el) => (titles.current[2] = el)} className="translate-y-96">
             Client
           </h1>
         </motion.div>
      </motion.div>
      <motion.div
        ref={imgContainer}
        className="absolute mx-auto h-full w-full overflow-hidden rounded-md"
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 3.25, ease: "easeInOut" }}
      >
        <motion.img
          ref={img}
          className=" aspect-[11/16] h-full w-full scale-110 rounded-md opacity-50 sm:aspect-[5/6] md:aspect-[7/7] lg:aspect-[11/9]"
          src="/assets/images/heroimg.webp"
          alt="Abstract cubic background image."
          initial={{ scale: 2 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 3.2, ease: "easeInOut" }}
          whileHover={{ scale: 1.15, opacity: 0.7 }}
        />
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
      <motion.div
        ref={scroll}
        className="absolute bottom-24 right-0 flex flex-col items-center justify-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.span 
          className="rotate-90 text-body-3"
          animate={{ 
            opacity: [1, 0.5, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          scroll
        </motion.span>
        <div className="relative h-1 w-10 rotate-90 overflow-hidden">
          <motion.span
            ref={scrollLine}
            className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
            animate={{
              translateX: ["-40px", "0px"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}




// import { gsap } from "gsap";
// import { useRef, useEffect } from "react";
// //import heroImg from "../../assets/images/heroimg.webp";

// export default function Hero() {
//   const img = useRef(null);
//   const imgContainer = useRef(null);
//   const titles = useRef([]);
//   const scrollLine = useRef(null);
//   const scroll = useRef(null)

//   useEffect(() => {
//     const tl = gsap.timeline({ repeat: -1 });
//     tl.from(scrollLine.current, {
//       translateX: -40,
//       duration: 1.5,
//       ease: "power4.inOut",
//     });
//   }, []);

//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.from(imgContainer.current, {
//       scale: 1.3,
//       duration: 3.25,
//       ease: "power3.inOut",
//     })
//       .from(
//         img.current,
//         { scale: 2, duration: 3.2, ease: "power4.inOut" },
//         "-=3.1"
//       )
//       .to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2.5")
//       .from(scroll.current, {opacity: 0, duration: 1, ease:"out"}, "-=2")
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="hero relative flex h-[100dvh] bg-black w-full select-none items-center justify-center"
//       aria-label="hero"
//     >
//       <div className="z-10 flex w-full  flex-col items-center text-title font-bold uppercase text-accent-300  2xl:space-y-16 2xl:text-[10vw]">
//         <div className="title 2xl:py-16">
//           {/* Learn more about useRef */}
//           <h1 ref={(el) => (titles.current[0] = el)} className="translate-y-96 overflow-visible">
//             Welcome
//           </h1>
//         </div>
//         <div className=" title 2xl:py-16">
//         <h1 ref={(el) => (titles.current[1] = el)} className="translate-y-96 font-outline-3 md:font-outline-4 text-transparent overflow-visible">
//           Esteemedddddddd
//           </h1>
//         </div>
//         <div className=" title 2xl:py-16">
//           <h1 ref={(el) => (titles.current[2] = el)} className="translate-y-96">
//             Visitor
//           </h1>
//         </div>
//       </div>
//       <div
//         ref={imgContainer}
//         className="absolute mx-auto  w-[72%] overflow-hidden rounded-md"
//       >
//         <img
//           ref={img}
//           className=" aspect-[11/16] h-auto w-full scale-110 rounded-md opacity-50 sm:aspect-[5/6] md:aspect-[7/7] lg:aspect-[11/9]"
//           src="/assets/images/heroimg.webp"
//           alt="Abstract cubic background image."
//         />
//       </div>

      
//       <div ref={scroll} className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8">
//         <span className=" rotate-90 text-body-3">scroll</span>
//         <div className="relative h-1 w-10 rotate-90 overflow-hidden">
//           <span
//             ref={scrollLine}
//             className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
//           ></span>
//         </div>
//       </div>
//     </section>
//   );
// }
