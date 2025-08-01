import { useEffect, useRef } from "react";
// import profileImg from "/src/assets/images/profile.jpg";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../UI/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={"../../assets/images/profile.svg"}
            width="600"
            height="800"
            alt="portrait image of Amobi Victor Chukwuka also known as Opulence Developer"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              A brief intro, who am I?
            </h3>
          <p
  ref={body}
  className="translate-y-10 text-body-1 2xl:text-4xl opacity-0"
>
  Hi, I'm Amobi Victor Chukwuka, glad you finally found me.
  <br /><br />
  I'm a fullstack software engineer based in Port Harcourt, Nigeria, passionate about building scalable web, mobile-app, and backend applications. I enjoy taking products from concept to launch, combining clean code with thoughtful design. 😎
  <br /><br />
  Beyond coding, I stay sharp by exploring emerging technologies and reading tech. related blogs, always learning, always improving.
  <a
    className="underline duration-300 ease-in-out hover:text-secondary-700 pl-1"
    href="https://youtube.com/shorts/f7kedhflEpc?si=dXaI28b4v1SsK0M8"
  >
    YouTube 📸
  </a>
  <br />
  <a
    target="_blank"
    className="underline duration-300 ease-in-out hover:text-secondary-700 pl-1 shake-infinite"
    href="/assets/cv/Amobi_Victor_CV.pdf"
  >
    View CV
  </a>
</p>

          </div>
        </div>
      </div>
    </section>
  );
}
