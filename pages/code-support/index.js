import Socials from "@/components/UI/Socials";
import Image from "next/image";

const CodeSupport = () => {
  return (
    <section>
      {" "}
      <div className="flex space-x-2 items-center mt-8 pl-5 md:mt-20 md:pl-12 ">
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
        <p className="font-semibold text-xl md:text-3xl">Code Doctor</p>
      </div>
      <div className="pt-8 px-5 flex flex-col items-center md:px-12">
        <p className="text-center mb-8 text-primary1 leading-loose text-base md:text-lg">
          "Ah, it seems like you've encountered a stubborn bug within your code.
          But don't fret, there's no need to worry - I'm here to help! These
          sorts of challenges are right up my alley, and I'm confident that
          together we can work through it. Just consider me your trusty
          problem-solving companion. To get started, all you need to do is send
          me a message by clicking on the button below. Once you do that, I'll
          be able to dive into your code and take a closer look at what might be
          causing the issue. Remember, no problem is too big or too small for us
          to tackle together. Bugs can be a bit tricky to pin down sometimes,
          but with your insights into the context and my analytical
          capabilities, we can uncover the root cause of the problem. Whether
          it's a syntax error, a logic flaw, or something else entirely, I'm
          here to assist you in identifying it and suggesting a solution. So go
          ahead and click that button, and let's embark on a journey to debug
          and troubleshoot your code. By working together, we'll not only squash
          this bug but also enhance your coding skills in the process. Looking
          forward to our collaboration!"
        </p>
        <button className="shadow-custom-shadow2 flex items-center bg-black px-5 py-3 text-white rounded-lg">
         Reach out
          <Image
            src="/images/icon/arrow-right.svg"
            alt="arrow right icon"
            className="h-4 w-4 ml-2"
            width={16}
            height={16}
          />
        </button>
      </div>
    </section>
  );
};

export default CodeSupport;
