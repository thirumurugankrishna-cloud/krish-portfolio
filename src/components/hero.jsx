import Image from "next/image";
import React from "react";
import Arrow from "@/resources/arrow.svg";

const HeroSection = () => {
  return (
    <section className=" h-[80vh] w-full flex flex-col items-center justify-between py-[90px] ">
      <div className=" w-full flex items-center flex-col">
        <div className="  text-[64px] 2xl:text-[92px] leading-none font-medium tracking-[-3px] hero">
          <h3 className="w-fit ">
            I craft pr
            <span className=" italic hover:not-italic relative -left-2 hover:left-0 inline-block">
              o
            </span>
            ducts,
          </h3>
          <h3 className="">
            interacti
            <span className=" italic hover:not-italic relative -left-2 hover:left-0 inline-block">
              o
            </span>
            ns & <span className="italic font-normal stories">stories.</span>
          </h3>
        </div>
        <div className=" flex flex-col  mt-12 h-24 font-medium text-2xl 2xl:text-3xl leading-tight relative left-[15%]">
          <p>Designer at Clootrack. Based in Bengaluru.</p>
          <p className=" text-foreground/50">Prev. Design @ IIT Guwahati</p>
        </div>
      </div>
      <p className="animate-bounce ">
        <Image src={Arrow} className=" w-8 h-12 2xl:w-12 2xl:h-[72px] " />
      </p>
    </section>
  );
};

export default HeroSection;
