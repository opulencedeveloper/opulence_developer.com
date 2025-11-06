"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export default function Projects({ name, img, alt, type, link, year, tools, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // 3D tilt effect using mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article 
      itemScope 
      itemType="https://schema.org/CreativeWork"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -10 }}
      className="relative"
    >
      <motion.a
        target="_blank"
        rel="noreferrer noopener"
        href={link}
        className="h-max bg-gray-400 img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl relative block"
        aria-label={`View ${name} project`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              className="w-screen duration-700 ease-in-out group-hover:scale-105"
              src={img}
              alt={alt}
              width="900"
              height="700"
              loading="lazy"
            />
            {/* Glowing overlay effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: isHovered 
                  ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)"
                  : "transparent",
              }}
            />
          </div>
        </motion.div>
      </motion.a>
      
      <motion.div 
        className="mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
      >
        <div className="flex space-x-2 mb-3" role="list">
          <motion.span 
            className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl" 
            role="listitem" 
            itemProp="dateCreated"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {year}
          </motion.span>
          <motion.span 
            className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl" 
            role="listitem" 
            itemProp="keywords"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {tools}
          </motion.span>
        </div>
        <div className="2xl:space-y-3">
          <motion.h3 
            className="text-works-title 2xl:text-5xl font-medium uppercase text-primary-200" 
            itemProp="name"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(255,255,255,0.3)"
            }}
          >
            {name}
          </motion.h3>
          <motion.p 
            className="text-body-2 2xl:text-4xl font-light text-primary-400" 
            itemProp="description"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
          >
            {type}
          </motion.p>
        </div>
      </motion.div>
      
      {/* Floating particles effect */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-secondary-600 rounded-full pointer-events-none"
              initial={{ 
                opacity: 0,
                scale: 0,
                x: "50%",
                y: "50%",
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: `calc(50% + ${Math.random() * 200 - 100}px)`,
                y: `calc(50% + ${Math.random() * 200 - 100}px)`,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
              style={{
                top: "20%",
                left: "20%",
              }}
            />
          ))}
        </>
      )}
    </motion.article>
  );
}
