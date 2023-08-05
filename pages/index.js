import Onboarding from "@/components/home/Onboarding";
import SectionOne from "@/components/home/SectionOne";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";
import { useEffect, useLayoutEffect } from "react";

let isHomeScreenVisited;
export default function Home() {
  // useLayoutEffect(() => {
  //   console.log("in the layout effect")
  //   isHomeScreenVisited=  localStorage.getItem("isHomeScreenVisited");
  // }, [])
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);

  console.log("isHomeScreenVisited");
  return (
    <section>
      <Onboarding />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </section>
  );
}
