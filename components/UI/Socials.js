const { default: Image } = require("next/image");

const pageContent = [
  {
    imageUrl: "/images/icon/github-icon.gif",
    link: "https://github.com/opulencedeveloper",
    value: "opulencedeveloper",
    alt: ""
  },
  {
    imageUrl: "/images/icon/twitter-icon.gif",
    link: "https://twitter.com/KudosLucky",
    value: "KudosLucky",
    alt: ""
  },
  {
    imageUrl: "/images/icon/linkedin-icon.gif",
    link: "https://www.linkedin.com/in/amobi-victor-232724198",
    value: "amobi-victor-232724198",
    alt: ""
  },
  {
    imageUrl: "/images/icon/facebook-icon.gif",
    link: "https://facebook.com/opulencedeveloper",
    value: "opulencedeveloper",
    alt: ""
  },
  {
    imageUrl: "/images/icon/facebook-icon.gif",
    link: "https://facebook.com/victor.opulence",
    value: "Victor Lucky Opulence",
  },
];

const Socials = () => {
  return (
    <div className="mt-28 mb-16">
      <div className="border border-primary2  flex flex-col justify-center items-center space-y-4 p-6 md:space-x-5 xl:flex-row xl:space-y-0">
        <p className="text-lg ">Find me on:</p>
        {pageContent.map((content) => {
          return (
            <a
              key={content.link}
              href={content.link}
              target="_blank"
              className="flex items-center"
            >
              <div className="h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={content.imageUrl}
                  alt={content.alt}
                  className="w-full h-full"
                  width={43.7}
                  height={43.7}
                />
              </div>{" "}
              <p className="font-extralight ml-2">{content.value}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
