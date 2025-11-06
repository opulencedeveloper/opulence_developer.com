"use client";
import Projects from "../UI/Projects";
import Heading from "../UI/Heading";
import { motion } from "framer-motion";

export default function Works({ forwardedRef }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%] relative"
      aria-label="Featured projects portfolio"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-600 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-200 rounded-full blur-3xl mix-blend-multiply animate-pulse" style={{ animationDelay: "1s" }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Heading title="Projects" />
        <motion.p 
          className="text-sm sm:text-lg text-secondary-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Project Highlight
        </motion.p>
      </motion.div>

      <motion.div 
        className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12 relative z-10" 
        role="list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Project #1 */}
        <motion.div 
          className="col-span-1 md:col-span-12" 
          role="listitem"
          variants={itemVariants}
        >
          <Projects
            link="https://www.ebocab.com/"
            img={'/assets/images/ebocab-app.png'}
            alt="Ebocab Passenger and Driver App"
            name="Ebocab Passenger and Driver App."
            type="Role: App. Development • Backend Dev."
            year="2025"
            tools="Flutter • Node.js • TypeScript"
            index={0}
          />
        </motion.div>
        
        {/* Project #2 */}
        <motion.div 
          className="col-span-1 pt-0 md:col-span-7 md:pt-16" 
          role="listitem"
          variants={itemVariants}
        >
          <Projects
            link="https://reicapitalgrowth.com/"
            img={'/assets/images/rei-capital.png'} 
            alt="REI capital growth"
            name="REI capital growth"
            type="Role: Frontend Development"
            year="2021"
            tools="HTML • CSS • Javascript"
            index={1}
          />
        </motion.div>
        
        <motion.div 
          className="col-span-1 pt-0 md:col-span-5 md:pt-80" 
          role="listitem"
          variants={itemVariants}
        >
          <Projects
            link="https://aanbestedingsjurist.ai"
            img={'/assets/images/aanbestedingsjurist.png'}
            alt="Aanbestedingsjurist"
            name="AI Assistant"
            type="Role: Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • Javascript"
            index={2}
          />
        </motion.div>
        
        <motion.div 
          className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20" 
          role="listitem"
          variants={itemVariants}
        >
          <Projects
            link="https://contentmatch.io"
            img={'/assets/images/contentmatch.png'}
            alt="Contentmatch"
            name="Contentmatch"
            type="Role: Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • Javascript"
            index={3}
          />
        </motion.div>
        
        <motion.div 
          className="col-span-1 h-fit md:col-span-4" 
          role="listitem"
          variants={itemVariants}
        >
          <Projects
            link="https://outstandingdot.com"
            img={'/assets/images/outstanding-dot.png'}
            alt="Outstanding dot website"
            name="Outstanding dot website"
            type="Role: Backend Development"
            year="2023"
            tools="Node.js • Typescript • PostgreSql"
            index={4}
          />
        </motion.div>
        
        <motion.div 
          className="col-span-1 h-fit md:col-span-7" 
          role="listitem"
          variants={itemVariants}
        >
          <Projects
            link="https://uchecrypt.com"
            img={'/assets/images/uchecrypt.png'}
            alt="Uchecrypt website"
            name="Uchecrypt"
            type="Role: Backend • Front end Development"
            year="2023"
            tools="Next.js • TailwindCSS • Node.js • MongoDb"
            index={5}
          />
        </motion.div>
        
        <motion.div 
          className="col-span-1 h-fit md:col-span-5" 
          role="listitem"
          variants={itemVariants}
        >
          <Projects
            link="https://www.ebocab.com"
            img={'/assets/images/ebocab.png'}
            alt="Ebocab website"
            name="Ebocab"
            type="Role: Backend • Front end Development"
            year="2024"
            tools="Next.js • Node.js"
            index={6}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
