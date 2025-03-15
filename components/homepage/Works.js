import Projects from "../UI/Projects";
import Heading from "../UI/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <span className="text-sm sm:text-lg text-secondary-600">Project Highlight</span>
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://jack.parts"
            img={'/assets/images/staging-jack.png'}
            alt="Staging Jack landing page"
            name="Staging Jack"
            type="Fullstack • Backend and App. Development"
            year="2021"
            tools="Flutter • Node.js • TypeScript • MongoDB "

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://reicapitalgrowth.com/"
            img={'/assets/images/rei-capital.png'} 
            alt="REI capital growth"
            name="REI capital growth"
            type="Web • Frontend Development"
            year="2021"
            tools="HTML • CSS • Javascript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://aanbestedingsjurist.ai"
            img={'/assets/images/aanbestedingsjurist.png'}
            alt="Aanbestedingsjurist"
            name="AI Assistant"
            type="Web • Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • Javascript"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
             link="https://contentmatch.io"
             img={'/assets/images/contentmatch.png'}
             alt="Contentmatch"
             name="Contentmatch"
             type="Web • Frontend Development"
             year="2023"
            tools="HTML • TailwindCSS • Javascript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://outstandingdot.com"
            img={'/assets/images/outstanding-dot.png'}
            alt="Outstanding dot website"
            name="Outstanding dot website"
            type="Web • Backend Development"
            year="2023"
            tools="Node.js • Typescript • PostgreSql"
          />
         
        </div>
        <div className="col-span-1 h-fit md:col-span-7">
        <Projects
            link="https://uchecrypt.com"
            img={'/assets/images/uchecrypt.png'}
            alt="Uchecrypt website"
            name="Uchecrypt"
            type="Full stack • Backend and Front end Development"
            year="2023"
            tools="Next.js • TailwindCSS • Node.js • MongoDb"
          />
         
        </div>
        <div className="col-span-1 h-fit md:col-span-5">
        <Projects
            link="https://www.ebocab.com"
            img={'/assets/images/ebocab.png'}
            alt="Ebocab website"
            name="Ebocab"
            type="Web • Front end Development"
            year="2024"
            tools="Next.js • Node.js • PostgreSql • Flutter"
          />
         
        </div>
      </div>
    </section>
  );
}
