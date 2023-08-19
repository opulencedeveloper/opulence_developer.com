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
  return <section className="py-8">
    <h1 className="text-3xl font-bold mb-4">
      My Name is Amobi Victor Chukwuka, I am a Full Softwaare Enginneer.
    </h1>
    {/* <p className="text-gray-500 mb-8">Published May 10, 2023</p> */}
    <div className="flex flex-col sm:flex-row">
      <div className=" mb-4 sm:mb-0 sm:mr-8">
        <Image
          src="/images/profile.jpg"
          alt="Newspaper"
          className=" border border-2 rounded"
          width={600}
          height={400}
        />
      </div>
      <div className="space-y-8">
        <p className="text-lg mb-4">
          Welcome! I'm thrilled to have you here and share my journey in the
          world of programming with you.
        </p>
        <p className="text-lg">
          It all started when I was just 10 years old and I got my hands on a
          computer for the first time. I was fascinated by what it could do and
          the endless possibilities it offered. This sparked my interest in
          programming and led me to study it in school. But my passion didn't
          stop there.
        </p>
        <p className="text-lg">
          In my quest to become a better programmer, I attended online
          programming classes and workshops, dedicating my time and energy to
          learning the latest programming languages and acquiring new skills. I
          honed my skills in embedded systems (Arduino), web development (HTML,
          CSS (Tailwind CSS)), React.js, mobile application development
          (Flutter), Node.js (Express.js), and much more.
        </p>
        <p className="text-lg">
          When I was still in school, I developed a website where I posted
          lecture notes, assignments, and solutions for my fellow students to
          access with ease, covering some universities as well. This project
          gave me the opportunity to showcase my skills and provide value to
          others.
        </p>
        <p className="text-lg">
          As my skills developed, I realized that I was hungry for more
          knowledge and challenges. So, I continued to learn and grow my
          expertise in programming. Over the past 5 years, I have been coding
          for fun in private, and turned my hobby into a career. I am determined
          to dedicate my life to programming and to keep expanding my knowledge
          with every opportunity I get.
        </p>
        <p className="text-lg">
          I am eager for new challenges that will make me wonder, think, adapt,
          improve and learn new things. I believe that every project is an
          opportunity to learn something new and to showcase my skills. I am
          confident in my ability to work with you or for you and I look forward
          to exploring new opportunities together.
        </p>
        <p className="text-lg">
          Thank you for taking the time to read about me and my journey in
          programming. Feel free to explore my portfolio and see some of the
          projects that I have worked on. If you have any questions on flxing a
          bug or would like to discuss a project, please don't hesitate to
          contact me.
        </p>
      </div>
    </div>
  </section>;
};

export default SectionOne;
