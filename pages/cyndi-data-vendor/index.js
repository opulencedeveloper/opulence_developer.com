import Image from "next/image";
import Head from "next/head";

import mtnLogo from "../../public/images/logo/mtn-logo.jpg";
import airtelLogo from "../../public/images/logo/airtel-logo.jpg";
import etisalatLogo from "../../public/images/logo/etisalat-logo.jpg";
import gloLogo from "../../public/images/logo/glo-logo.jpg";

import goTVLogo from "../../public/images/logo/gotv-logo.jpg";
import dsTVLogo from "../../public/images/logo/dstv-logo.jpg";
import starTimesLogo from "../../public/images/logo/star-times-logo.jpg";
import handleWhatsAppClick from "@/helpers/whatsapp";

const CyndiDataVendor = () => {
  const listOfMtnDataSub = [
    {
      logo: mtnLogo,
      type: "MTN",
      companyColor: "bg-yellow-400",
      companyBorderColor: "border-yellow-400",
      dataInfo: [
        { data: "500MB", price: "250" },
        { data: "1GB", price: "350" },
        { data: "2GB", price: "700" },
        { data: "3GB", price: "1000" },
        { data: "4GB", price: "1400" },
        { data: "5GB", price: "1600" },
        { data: "10GB", price: "3000" },
        { data: "20GB", price: "6000" },
      ],
    },

    {
      logo: airtelLogo,
      type: "Airtel",
      companyColor: "bg-red-500",
      companyBorderColor: "border-red-500",
      dataInfo: [
        { data: "500MB", price: "250" },
        { data: "1GB", price: "350" },
        { data: "2GB", price: "650" },
        { data: "3GB", price: "950" },
        { data: "4GB", price: "1300" },
        { data: "5GB", price: "1500" },
        { data: "10GB", price: "2800" },
        { data: "20GB", price: "5600" },
      ],
    },
    {
      logo: etisalatLogo,
      type: "9Mobile",
      companyColor: "bg-green-500",
      companyBorderColor: "border-green-500",
      dataInfo: [
        { data: "500MB", price: "200" },
        { data: "1GB", price: "300" },
        { data: "2GB", price: "600" },
        { data: "3GB", price: "900" },
        { data: "4GB", price: "1200" },
        { data: "5GB", price: "1400" },
        { data: "10GB", price: "2700" },
        { data: "20GB", price: "5400" },
      ],
    },
    {
      logo: gloLogo,
      type: "Glo",
      companyColor: "bg-green-950",
      companyBorderColor: "border-green-950",
      dataInfo: [
        { data: "500MB", price: "250" },
        { data: "1GB", price: "350" },
        { data: "2GB", price: "700" },
        { data: "3GB", price: "1000" },
        { data: "4GB", price: "1400" },
        { data: "5GB", price: "1600" },
        { data: "10GB", price: "3000" },
        { data: "20GB", price: "6000" },
      ],
    },

    {
      logo: dsTVLogo,
      type: "DSTV",
      companyColor: "bg-blue-400",
      companyBorderColor: "border-blue-400",
      dataInfo: [
        { data: "Padi", price: "3,200" },
        { data: "Yanga", price: "4,500" },
        { data: "XtraView", price: "4,300" },
        { data: "Access Fees", price: "4,300" },
        { data: "HDPVR Access Service", price: "4,300" },
        { data: "Confam", price: "7,600" },
        { data: "Compact+", price: "20,000" },
        { data: "Compact", price: "12,800" },
        { data: "Premium", price: "29,800" },
      ],
    },

    {
      logo: goTVLogo,
      type: "GoTv",
      companyColor: "bg-green-400",
      companyBorderColor: "border-green-400",
      dataInfo: [
        { data: "Smallie", price: "1,500" },
        { data: "Jinja", price: "2,900" },
        { data: "Jolli", price: "4,200" },
        { data: "Max", price: "5,900" },
        { data: "Supa", price: "7,800" },
        { data: "Supa+", price: "12,800" },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>Cyndi Data Vendor: Data, DSTV and GOTV Subscriptions</title>
        <meta
          name="description"
          content="Cyndi Data Vendor: Your Source for Data, DSTV and GOTV Subscriptions. Get high-speed data plans, DSTV, and GOTV subscriptions conveniently online. Affordable prices and reliable service."
        />
        <meta
          name="keywords"
          content="Cyndi Data Vendor, data subscriptions, DSTV subscriptions, GOTV subscriptions, high-speed data plans, online subscriptions, affordable subscriptions, reliable service"
        />
        <meta name="author" content="Amobi Victor Chukwuka" />
        <meta
          property="og:title"
          content="Cyndi Data Vendor: Data, DSTV and GOTV Subscriptions"
        />
        <meta
          property="og:description"
          content="Cyndi Data Vendor: Your Source for Data, DSTV and GOTV Subscriptions. Get high-speed data plans, DSTV, and GOTV subscriptions conveniently online. Affordable prices and reliable service."
        />
         <meta 
          property="og:image"
          content="https://opulencedeveloper.com/images/cynthia-data-vendor-image.png"
        />
      </Head>

      <section className="relative z-20 mt-5 py-10 px-5 md:px-8">
        <h1 className="text-center mb-5 animate-shimmering-silver-text leading-none text-2xl font-bold md:text-4xl">
          Cyndi Data Vendor
        </h1>
        <p className="text-center mb-10 animate-float font-light text-sm md:text-base">
          All subscription plan is valid for 30 days
        </p>
        <div className="flex justify-between flex-wrap max-[918px]:gap-[6%] gap-[7.5%]">
          {" "}
          {listOfMtnDataSub.map((subInfo, index) => (
            <div
              key={index}
              className={`border ${subInfo.companyBorderColor} flex flex-col shadow-2xl transform hover:scale-105 transition-transform duration-100 rounded-lg bg-black-50 py-3 mb-10 max-[584px]:w-full max-[918px]:w-[47%] w-[28.3%]`}
            >
              <div className="h-20 rounded-full overflow-hidden mt-3 mb-5 w-20 mx-auto">
                <Image
                  src={subInfo.logo}
                  alt="data subscription plan"
                  className="w-full"
                  priority
                  loading="eager"
                />
              </div>
           <div className="flex-1 flex flex-col justify-between ">   <div className="w-full px-5 space-y-3">
                {subInfo.dataInfo.map((subInfo, index) => (
                  <div
                    key={index}
                    className="flex justify-between w-full bg-black/70 py-1 px-3"
                  >
                    <p>{subInfo.data}</p>{" "}
                    <p>
                      <span className="text-sm mr-1">₦</span>
                      {subInfo.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center my-4">
                <button
                  onClick={() =>
                    handleWhatsAppClick(
                      `Hello! Cyndi Data Vendor, I want to purchase subscription for ${subInfo.type}`,
                      "+2347064891660"
                    )
                  }
                  className={`rounded-sm ${subInfo.companyColor} h-10 px-3`}
                >
                  Contact Vendor
                </button>
              </div></div> 
            </div>
          ))}
          <div
            className={`flex flex-col shadow-2xl transform hover:scale-105 transition-transform duration-100 rounded-lg bg-black-50 py-3 mb-10 max-[584px]:w-full max-[918px]:w-[47%] w-[28.3%]`}
          >
            <p className="text-[27px] mt-3 mb-2 text-center font-medium">
              OTHER SERVICES
            </p>
            <div className="w-full px-5 space-y-3 text-center">
              <div className="h-20 rounded-full overflow-hidden mb-5 w-20 mx-auto">
                <Image
                  src={starTimesLogo}
                  alt="Star Times subscription"
                  className="w-full"
                  priority
                  loading="eager"
                />
              </div>
              <p className="w-full bg-black/70  py-1 px-3">
                StarTimes Subscription
              </p>
            </div>
            <div className="flex justify-center my-4">
              <button
               onClick={() =>
                handleWhatsAppClick(
                  `Hello! Cyndi Data Vendor, I want to purchase subscription for StarTimes`,
                  "+2347064891660"
                )}
               className={`rounded-sm bg-black/70  h-10 px-3`}>
                Contact Vendor
              </button>
            </div>
          </div>
        </div>

        <p className="animate-float text-center mt-10 underline">We are TRUSTED, REALIABLE & LEGIT</p>
      </section>
      {/* <SectionOne /> */}
    </>
  );
};

export default CyndiDataVendor;
