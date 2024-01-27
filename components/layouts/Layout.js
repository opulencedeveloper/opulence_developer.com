import Image from "next/image";

import MainNavigation from "./Main-Navigation.js";

import heroImage from "../../public//images/hero.gif";

const Layout = (props) => {
  return (
    <>
      {" "}
      <div className="fixed z-0 bottom-0 right-0 left-0 top-0 opacity-15 z-20 bg-primary h-screen w-full">
        {" "}
        <Image
          src={heroImage}
          alt="Dynamic Horizon: The Visual Canvas of OpulenceDeveloper's Portfolio"
          // style={{ filter: "brightness(0.4)" }}
          className="h-full w-full object-cover"
          priority
          loading="eager"
        />{" "}
      </div>
      <div className="relative">
        <MainNavigation />
        <main className="relative z-40">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
