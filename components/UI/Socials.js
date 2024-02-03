import Image from "next/image";

const socialInfo = [
  {
    imageName: "github",
    link: "https://github.com/opulencedeveloper",
    value: "opulencedeveloper",
  },
  {
    imageName: "twitter",
    link: "https://twitter.com/KudosLucky",
    value: "KudosLucky",
  },
  {
    imageName: "linkedin",
    link: "https://www.linkedin.com/in/amobi-victor-232724198",
    value: "amobi-victor-232724198",
  },
  {
    imageName: "facebook",
    link: "https://facebook.com/opulencedeveloper",
    value: "opulencedeveloper",
  },
  {
    imageName: "facebook",
    link: "https://facebook.com/victor.opulence",
    value: "Victor Lucky Opulence",
  },
];

const Socials = () => {
  return (
    <div className="mt-28 mb-16">
      <div className="border border-primary2 backdrop-filter backdrop-blur-sm flex gap-4 p-6 flex-col justify-center items-center size1:flex-row">
        <p className="text-lg ">Find me on:</p>
      <div className="flex justify-evenly flex-wrap gap-4">  {socialInfo.map((socialInfoData, index) => {
          return (
            <a
              key={index}
              href={socialInfoData.link}
              target="_blank"
              className="flex items-center"
            >
              <div className="h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={`/images/icon/${socialInfoData.imageName}-icon.gif`}
                  alt={`Connect on ${socialInfoData.imageName}: Join OpulenceDeveloper's Network on Social Media`}
                  className="w-full h-full"
                  width={43.7}
                  height={43.7}
                />
              </div>{" "}
              {/* <p className="font-extralight ml-2">{socialInfoData.value}</p> */}
            </a>
          );
        })} </div>
      </div>
    </div>
  );
};

export default Socials;
