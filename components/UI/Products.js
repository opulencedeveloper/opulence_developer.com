import Image from "next/image";

const Products = (props) => {
  return (
    <div className="border-primary1 border-t-2 border-opacity-50 flex justify-center mt-5 px-5 md:px-12 space-x-0 flex-wrap md:justify-evenly 2xl:justify-start space-x-10">
      {props.pageContent.map((content) => (
        <div key={content.imageUrl} className="w-80 my-4 md:my-10">
          <div className="relative bg-primary1 flex justify-center rounded-tr-md rounded-tl-md">
            <Image
              src={content.imageUrl}
              alt="call a doctor logo"
              className="h-320 w-piw1 -mb-6 z-0 rounded"
              width={540}
              height={388}
            />
          </div>
          <div className="px-2 py-5 space-y-2 mt-2 bg-primary2">
            <div className="flex justify-between">
              <div className="space-y-2">
                <p className="font-semibold text-base">{content.name}</p>
                <p className="text-primary1 text-sm">{content.type}</p>
              </div>
              <div className="flex items-center">
                <p className="text-xs">Live Project</p>{" "}
                <div className="ml-1">
                  <Image
                    src="/images/icon/arrow-right.svg"
                    alt="arrow right icon"
                    className="h-4 w-4 transform -rotate-45"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>
            <p className="text-base">{content.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
