import Image from "next/image";

import handleWhatsAppClick from "@/helpers/whatsapp";

const sendMessageHandler = (name, type) => {
  handleWhatsAppClick(
    `Hello, I hope you're having a good day. Could you please provide me with the cost estimate for the ${name} ${type}?`
  );
};


const Products = (props) => {
  return (
    <div className="border-primary1 border-t-2 border-opacity-50 flex justify-center pt-10 mt-5 px-5 space-x- flex-wrap md:justify-evenly md:px-12 md:space-x-10 2xl:justify-start">
      {props.productInfo.map((productData, index) => (
        <div
          key={index}
          className="w-80 my-4 mx-2  transform hover:scale-105 transition-transform duration-300 md:my-10"
        >
          <div className="relative bg-primary1 flex justify-center rounded-tr-md rounded-tl-md">
            <Image
              src={productData.imageUrl}
              alt="product"
              loading="eager"
              priority
              className="h-320 w-piw1 -mb-6 z-0 rounded"
              width={540}
              height={388}
            />
          </div>
          <div className="px-2 py-5 space-y-2 mt-2 bg-primary2">
            <div className="flex justify-between text-white">
              <div className="space-y-2">
                <p className="font-semibold text-base">{productData.name}</p>
                <p className="text-sm">{productData.type}</p>
              </div>
              <a
                href={productData.link}
                target="_blank"
                className="flex items-center"
              >
                <p className="text-xs">Live Project</p>{" "}
                <div className="ml-1">
                  <Image
                    src="/images/icon/arrow-right.svg"
                    alt="arrow right icon"
                    loading="eager"
                    priority
                    className="h-4 w-4 transform -rotate-45"
                    width={16}
                    height={16}
                  />
                </div>
              </a>
            </div>
            <p className="text-base text-primary1 ">
              {productData.description}
            </p>
            <div className="flex items-center justify-between ">
              {" "}
              <button
                onClick={() => {
                  sendMessageHandler(productData.name, productData.type);
                }}
                className="bg-primary px-5 py-1 rounded-lg text-white shadow-custom-shadow2"
              >
                Buy
              </button>
              <p className="text-primary1">$ Negotiable</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
