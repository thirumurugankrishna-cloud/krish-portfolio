import Navbar from "@/components/navbar";
import Image from "next/image";

import Arrow from "@/resources/arrow.svg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

      <div className=" w-full flex flex-col bg-grid-pattern  ">
        {/* <div className=" sticky top-0  left-0 right-0 -z-10"> */}
        {/* <div className="sticky top-0 left-0 right-0 z-10 ">
          <div className="absolute bg-grid-pattern w-full h-screen"></div>
        </div> */}
        {/* </div> */}
        <div className=" h-[155px] flex items-center justify-center">
          <h2 className="text-[128px] text-center">SELECTED PROJECTS</h2>
        </div>

        <div className=" flex items-center w-full justify-center mt-[286px] gap-[138px]">
          <Image
            src={"/project-img/timely.png"}
            height={1030}
            width={735}
            alt="Timely project preview"
          />
          <div className=" w-[598px] flex gap-[70px]">
            <div className=" w-[5px] bg-white border relative ml-[9px] ">
              <div className=" w-[45px] h-[30px] bg-white"></div>
              <div className="  project-circle rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div>
              <h3 className=" text-2xl font-medium">
                {"Immersive Interfaces for Children's Education"}
              </h3>
              <p className=" mt-8 text-2xl text-secondary-foreground">
                Designed interactive educational games to enhance student
                engagement and learning outcomes.Researched game mechanics,
                developed educational content, and aligned games with curriculum
                objectives. Aimed to enhance the virtual learning experience for
                students.
              </p>
              <p className=" mt-[190px] text-2xl text-secondary-foreground">
                #immersive design #extended reality #interaction design #game
                design
              </p>
            </div>
          </div>
        </div>

        <div className=" flex items-center w-full justify-center mt-[296px] gap-[138px]">
          <div className=" w-[598px] flex gap-[70px]">
            <div>
              <h3 className=" text-2xl font-medium">{"Design System"}</h3>
              <p className=" mt-8 text-2xl text-secondary-foreground">
                {
                  "Contributed to ZEE's design system team, focusing on essential components and ensuring consistency across all products, while bridging the gap between designers and developers. Collaborated on developing design tokens, components, and a visual library."
                }
              </p>
              <p className=" mt-[190px] text-2xl text-secondary-foreground ">
                #immersive design #extended reality #interaction design #game
                design
              </p>
            </div>

            <div className=" w-[5px] bg-white border relative mr-[9px] ">
              <div className=" w-[45px] h-[30px] bg-white"></div>
              <div className=" project-circle rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"></div>
            </div>
          </div>

          <Image
            src={"/project-img/zee5-design-system.png"}
            height={1030}
            width={735}
            alt="Timely project preview"
          />
        </div>

        <div className=" flex items-center w-full justify-center mt-[296px] gap-[138px]">
          <Image
            src={"/project-img/timely.png"}
            height={1030}
            width={735}
            alt="Timely project preview"
          />

          <div className=" w-[598px] flex gap-[70px]">
            <div className=" w-[5px] bg-white border relative ml-[9px] ">
              <div className=" w-[45px] h-[30px] bg-white"></div>
              <div className=" project-circle rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div>
              <h3 className=" text-2xl font-medium">{"Timely"}</h3>
              <p className=" mt-8 text-2xl text-secondary-foreground">
                Timely is an productivity app designed to help collage students
                bridge their personal and academic goals, by increasing
                accountability of their activities towards their goals.
              </p>
              <p className=" mt-[190px] text-2xl text-secondary-foreground ">
                #interaction design #visual design #app design #research
              </p>
            </div>
          </div>
        </div>
      </div>

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
