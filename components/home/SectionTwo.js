// import { useState } from 'react';

// const ImageSlider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const videoIds = [
//     { id: "UqOb7JOXNWc", myref: "section1Ref" },
//     { id: "wp1chKaIYbY", myref: "undefined" },
//     { id: "OFjW-Sjc_VQ", myref: "section2Ref" },
//   ];
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + videoIds.length) % videoIds.length);
//   };

//   return (
//     <div className="flex items-center justify-center">
//       <button
//         className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
//         onClick={handlePrevious}
//       >
//         Previous
//       </button>
//       <div className="w-400 h-300 overflow-hidden whitespace-nowrap relative transition-left ease duration-300" style={{ left: `-${currentIndex * 400}px` }}>
//       <div className="flex space-x-8 overflow-x-hidden pl-5 md:pl-12">
//        {videoIds.map((video) => (
//            <div key={video.id}>
//              <iframe
//               // ref={video.myref}
//                src={`https://www.youtube.com/embed/${video.id}`}
//                width="400"
//                height="300"
//                allowFullScreen
//              ></iframe>
//            </div>
//         ))}
//        </div>
//       </div>
//       <button
//         className="px-4 py-2 bg-blue-500 text-white rounded ml-2"
//         onClick={handleNext}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default ImageSlider;

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SectionTwo = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

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
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  //   const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
  // };

  // const handlePrevious = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + videoIds.length) % videoIds.length);
  // };
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
      name: "Trade Hub",
      type: "Crypto Website",
      imageUrl: "/images/tradehub.png",
      description:
        "Stay up-to-date on the latest news and trends in the world of cryptocurrency. Whether you're a seasoned investor or just getting started, this site has something for you.",
    },
    {
      name: "Story Reading App",
      type: "E-book",
      imageUrl: "/images/story-book-app.png",
      description:
        "A learning tool that helps children develop important literacy skills. With features like word highlighting and pronunciation, kids can practice their reading and comprehension in a fun and engaging way.",
    },
    {
      name: "Prep",
      type: "Interview Guide",
      imageUrl: "/images/prep.png",
      description:
        "With comprehensive guides on topics like interview preparation, common interview questions, and salary negotiation, you'll be well-equipped to impress any interviewer.",
    },
    {
      name: "Finance App",
      type: "Fintech",
      imageUrl: "/images/finance-app.png",
      description:
        "With a sleek and user-friendly interface, the app makes it easy to stay on top of your finances. You can link your bank accounts, credit cards, and investment accounts, and see all your transactions in one place.",
    },
    {
      name: "Dentals",
      type: "Medicals",
      imageUrl: "/images/dentals.png",
      description:
        "With a clean and intuitive interface, the site is easy to navigate and use. You can learn about our dental services, read about our team of experienced professionals, and even schedule an appointment online.",
    },
    {
      name: "Rent Plug",
      type: "Real Estate",
      imageUrl: "/images/real-estate.png",
      description:
        "With a powerful search engine and filters, you can easily find properties that meet your specific criteria, such as location, price range, and property type. You can also save your favorite properties and receive notifications when new properties that match your preferences become available.",
    },
  ];

  return (
    <>
      <div className="px-5 mt-32 md:px-12">
        <p className="text-xl">Some Websites and Mobile Apps Projects</p>
        <div className="border-primary1 border-t-2 border-opacity-50 flex justify-center mt-5 space-x-auto flex-wrap md:justify-evenly 2xl:justify-start space-x-2">
          {pageContent.map((content) => (
            <div key={content.imageUrl} className="w-96 my-10">
              <div className="relative bg-primary1 flex justify-center rounded-tr-md rounded-tl-md">
                <Image
                  src={content.imageUrl}
                  alt="call a doctor logo"
                  className="h-320 w-piw1 -mb-6 z-0 rounded"
                  width={540}
                  height={388}
                />
              </div>
              <div className="p-5 space-y-2 mt-2 bg-primary2">
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">{content.name}</p>
                    <p className="text-primary1 text-sm">{content.type}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm">Live Project</p>{" "}
                    <div className="ml-1">
                      <Image
                        src="/images/icon/arrow-right.svg"
                        alt="arrow right icon"
                        className="h-4 w-4 transform -rotate-45"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center">{content.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xl">My API's</p>
        <hr className="border-t-2 opacity-50 my-5 " />
      </div>
      {/* <div className="flex w-full h-300 overflow-x-hidden whitespace-nowrap relative transition-left ease duration-300" style={{ left: `-${currentIndex * 400}px` }}> */}
      <div className="flex flex-col w-full h-max overflow-x-hidden pl-5 md:pl-12">
        <div
          className=" space-x-8 flex transition-transform duration-500"
          style={{
            transform: `translateX(-${activeIndex * (100 / videoIds.length)}%)`,
            width: `${videoIds.length * 19}rem`,
           // marginRight: "100"
          }}
        >
          {videoIds.map((video, index) => (
            <div
              key={index}
              style={{
                width: `${100 / videoIds.length}%`,
              }}
              className=" flex w-full  mr-2"
            >
              <div className="border" key={video.id}>
                <iframe
                  ref={video.myref}
                  src={`https://www.youtube.com/embed/${video.id}`}
                  className="h-[200px] w-[300px]"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>{" "}
        {/* {videoIds.map((video) => (
            <div className="" key={video.id}>
              <iframe
                ref={video.myref}
                src={`https://www.youtube.com/embed/${video.id}`}
                width="400"
                height="300"
                allowFullScreen
              ></iframe>
            </div>
          ))} */}
      </div>

      {/* </div> */}
      <div className="flex px-5 justify-between md:px-12">
        <button
          className="flex items-center px-5 py-3 text-white rounded-md"
          onClick={goToPrevSlide}
        >
          <Image
            src="/images/icon/arrow-right.svg"
            alt="arrow right icon"
            className="h-4 w-4 mr-2 rotate-180"
            width={16}
            height={16}
          />
          Previous
        </button>

        <button
          className="flex items-center px-5 py-3 text-white rounded-md"
          onClick={goToNextSlide}
        >
          Next
          <Image
            src="/images/icon/arrow-right.svg"
            alt="arrow right icon"
            className="h-4 w-4 ml-2"
            width={16}
            height={16}
          />
        </button>
      </div>
    </>
  );
};
export default SectionTwo;
