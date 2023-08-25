import Image from "next/image";

import MainNavigation from "./Main-Navigation.js";


const Layout = (props) => {
  return (
    <>
      {" "}
      <div className="fixed z-0 bottom-0 right-0 left-0 top-0 z-20 bg-gradient-to-t from-transparent h-screen w-full">
        {" "}
        <Image
          src="/images/hero.png"
          alt="Dynamic Horizon: The Visual Canvas of OpulenceDeveloper's Portfolio"
          style={{ filter: "brightness(0.2)" }}
          className="h-full w-full object-cover"
          priority
          loading="eager"
          width={600}
          height={400}
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
