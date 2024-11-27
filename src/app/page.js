import Navbar from "@/components/navbar";
import Image from "next/image";

import Arrow from "@/resources/arrow.svg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProjectsSection from "@/components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
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

      <ProjectsSection />

      <section className="   mt-[150px] w-[80vw]">
        <h2 className=" text-[48px] w-full border-b border-white pb-[26px]">
          OTHER PROJECTS
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className=" text-[40px]">
              Designing for the vision impaired
            </AccordionTrigger>
            <AccordionContent className=" flex gap-12 py-8">
              <Image
                src={"/project-img/accordion-1.png"}
                height={257}
                width={376}
                alt="Designing for the vision impaired"
              />
              <p className=" text-2xl text-[#BFBFBF]">
                This project focuses on helping blind users perceive different
                currencies. The aim is to build a tangible product which can
                help them detect different currencies. This was done as a part
                of the course - Tangible User Interfaces
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className=" text-[40px]">
              File Manager
            </AccordionTrigger>
            <AccordionContent className=" flex gap-12 py-8">
              <Image
                src={"/project-img/accordion-1.png"}
                height={257}
                width={376}
                alt="Designing for the vision impaired"
              />
              <p className=" text-2xl text-[BFBFBF]">
                This project focuses on helping blind users perceive different
                currencies. The aim is to build a tangible product which can
                help them detect different currencies. This was done as a part
                of the course - Tangible User Interfaces
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className=" text-[40px]">
              Agrivison4U Website
            </AccordionTrigger>
            <AccordionContent className=" flex gap-12 py-8">
              <Image
                src={"/project-img/accordion-1.png"}
                height={257}
                width={376}
                alt="Designing for the vision impaired"
              />
              <p className=" text-2xl text-[BFBFBF]">
                This project focuses on helping blind users perceive different
                currencies. The aim is to build a tangible product which can
                help them detect different currencies. This was done as a part
                of the course - Tangible User Interfaces
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className=" mt-[100px] h-screen"></section>

      <footer className=" bg-[#101010] border-t-2 border-[#808080] h-[50vh] w-full flex justify-around items-center  ">
        <div className=" w-[492px] space-y-[22px]">
          <p className=" text-[40px] text-center">
            {"The Best is yet to come. Let's create it together"}
          </p>
          <p className=" italic text-center text-sm tracking-wider">
            Drop me an email
          </p>
          <p className=" text-sm text-center">thirumurugankrishna@gmail.com</p>
        </div>
        <div className=" flex gap-[88px]">
          <div className=" space-y-8">
            <h4 className=" text-[#808080]">NAVIGATION</h4>
            <p className=" text-2xl ">Work</p>
            <p className=" text-2xl ">About</p>
          </div>
          <div className=" space-y-8">
            <h4 className=" text-[#808080]">PROJECTS</h4>
            <p className=" text-2xl ">Immersive Education</p>
            <p className=" text-2xl ">Clootrack</p>
            <p className=" text-2xl ">ZEE5 Design System</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
