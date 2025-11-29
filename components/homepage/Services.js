import ServiceUi from "../UI/ServiceUi";
import Heading from "../UI/Heading";

export default function Services({ forwardedRef }) {
  const expertiseItems = [
    "AI Application Development",
    "Web Development",
    "App. Development",
    "Backend Dev."
  ];

  const toolBoxItems = [
    "JavaScript",
    "Typescript",
    "Flutter",
    "ReactJS",
    "NextJS",
    "NuxtJS",
    "TailwindCSS",
    "Node.js (ExpressJS)",
    "MongoDB",
    "PostgreSQL",
    "Arduino"
  ];

  return (
    <section ref={forwardedRef} id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <article aria-labelledby="expertises-heading">
          <ServiceUi
            title="expertises."
            description="We focus on all things, tech and web related. With each of our
            services, our goal is to deliver an impactful and elevating
            digital experience for everyone."
            items={expertiseItems}
          />
        </article>
        <article aria-labelledby="toolbox-heading">
          <ServiceUi
            title="digital tool box."
            description="These are our go to tech stack to make any projects happen. We are always eager of learning more about our current stack, and new technologies that could expand our horizons."
            items={toolBoxItems}
          />
        </article>
      </div>
    </section>
  );
}
