import { useRef, useState } from "react";
import Products from "../UI/Products";
import { useRouter } from "next/router";

const SectionTwo = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const seeMoreHandler = () => {
    router.replace("/contact-us");
  };

  const videoIds = [
    { id: "UqOb7JOXNWc", myref: section1Ref },
    { id: "wp1chKaIYbY", myref: undefined },
    { id: "OFjW-Sjc_VQ", myref: section2Ref },
  ];

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + videoIds.length) % videoIds.length
    );
  };
  // useEffect(() => {
  //   const interval = setInterval(goToNextSlide, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [activeIndex]);

  const scrollToFirstSection = () => {
    console.log("clicked");
    section1Ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const scrollToLastSection = () => {
    // section2Ref.current.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' });
  };

  const pageContent = [
    {
      name: "Real-Estate",
      type: "Website",
      imageUrl: "/images/real-estate-image.png",
      description:
        "Showcases an extensive range of exceptional properties, catering to diverse needs and preferences",
    },
    {
      name: "Links",
      type: "Website",
      imageUrl: "/images/links-image.png",
      description:
        "Elevate your social media engagement with this platform's innovative features and strategies",
    },
    {
      name: "Prep",
      type: "Website",
      imageUrl: "/images/prep.png",
      description:
        "With comprehensive guides on topics like interview preparation, common interview questions, and salary negotiation.",
    },
    {
      name: "Finance App",
      type: "Mobile App.",
      imageUrl: "/images/finance-app.png",
      description:
        "With a sleek and user-friendly interface, the app makes it easy to stay on top of your finances",
    },
    {
      name: "MacLinks",
      type: "Website",
      imageUrl: "/images/mac-links-image.png",
      description:
        "Enjoy the flexibility to choose from an array of customization options, enabling you to brand your academy and create a seamless extension of your professional identity.",
    },
    {
      name: "EduLab",
      type: "Website",
      imageUrl: "/images/edu-lab-image.png",
      description:
        "A vibrant online platform dedicated to celebrating the transformative power of education",
    },
  ];

  return (
    <>
      <div className="mt-32">
        <p className="text-xl">Featured Products</p>
        <Products pageContent={pageContent} />
        <div className="flex justify-center mb-10">
          <button onClick={seeMoreHandler}>See More</button>
        </div>

        <p className="text-xl">Featured Mobile Apps.</p>
        <hr className="border-t-2 opacity-50 my-5 " />
      </div>
      {/* <div className="flex w-full h-300 overflow-x-hidden whitespace-nowrap relative transition-left ease duration-300" style={{ left: `-${currentIndex * 400}px` }}> */}
      <div className=" space-x-8 flex pb-3 mx-5 md:mx-12 overflow-x-auto">
        {videoIds.map((video, index) => (
          <div className="flex-shrink-0 border" key={video.id}>
            <iframe
              ref={video.myref}
              src={`https://www.youtube.com/embed/${video.id}`}
              className="h-[200px] w-[300px]"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>{" "}
    </>
  );
};
export default SectionTwo;
