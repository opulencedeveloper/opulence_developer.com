import Image from "next/image";

const CodeSupport = () => {
    return <div className="flex space-x-2 items-center mt-8 pl-5 md:mt-20 md:pl-12 ">
    {" "}
    <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
      {" "}
      <Image
        src="/images/icon/icon.gif"
        alt="call a doctor logo"
        className="h-full w-full bg-transparent"
        width={40}
        height={40}
      />
    </div>
    <p className="font-semibold text-xl md:text-3xl">
      Code Doctor
    </p>
  </div>
  {/* <div className="h- rounded-full overflow-hidden">
        
        <Image
    src="/images/icon/solving-code-error-icon.gif"
    alt="solving-code-error-icon"
    className="h-90 w-90 bg-transparent"
    width={1500}
    height={1500}
  /></div> */} 
}

export default CodeSupport;