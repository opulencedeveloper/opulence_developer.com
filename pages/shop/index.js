import Products from "@/components/UI/Products";
import Head from "next/head";
import Image from "next/image";
const productInfo = [
  {
    name: "Fintech",
    type: "Website",
    imageUrl: "/images/money-hub-image.png",
    link: "https://moneyhub.vercel.app/",
    description:
      "Offers a range of innovative tools and services to help you achieve your financial goals with confidence and ease",
  },
  {
    name: "E-book",
    type: "Mobile App.",
    imageUrl: "/images/story-book-app.png",
    link: "https://youtu.be/UqOb7JOXNWc",
    description:
      "Introduce young minds to the joy of reading with 'Wonderland Tales,' an enchanting story book mobile app designed especially for kids",
  },

  {
    name: "Prep",
    type: "Website",
    link: "https://prep-six.vercel.app/",
    imageUrl: "/images/prep.png",
    description:
      "With comprehensive guides on topics like interview preparation, common interview questions, and salary negotiation.",
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
    name: "Links",
    type: "Website",
    imageUrl: "/images/links-image.png",
    link: "https://links-tan.vercel.app/",
    description:
      "Elevate your social media engagement with this platform's innovative features and strategies",
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

const Shop = () => {
  return (
    <>
      <Head>
        <title>For Sale - OpulenceDeveloper Portfolio</title>
        <meta
          name="description"
          content="Browse a collection of websites and mobile apps for sale on OpulenceDeveloper's portfolio. Find high-quality digital products ready for purchase."
        />
        <meta
          name="keywords"
          content="OpulenceDeveloper, Portfolio, Websites for Sale, Mobile Apps for Sale, FullStack Software Engineer"
        />
        <meta name="author" content="Amobi Victor Chukwuka" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="For Sale - OpulenceDeveloper Portfolio"
        />
        <meta
          property="og:description"
          content="Explore a variety of websites and mobile apps for sale by Amobi Victor Chukwuka. High-quality digital products ready for purchase."
        />
      </Head>{" "}
      <section>
        <div className="relative rounded-tl rounded-tr overflow-hidden flex items-center mt-8 ml-5 md:mt-20 md:ml-12 ">
          {" "}
          <div className="z-10 flex justify-center items-center bg-white flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
            {" "}
            <Image
              src="/images/icon/cart-icon.gif"
              alt="Software Marketplace: Explore and Acquire Cutting-Edge Solutions with OpulenceDeveloper"
              className="h-auto w-auto bg-transparent"
              width={40}
              height={40}
            />
          </div>
          <p className=" absolute container -left-[38rem] z-0 animate-slideFromLeft font-semibold text-xl md:text-3xl">
            Opulence Shop
          </p>
        </div>
        <Products productInfo={productInfo} />
      </section>{" "}
    </>
  );
};

export default Shop;
