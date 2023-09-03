import { useRouter } from "next/router";

import Products from "../UI/Products";


const SectionTwo = () => {
  const router = useRouter();

  const seeMoreHandler = () => {
    router.replace("/shop");
  };

  const videoIds = ["UqOb7JOXNWc", "wp1chKaIYbY", "OFjW-Sjc_VQ", "pEygELhyBQw"];

  const productInfo = [
    {
      name: "Prep",
      type: "Website",
      imageUrl: "/images/prep.png",
      link: "https://prep-six.vercel.app/",
      description:
        "With comprehensive guides on topics like interview preparation, common interview questions, and salary negotiation.",
    },
    
    {
      name: "Links",
      type: "Website",
      imageUrl: "/images/links-image.png",
      link: "https://links-tan.vercel.app/",
      description:
        "Elevate your social media engagement with this platform's innovative features and strategies",
    },
    
    {
      name: "Finance App",
      type: "Mobile App.",
      imageUrl: "/images/finance-app.png",
      link: "https://youtu.be/OFjW-Sjc_VQ",
      description:
        "With a sleek and user-friendly interface, the app makes it easy to stay on top of your finances",
    },
    {
      name: "MacLinks",
      type: "Website",
      imageUrl: "/images/mac-links-image.png",
      link: "https://maclink.vercel.app/",
      description:
        "Enjoy the flexibility to choose from an array of customization options, enabling you to brand your academy and create a seamless extension of your professional identity.",
    },
    {
      name: "EduLab",
      type: "Website",
      imageUrl: "/images/edu-lab-image.png",
      link: "https://edulab-jet.vercel.app/",
      description:
        "A vibrant online platform dedicated to celebrating the transformative power of education",
    },
    {
      name: "Real-Estate",
      type: "Website",
      imageUrl: "/images/real-estate-image.png",
      link: "https://real-estate-beta-silk.vercel.app/",
      description:
        "Showcases an extensive range of exceptional properties, catering to diverse needs and preferences",
    },
  ];

  return (
    <section className="mt-8 md:mt-14">
      <div className="w-full">
        <p className="text-xl font-medium mx-5 md:mx-12 md:text-2xl">Featured Product</p>
        <Products productInfo={productInfo} />
        <div className="flex justify-center my-10">
          <button className="transition-transform duration-300 transform hover:scale-105 focus:outline-none border px-4 py-3" onClick={seeMoreHandler}>See More</button>
        </div>

        <p className="text-xl pl-5 font-medium md:pl-12 md:text-2xl">Featured Mobile Apps.</p>
        <hr className="border-t-2 opacity-50 my-5 mx-3 md:mx-12" />
      </div>
      <div className=" space-x-5 flex pb-3 mx-5 md:mx-20 overflow-x-auto">
        {videoIds.map((videoId, index) => (
          <div className="flex-shrink-0 border" key={index}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              className="h-[200px] w-[300px]"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>{" "}
    </section>
  );
};
export default SectionTwo;
