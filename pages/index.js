import SectionOne from "@/components/home/SectionOne";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";

let isHomeScreenVisited;
export default function Home() {
  return (
    <>
    {/* <Head>
        <title>
        Janet Memorial Hospital - Exceptional Healthcare Services.
        </title>
        <meta
          name="description"
          content="Discover comprehensive healthcare services at Janet Memorial Hospital. We provide state-of-the-art medical facilities, expert physicians, and compassionate care to improve your well-being. We are committed to providing exceptional healthcare services tailored to meet the needs of our community, we strive to be the leading healthcare institution in the region Contact us today."
        />
        <meta
          property="og:title"
          content="Janet Memorial Hospital - Exceptional Healthcare Services"
        />
        <meta
          property="og:description"
          content="Discover comprehensive healthcare services at Janet Memorial Hospital. We provide state-of-the-art medical facilities, expert physicians, and compassionate care to improve your well-being. We are committed to providing exceptional healthcare services tailored to meet the needs of our community, we strive to be the leading healthcare institution in the region Contact us today."
        />
        <meta
          property="og:image"
          content="https://janetmemorialhospital.com/janet-hospital-images/logo/janet-memorial-hospital-logo.png"
        />
        <meta
          property="og:url"
          content="https://janetmemorialhospital.com"
        />
        <meta property="og:type" content="website" />
      </Head> */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
}
