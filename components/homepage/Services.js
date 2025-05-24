import ServiceUi from "../UI/ServiceUi";
import Heading from "../UI/Heading";

export default function Services() {
  const expertiseItems = [
    "AI Engineering",
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
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on all things, tech and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
