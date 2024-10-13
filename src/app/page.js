import Navbar from "@/components/navbar";
import Image from "next/image";

import Arrow from "@/resources/arrow.svg";
import Zee5Pic from "@/resources/Zee5Pic.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <Navbar />
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

      <div className=" h-[100vh] w-full bg-grid-pattern flex flex-col">
        <h2 className="text-[128px] text-center">SELECTED PROJECTS</h2>
        <div className=" flex-1 flex gap-8 justify-center items-center ">
          <Image src={Zee5Pic} />
        </div>
      </div>

      <div className=" h-[100vh] w-full bg-grid-pattern"></div>

      {/* <h1 className=" text-foreground font-semibold text-5xl">
        Krishna, the bully
      </h1> */}
    </main>
  );
}
