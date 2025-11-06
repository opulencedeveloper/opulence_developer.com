import Projects from "../UI/Projects";
import Heading from "../UI/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
      aria-label="Featured projects portfolio"
    >
     <Heading title="Projects" />
      <p className="text-sm sm:text-lg text-secondary-600">Project Highlight</p>
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12" role="list">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12" role="listitem">
          <Projects
            link="https://www.ebocab.com/"
            img={'/assets/images/ebocab-app.png'}
            alt="Ebocab Passenger and Driver App"
            name="Ebocab Passenger and Driver App."
            type="Role: App. Development • Backend Dev."
            year="2025"
            tools="Flutter • Node.js • TypeScript"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16" role="listitem">
          <Projects
            link="https://reicapitalgrowth.com/"
            img={'/assets/images/rei-capital.png'} 
            alt="REI capital growth"
            name="REI capital growth"
            type="Role: Frontend Development"
            year="2021"
            tools="HTML • CSS • Javascript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80" role="listitem">
          <Projects
            link="https://aanbestedingsjurist.ai"
            img={'/assets/images/aanbestedingsjurist.png'}
            alt="Aanbestedingsjurist"
            name="AI Assistant"
            type="Role: Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • Javascript"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20" role="listitem">
          <Projects
             link="https://contentmatch.io"
             img={'/assets/images/contentmatch.png'}
             alt="Contentmatch"
             name="Contentmatch"
             type="Role: Frontend Development"
             year="2023"
            tools="HTML • TailwindCSS • Javascript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4" role="listitem">
        <Projects
            link="https://outstandingdot.com"
            img={'/assets/images/outstanding-dot.png'}
            alt="Outstanding dot website"
            name="Outstanding dot website"
            type="Role: Backend Development"
            year="2023"
            tools="Node.js • Typescript • PostgreSql"
          />
         
        </div>
        <div className="col-span-1 h-fit md:col-span-7" role="listitem">
        <Projects
            link="https://uchecrypt.com"
            img={'/assets/images/uchecrypt.png'}
            alt="Uchecrypt website"
            name="Uchecrypt"
            type="Role: Backend • Front end Development"
            year="2023"
            tools="Next.js • TailwindCSS • Node.js • MongoDb"
          />
         
        </div>
        <div className="col-span-1 h-fit md:col-span-5" role="listitem">
        <Projects
            link="https://www.ebocab.com"
            img={'/assets/images/ebocab.png'}
            alt="Ebocab website"
            name="Ebocab"
           type="Role: Backend • Front end Development"
            year="2024"
            tools="Next.js • Node.js"
          />
         
        </div>
      </div>
    </section>
  );
}
