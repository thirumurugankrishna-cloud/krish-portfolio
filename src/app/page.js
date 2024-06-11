import Navbar from "@/components/navbar";
import { ThemeSwitch } from "@/components/theme-switch";
import Image from "next/image";

import Arrow from "@/resources/arrow.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <Navbar />
      <section className=" h-[calc(100vh-200px)] w-full flex flex-col items-center justify-between py-[90px] ">
        <div className=" w-full flex items-center flex-col">
          <div className=" group text-[92px] font-medium leading-[111px] tracking-[-3px] hero">
            <h3>
              I craft pr
              <span className=" italic group-hover:not-italic">o</span>ducts,
            </h3>
            <h3>
              interacti<span className=" group-hover:not-italic italic">o</span>
              ns & <span className="italic font-normal stories">stories.</span>
            </h3>
          </div>
          <div className=" flex flex-col  mt-12 h-24 font-medium text-3xl leading-[44px] relative left-[15%]">
            <p>Designer at ZEE. Based in Bengaluru.</p>
            <p className=" text-foreground/50">Prev. Design @ IIT Guwahati</p>
          </div>
        </div>
        <p className=" ">
          <Image src={Arrow} />
        </p>
      </section>

      {/* <h1 className=" text-foreground font-semibold text-5xl">
        Krishna, the bully
      </h1> */}
    </main>
  );
}
