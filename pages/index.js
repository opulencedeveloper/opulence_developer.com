import Onboarding from "@/components/UI/Onboarding";
import SectionOne from "@/components/home/SectionOne";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";
import { useEffect, useLayoutEffect } from "react";

let isHomeScreenVisited;
export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
}
