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
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://staging.jack.parts"
            img={'/assets/images/staging-jack.png'}
            alt="Staging Jack landing page"
            name="Staging Jack"
            type="Web • Backend Development"
            year="2021"
            tools="Node.js • TypeScript • MongoDB "

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://maureenportfoliowebsite.vercel.app"
            img={'/assets/images/maureen-eugene.png'}
            alt="Maureen eugene landing page"
            name="Maureen Portfolio"
            type="Web • Frontend Development"
            year="2021"
            tools="Next.js • TailwindCSS"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://ologwusamuel.vercel.app"
            img={'/assets/images/ologwu-samuel.png'}
            alt="Ologwu Samuel portfolio"
            name="Ologwu Samuel Portfolio"
            type="Web • Frontend Development"
            year="2023"
            tools="Next.js • TailwindCSS"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
             link="https://www.janetmemorialhospital.com"
             img={'/assets/images/janet-hospital.png'}
             alt="Janet memorial hospital landing page"
             name="Janet Hospital website"
             type="Web • Frontend Development"
             year="2023"
             tools="Next.js • TailwindCSS"
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
      </div>
    </section>
  );
}
