import Image from "next/image";
import Socials from "../UI/Socials";


const SectionThree = () => {
  const contents = [
    {
      name: "RESTful(Node.js)",
      description: "This API exposes end points for CRUD opeartions, authentication and verification using Express.JS and MongoDB(Mongoose)",
    imageUrl: "/images/api.jpg"
    },{
      name: "GraphQL(Node.js)",
      description: "I developed a GraphQL project that efficiently retrieves necessary data from backend services. It provides a streamlined user experience and is more organized and easier to maintain.",
    imageUrl: "/images/graphql.jpg"
    },
    {
      name: "RESTful API(PHP)",
      description: "This was written with raw php that exposes end points for simple email sign up and sign in.",
      imageUrl: "/images/api.jpg"
    },
  ];
  
 
  return (
    <section className="px-5 mt-32 md:px-12">
      <div >
        <p className="text-xl">Some Open Source Code</p>
        <div className="border-primary1 border-t-2 border-opacity-50 flex justify-center mt-5 items-start space-x-auto flex-wrap md:justify-evenly 2xl:justify-start space-x-2">
          {contents.map((content, index) => (
            <div 
            key={index}
            className="w-80 py-2 space-y-2">
             <div className="h-72 w-full rounded-tl-lg rounded-tr-lg overflow-hidden"><Image
                  src={content.imageUrl}
                  alt="call a doctor logo"
                  className="h-full w-full"
                  width={540}
                  height={388}
                /></div>   
                    <p className="font-medium text-xl text-center">{content.name}</p>
                   
                 
                <p className="p-auto text-center text-sm leading-tight">
                {content.description}
                </p>
                 <button className="flex items-center border-primary1 border-b-2 border-opacity-50 mx-auto pb-0.5">
                    <p className="text-sm">Open in GitHub</p>{" "}
                    <div className="ml-1">
                      <Image
                        src="/images/icon/arrow-right.svg"
                        alt="arrow right icon"
                        className="h-4 w-4 transform -rotate-45"
                        width={16}
                        height={16}
                      />
                    </div>
                  </button> 
                  
            </div>
          ))}
        </div>
      </div>




      <div className="mt-40 mb-28">
        <p className="text-xl md:text-2xl">Some brands I've worked with</p>
        <hr className="border-t-2 my-3 border-primary1 opacity-50" />
        <div className="space-x-auto flex space-x-3 h-32">
         
            <div className="h-24 w-52">
                <Image
                  src="/images/logo/best.svg"
                  alt="call a doctor logo"
                  className="h-full w-full"
                  width={208}
                  height={80}
                />
                  
            </div>
            <div className="h-24 w-52">
                <Image
                  src="/images/logo/optimum.svg"
                  alt="call a doctor logo"
                  className="h-full w-full"
                  width={208}
                  height={80}
                />
                  
            </div>
            <div className="h-24 w-52">
                <Image
                  src="/images/logo/ud.svg"
                  alt="call a doctor logo"
                  className="w-full h-full"
                  width={208}
                  height={80}
                  
                />
                  
            </div>
            <div className="h-24 w-52">
                <Image
                  src="/images/call-a-doc.svg"
                  alt="call a doctor logo"
                  className="w-full h-full"
                  width={208}
                  height={80}
                />
                  
            </div>
        </div>
      </div>

      <div className="pb-10 space-y-5">
        <p className="text-lg">Let's build magic together</p>
        <hr className="border-t-2 my-3 border-primary1 opacity-50" />
        <p className="leading-loose text-lg font-light">"I'm passionate about creating elegant, efficient solutions to complex problems and I'm excited to bring my skills to your next project. 
        With experience in both front-end and back-end development, I'm comfortable working with a variety of programming languages and frameworks. From responsive mobile app. and web design to robust server architecture, I have the technical expertise to build scalable, secure systems that meet your needs.

But I don't just focus on the code. As a software engineer, I understand the importance of collaboration, communication, and empathy. I work closely with stakeholders to ensure that I'm delivering the right solution, not just any solution. And I'm always eager to learn more about your business, your goals, and your users.

Whether you're looking for a full-time employee, a part-time consultant, looking for someone to help you debug your code or a contract developer, I'm excited to hear about your project. So don't hesitate to reach out reach me on any of my social media handles - I'm looking forward to working with/for you.
  and we can get started."</p>
<button className="flex items-center bg-black px-5 py-3 text-white rounded-sm">
          Send Message
          <Image
            src="/images/icon/arrow-right.svg"
            alt="arrow right icon"
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
