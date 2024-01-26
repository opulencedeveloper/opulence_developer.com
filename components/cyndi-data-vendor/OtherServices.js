import handleWhatsAppClick from "@/helpers/whatsapp";
import Image from "next/image";

import starTimesLogo from "../../public/images/logo/star-times-logo.jpg";

const OtherServices = ({style}) => {
    return <div
    className={`${style} flex-col relative top-0 shadow-2xl transform hover:scale-105 transition-transform duration-100 rounded-lg bg-black-50 py-3 mb-10 max-[584px]:w-full max-[918px]:w-[47%] w-[28.3%]`}
  >
    <p className="text-[27px] mt-3 mb-2 text-center font-medium max-[1200px]:text-[23px]">
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
      <button hand
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
}

export default OtherServices;