"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Footer() {
  const [currentYear, setCurrentYear] = useState();
  useEffect(()=> {
    const currentDate = new Date();
    setCurrentYear(currentDate.getFullYear())
  }, [])
  
    function toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

  
    return (
      <motion.footer 
        className="mt-14 flex items-end justify-between px-5 py-4 sm:flex text-body-4 md:text-body-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="flex flex-col md:flex-row md:w-[62.5vw] lg:w-[57.5vw] justify-between"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div 
            className="flex space-x-1"
            whileHover={{ scale: 1.05, x: 5 }}
          >
            <span>&copy;</span>
            <span>{currentYear}</span>
            <span className="font-extrabold uppercase 2xl:text-body-1">OpulenceDeveloper LLC</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="text-body-4 2xl:text-body-1"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Site designed and coded with ❤️‍🔥
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.button 
          onClick={toTop} 
          className="col-span-2 flex items-center space-x-2 w-fit group 2xl:text-body-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="font-extrabold uppercase hover:font-black duration-200"
            whileHover={{ x: -5 }}
          >
            BACK TO TOP
          </motion.span>
          <motion.span
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ 
              y: -15,
              rotate: [0, -10, 10, -10, 0],
            }}
          >
            <svg
              className="-rotate-90"
              width="24"
              height="24"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <g clipPath="url(#clip0_238_1313)">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z"
                  fill="url(#paint0_linear_238_1313)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_238_1313"
                  x1="14"
                  y1="26"
                  x2="179"
                  y2="179.5"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stopColor="#D1D1C7" />{" "}
                </linearGradient>{" "}
              </defs>{" "}
            </svg>
          </motion.span>
        </motion.button>
      </motion.footer>
    );
  }
  