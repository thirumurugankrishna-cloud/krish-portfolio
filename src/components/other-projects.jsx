import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const OtherProjectsSection = () => {
  return (
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
              currencies. The aim is to build a tangible product which can help
              them detect different currencies. This was done as a part of the
              course - Tangible User Interfaces
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
              currencies. The aim is to build a tangible product which can help
              them detect different currencies. This was done as a part of the
              course - Tangible User Interfaces
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
              currencies. The aim is to build a tangible product which can help
              them detect different currencies. This was done as a part of the
              course - Tangible User Interfaces
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default OtherProjectsSection;
