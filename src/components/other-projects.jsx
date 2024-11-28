import React from "react";
import Image from "next/image";

const OtherProjectsSection = () => {
  return (
    <section className=" h-[50vh] w-full px-[100px]">
      <h2 className=" text-3xl 2xl:text-[48px] w-full border-b border-white leading-normal ">
        OTHER PROJECTS
      </h2>

      <div className=" flex mt-12 justify-center gap-16">
        <div className=" relative group">
          <Image
            src={"/project-img/other-project-1.png"}
            height={380}
            width={528}
            alt="Other project 1 preview"
          />
          <div className=" absolute inset-0 opacity-0 pointer-events-none group-hover:opacity-100  group-hover:bg-background/80 z-10 transition-all duration-200 flex flex-col p-4  gap-3">
            <h3 className=" font-medium text-2xl 2xl:text-[28px]">
              Designing for the vision impaired
            </h3>
            <p className="  2xl:text-lg text-[#bfbfbf]">
              This project focuses on helping blind users perceive different
              currencies. The aim is to build a tangible product which can help
              them detect different currencies.
            </p>
          </div>
        </div>

        <div className=" relative group">
          <Image
            src={"/project-img/other-project-2.png"}
            height={380}
            width={528}
            alt="Other project 2 preview"
          />
          <div className=" absolute inset-0 opacity-0 pointer-events-none group-hover:opacity-100  group-hover:bg-background/80 z-10 transition-all duration-200 flex flex-col p-4  gap-3">
            <h3 className=" font-medium text-2xl 2xl:text-[28px]">
              File Manager
            </h3>
            <p className="  2xl:text-lg text-[#bfbfbf]">
              A unified platform for easy file transfer, organization, and
              sharing with smart cleanup and quick cloud access
            </p>
          </div>
        </div>

        <div className=" relative group">
          <Image
            src={"/project-img/other-project-3.png"}
            height={380}
            width={528}
            alt="Other project 3 preview"
          />
          <div className=" absolute inset-0 opacity-0 pointer-events-none group-hover:opacity-100  group-hover:bg-background/80 z-10 transition-all duration-200 flex flex-col p-4  gap-3">
            <h3 className=" font-medium text-2xl 2xl:text-[28px]">
              Agrivison4U Website
            </h3>
            <p className="  2xl:text-lg text-[#bfbfbf]">
              Redesigned the website with intuitive UI elements and a tailored
              UI kit for a seamless, user-focused experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProjectsSection;
