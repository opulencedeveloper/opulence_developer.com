import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import MainNavigation from "./Main-Navigation.js";

import heroImage from "@/public/assets/images/hero.png";

const Layout = (props) => {
  return (
    <>
      {" "}
      <div className="fixed z-0 bottom-0 right-0 left-0 top-0 z-20 bg-primary h-screen w-full">
        {" "}
        <Image
          src={heroImage}
          alt="Dynamic Horizon: The Visual Canvas of OpulenceDeveloper's Portfolio"
          // style={{ filter: "brightness(0.1)" }}
          className="h-full w-full object-cover opacity-10"
          priority
          loading="eager"
        />{" "}
      </div>
      <div className="relative text-white">
        <MainNavigation />
        <main className={`relative z-30 ${poppins.variable} font-poppins max-w-[120rem] mx-auto`}>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
