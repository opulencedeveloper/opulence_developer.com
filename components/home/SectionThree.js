import handleWhatsAppClick from "@/helpers/whatsapp";
import Image from "next/image";

const openSourceProjectInfo = [
  {
    name: "RESTful(Node.js)",
    description:
      "This API exposes end points for CRUD opeartions, authentication and verification using Express.JS and MongoDB(Mongoose)",
    image: "api",
    url: "https://github.com/opulencedeveloper/Node_Js-REST-API.git",
  },
  {
    name: "GraphQL(Node.js)",
    description:
      "I developed a GraphQL project that efficiently retrieves necessary data from backend services. It provides a streamlined user experience and is more organized and easier to maintain.",
    image: "graphql",
    url: "https://github.com/opulencedeveloper/Node_Js-Graph-QL.git",
  },
  {
    name: "RESTful API(PHP)",
    description:
      "This was written with raw php that exposes end points for simple email sign up and sign in.",
    image: "api",
    url: "https://github.com/opulencedeveloper/PHP-API2.git",
  },
  {
    name: "Calender(React.js && Tailwind Css)",
    description:
      "The code provided could be of significant assistance should the need arise for integrating a functional calendar into your project.By utilizing the provided code as a foundation, you can potentially save valuable development time and effort",
    image: "react",
    url: "https://github.com/opulencedeveloper/opulence-calender.git",
  },
  {
    name: "App wide state management tool(React.js)",
    description:
      "This tool provides centralized state management, effortless integration, React Hooks compatibility, and a performance boost, pass a flag to components that you wish to exclude from rebuilding during state updates, Say goodbye to prop drilling and hello to streamlined state management.",
    image: "react",
    url: "https://github.com/opulencedeveloper/My-React-state-Magament-Solution-Code-using-customHooks.git",
  },
];

const brandsWorkedWith = [
  {
    logo: "bestmantech-logo",
    alt: "BestManTech Collaboration: Partnering with OpulenceDeveloper on a Meaningful Journey",
  },
  {
    logo: "optimum-computers-logo",
    alt: "Optimum Computers Affiliation: Navigating the Tech Landscape with OpulenceDeveloper",
  },
  {
    logo: "udobatech-logo",
    alt: "udobatech Collaboration: Fueling Innovation Alongside OpulenceDeveloper",
  },
  {
    logo: "call-a-doc-logo",
    alt: "Call A Doc Partnership: Empowering Healthcare Technology with OpulenceDeveloper",
  },
];


const sendMessageHandler = () => {
  handleWhatsAppClick(
    "Hello! 👋 I just visited your portfolio and I'm truly inspired by your journey and skills. I'd love to connect and potentially discuss collaboration opportunities or seek advice in the field. Looking forward to chatting with you further! 🚀",
    "+2348184297165"
  );
};


const SectionThree = () => {
  return (
    <section className="mt-32 ">
      <div>
        <p className="text-xl px-5 md:px-12 md:text-2xl">Some Open Source Code</p>
        <div className="border-primary1 border-t-2 border-opacity-50 flex justify-center mt-5 items-start space-x-auto flex-wrap pt-5 mx-4 md:mx-12 md:pt-8 md:justify-evenly 2xl:justify-start space-x-2">
          {openSourceProjectInfo.map((openSourceProjectData, index) => (
            <div key={index} className="w-80 py-2 mb-8 space-y-2">
              <div className="h-64 w-full rounded-tl-lg rounded-tr-lg overflow-hidden md:h-72">
                <Image
                  src={`/images/${openSourceProjectData.image}.jpg`}
                  loading="eager"
                  priority
                  alt={openSourceProjectData.image}
                  className="h-full w-full object-cover"
                  width={540}
                  height={388}
                />
              </div>
              <p className="font-medium text-xl text-center">
                {openSourceProjectData.name}
              </p>

              <p className="p-auto text-center text-sm leading-tight">
                {openSourceProjectData.description}
              </p>
              <a
                target="_blank"
                href={openSourceProjectData.url}
                className="w-max flex items-center border-primary1 border-b-2 border-opacity-50 mx-auto pb-0.5"
              >
                <p className="text-sm">Open in GitHub</p>{" "}
                <div className="ml-1">
                  <Image
                    src="/images/icon/arrow-right.svg"
                    alt="GitHub Link: Explore OpulenceDeveloper's Projects on GitHub"
                    loading="eager"
                    priority
                    className="h-4 w-4 transform -rotate-45"
                    width={16}
                    height={16}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-24 mb-32 px-5 md:px-12">
        <p className="text-xl font-medium md:text-2xl">Some brands I've worked with</p>
        <hr className="border-t-2 my-3 border-primary1 opacity-50" />
        <div className="space-x-auto flex flex-wrap justify-evenly pt-3 h-max">
          {brandsWorkedWith.map((brandsWorkedWithData, index) => (
            <div key={index} className="h-24 mb-5 mx-3 w-40 md:w-52">
              <Image
                src={`/images/logo/${brandsWorkedWithData.logo}.svg`}
                alt={brandsWorkedWithData.alt}
                className="h-full w-full"
                width={208}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pb-10 space-y-5 px-5 md:px-12">
        <p className="text-lg">Let's build magic together</p>
        <hr className="border-t-2 my-3 border-primary1 opacity-50" />
        <p className="leading-loose text-lg font-light ">
          "I am deeply passionate about crafting elegant and efficient solutions
          for intricate challenges, and I am thrilled at the opportunity to
          apply my skills to your forthcoming project. With comprehensive
          experience encompassing both front-end and back-end development, I
          possess the flexibility to operate across a spectrum of programming
          languages and frameworks. From designing responsive mobile
          applications and websites to engineering robust server architectures,
          I possess the technical prowess required to construct scalable and
          secure systems tailored to your requirements. However, my focus
          extends beyond mere coding. As a software engineer, I recognize the
          significance of collaboration, effective communication, and empathy. I
          collaborate closely with stakeholders to ensure that I deliver not
          just any solution, but the right solution. Moreover, I possess an
          unyielding enthusiasm to understand your business, objectives, and
          your users on a deeper level. Whether you seek a dedicated full-time
          professional, an adept part-time consultant, a troubleshooter for your
          code, or a skilled contract developer, I am enthusiastic to learn
          about your project. Please feel free to contact me through any of my
          social media channels - I am eager to initiate our collaboration. Your
          project holds great promise, and I am eagerly looking forward to
          joining forces with you to embark on this journey."
        </p>
        <button
          onClick={sendMessageHandler}
          className="flex items-center bg-black px-5 py-3 text-white rounded-sm"
        >
          Send Message
          <Image
            src="/images/icon/arrow-right.svg"
            alt="Message Icon: Reach Out and Connect with OpulenceDeveloper"
            className="h-4 w-4 ml-2"
            width={16}
            height={16}
          />
        </button>
      </div>
    </section>
  );
};

export default SectionThree;
