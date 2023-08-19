import Image from "next/image";
import Socials from "../UI/Socials";

const SectionOne = () => {
  {
    /* <div className="space-y-10">
        <p className="text-4xl font-medium">My Name is Anyanwu Macdonald Chibuike. I am a product designer based in Nigeria.</p>
    <p>I started off my career in product design since 2020 and I must say, it has been a wonderful ride. Before then, I was a graphics designer(2015-2020). I felt my graphics design experience made product design look easy and exciting to me.</p>
    <p>I come from a small town in Imo State, Nigeria and studied Computer Engineering at Michael Okpara University of Agriculture, Umudike. Abia State, Nigeria.</p>
    <p>When not online, I enjoy watching football, storytelling and hanging out with friends. I really enjoy listening to music especially Rap and RnB.</p>
    <p>I also create contents related to tech and design on <span className="underline font-semibold">Facebook</span> and <span className="underline font-semibold">YouTube</span>.</p>
    </div> */
  }
  return (
    <section className="py-8">
      <h1 className="text-3xl text-primary1 font-bold mb-4">
        My Name is <span className="text-white">Amobi Victor Chukwuka,</span> I
        am a <span className="text-white">Full Software Enginneer.</span>
      </h1>
      {/* <p className="text-gray-500 mb-8">Published May 10, 2023</p> */}
      <div className="flex flex-col sm:flex-row">
        <div className=" mb-4 sm:mb-0 sm:mr-8">
          <Image
            src="/images/profile.jpg"
            alt="Newspaper"
            className="border border-2 rounded"
            loading="eager"
            priority
            width={600}
            height={400}
          />
        </div>
        <div className="space-y-7">
          <p className="text-lg mb-4">
            Welcome! I'm delighted to have you here to share my programming
            journey.
          </p>
          <p className="text-lg">
            It all began at the age of 10 when I laid hands on my first
            computer. The potential it held and the boundless opportunities it
            offered fascinated me. This marked the inception of my passion for
            programming, which I pursued academically and beyond.
          </p>
          <p className="text-lg">
            In my pursuit of mastery, I embarked on online programming courses
            and workshops. Devoting my time and energy, I delved into
            cutting-edge programming languages and new skill sets. My expertise
            spans embedded systems (Arduino), web development (HTML, CSS with
            Tailwind CSS), React.js, mobile app development (Flutter), and
            Node.js (Express.js), among others.
          </p>
          <p className="text-lg">
            While still in school, I developed a platform where fellow students
            accessed lecture notes, assignments, and solutions with ease, even
            extending the service to various universities. This endeavor
            showcased my abilities while providing value to others.
          </p>
          <p className="text-lg">
            As I evolved, my appetite for knowledge and challenges grew.
            Continuously expanding my programming prowess, I've transitioned
            from coding for enjoyment to making it my profession over the past 5
            years. My commitment is unwavering: dedicating my life to
            programming and seizing every learning opportunity.
          </p>
          <p className="text-lg">
            I eagerly seek challenges that spark curiosity, thought, adaptation,
            growth, and learning. I hold the belief that each project is a
            gateway to fresh insights and a chance to exhibit my skills. I am
            confident in my ability to collaborate with you or contribute to
            your endeavors, and I am excited about what we can achieve together.
          </p>
          <p className="text-lg">
            Thank you for investing your time in exploring my programming
            journey. Please feel free to explore my portfolio, where you can
            find a selection of the projects I've undertaken. Should you need
            assistance with debugging or wish to discuss a potential project,
            don't hesitate to reach out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
