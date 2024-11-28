import Image from "next/image";
import React from "react";
import Arrow from "@/resources/arrow.svg";

const HeroSection = () => {
  return (
    <section className=" h-[80vh] w-full flex flex-col items-center justify-between py-[90px] ">
      <div className=" w-full flex items-center flex-col">
        <div className="  text-[92px] font-medium leading-[111px] tracking-[-3px] hero">
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
        <div className=" flex flex-col  mt-12 h-24 font-medium text-3xl leading-[44px] relative left-[15%]">
          <p>Designer at ZEE. Based in Bengaluru.</p>
          <p className=" text-foreground/50">Prev. Design @ IIT Guwahati</p>
        </div>
      </div>
      <p className="animate-bounce ">
        <Image src={Arrow} />
      </p>
    </section>
  );
};

export default HeroSection;
