import { useEffect, useState } from "react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import "@/styles/globals.css";
import Layout from "@/components/layouts/Layout";
import Footer from "@/components/layouts/Footer";
import Onboarding from "@/components/home/Onboarding";


export default function App({ Component, pageProps }) {
  const [isOnboarding, setIsOnBoarding] = useState(true); 
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnBoarding(false);
    }, 6700);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <main className={`${poppins.variable} font-poppins max-w-[120rem] mx-auto`}>
      {isOnboarding && <Onboarding />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </main>
  );
}
