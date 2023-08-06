import Image from "next/image";
import MainNavigation from "./Main-Navigation.js";
import { useRouter } from "next/router.js";
import { useEffect, useLayoutEffect } from "react";
//import Footer from "@/components/layout/footer";

const Layout = (props) => {
  const router = useRouter();
  const activeLink = router.pathname;
   useEffect(() => { 
    console.log("in the effect layoutt")
    
  }, []);
  return (
    <div className="relative">
    {activeLink === "/" && <div className="absolute bottom-0 right-0 left-0 top-0 z-20 bg-gradient-to-t from-transparent h-screen w-full"> <Image
            src="/images/11.png"
            alt="Newspaper"
            className="h-full w-full object-cover opacity-60 "
            priority
            loading="eager"
            width={600}
            height={400}
          /> </div>}
          
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
