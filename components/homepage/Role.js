"use client";
import { motion } from "framer-motion";

export default function Role({forwardedRef}) {
  const words = "We craft digital masterpiece line by line, transforming code into innovation, bytes into brilliance, and algorithms into art.".split(" ");

  return (
    <section ref={forwardedRef} id="about" className="select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change" aria-label="">
      <div className="flex w-full items-center space-x-20">
        <motion.h1 
          className="text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-3 md:mr-4"
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ 
                scale: 1.1, 
                color: "#D1D1C7",
                textShadow: "0 0 20px rgba(209, 209, 199, 0.5)"
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
}
