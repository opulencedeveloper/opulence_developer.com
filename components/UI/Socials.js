import Image from "next/image";

const socialInfo = [
  {
    imageName: "github-icon",
    link: "https://github.com/opulencedeveloper",
    value: "opulencedeveloper",
  },
  {
    imageName: "twitter-icon",
    link: "https://twitter.com/KudosLucky",
    value: "KudosLucky",
  },
  {
    imageName: "linkedin-icon",
    link: "https://www.linkedin.com/in/amobi-victor-232724198",
    value: "amobi-victor-232724198",
  },
  {
    imageName: "facebook-icon",
    link: "https://facebook.com/opulencedeveloper",
    value: "opulencedeveloper",
  },
  {
    imageName: "facebook-icon",
    link: "https://facebook.com/victor.opulence",
    value: "Victor Lucky Opulence",
  },
];

const Socials = () => {
  return (
    <div className="mt-28 mb-16">
      <div className="border border-primary2  flex flex-col justify-center items-center space-y-4 p-6 md:space-x-5 xl:flex-row xl:space-y-0">
        <p className="text-lg ">Find me on:</p>
        {socialInfo.map((socialInfoData, index) => {
          return (
            <a
              key={index}
              href={socialInfoData.link}
              target="_blank"
              className="flex items-center"
            >
              <div className="h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={`/images/icon/${socialInfoData.imageName}.gif`}
                  alt={socialInfoData.imageName}
                  className="w-full h-full"
                  width={43.7}
                  height={43.7}
                />
              </div>{" "}
              <p className="font-extralight ml-2">{socialInfoData.value}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
