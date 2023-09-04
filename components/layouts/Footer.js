import { useRouter } from "next/router";

import Socials from "../UI/Socials";

const codingQuotes = [
  {
    link: "/",
    quotes: "1's and 0's do not lie",
    cite: "https://opulencedeveloper.com",
  },
  {
    link: "/shop",
    quotes: "Programming is not about typing, it's about thinking",
    cite: "https://dev.to/cleancodestudio/10-insightful-programming-wisdom-quotes-18ba",
  },
  {
    link: "/projects",
    quotes:
      "The first step of any project is to grossly underestimate its complexity and difficulty",
    cite: "https://dev.to/cleancodestudio/10-insightful-programming-wisdom-quotes-18ba",
  }, 
  {
    link: "/code-support",
    quotes:
      "Debugging is like being the detective in a crime movie where you are also the murderer. lol",
    cite: "https://dev.to/cleancodestudio/10-insightful-programming-wisdom-quotes-18ba",
  },
  {
    link: "/about",
    quotes:
      "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    cite: "https://techvify-software.com/35-best-coding-programming-quotes/#:~:text=Coding%20Quotes%201%20Coding%20like%20poetry%20should%20be,course%2C%20bad%20code%20can%20be%20cleaned%20up.%20",
  },
];

const Footer = (props) => {
  const router = useRouter();
  const activeLink = router.pathname;
  return (
    <footer className="relative z-40">
      <div className="px-5 md:px-12">
        <Socials />

        {codingQuotes.map((codingQuotesData, index) => (
          <p key={index} className="leading-loose pb-10 italic text-2xl font-extralight text-center md:text-3xl">
            {codingQuotesData.link === activeLink && (
              <q cite={codingQuotesData.cite} >
                {codingQuotesData.quotes}
              </q>
            )}
          </p>
        ))}
      </div>
      <div className=" py-10 bg-black space-y-2 text-center">
        <p>© 2023 Amobi Victor Chukwuka. All Righs Reserved</p>
        <a href="mailto:conatct@opulencedeveloper.com" className="underline">
        victorkudos@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
