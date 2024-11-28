import Image from "next/image";
import React from "react";

const ProjectsSection = () => {
  return (
    <section className=" h-[350vh] w-full flex flex-col items-center justify-between mb-[10vh] gap-[20vh] ">
      <div className=" border-y w-full border-white py-6 overflow-clip ">
        <h2 className=" text-[96px]  font-medium text-[#F2F2F2]  leading-none text-center tracking-tight whitespace-nowrap projects-heading">
          SELECTED PROJECTS - SELECTED PROJECTS - SELECTED PROJECTS - SELECTED
          PROJECTS
        </h2>
      </div>

      <div className=" flex-1 w-full flex justify-center items-center gap-[10%]">
        <Image
          src={"/project-img/timely.png"}
          height={1030}
          width={735}
          alt="Timely project preview"
          className=" h-full w-auto"
        />
        <div className="  flex w-1/4 gap-[70px]">
          <div className=" relative w-[5px] rounded-b-full   ">
            <div className=" absolute top-0 left-0 h-full bg-white w-[5px] project-line"></div>
            <div className="  h-[30px] w-[45px] bg-white"></div>
            <div className="  project-circle rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 "></div>
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
      <div className=" flex-1 w-full flex justify-center items-center gap-[10%]">
        <div className=" flex w-1/4 gap-[70px]">
          <div className=" relative w-[5px] rounded-b-full   ">
            <div className=" absolute top-0 left-0 h-full bg-white w-[5px] project-line"></div>
            <div className="  h-[30px] w-[45px] bg-white"></div>
            <div className="  project-circle rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 "></div>
          </div>
          <div>
            <h3 className=" text-2xl font-medium">Design System</h3>
            <p className=" mt-8 text-2xl text-secondary-foreground">
              {
                "Contributed to ZEE's design system team, focusing on essential components and ensuring consistency across all products, while bridging the gap between designers and developers. Collaborated on developing design tokens, components, and a visual library."
              }
            </p>
            <p className=" mt-[190px] text-2xl text-secondary-foreground">
              #design system #visual design #motion design #copywriting
              #interaction design
            </p>
          </div>
        </div>
        <Image
          src={"/project-img/zee5-design-system.png"}
          height={1030}
          width={735}
          alt="Timely project preview"
          className=" h-full w-auto"
        />
      </div>

      <div className=" flex-1 w-full flex justify-center items-center gap-[10%]">
        <Image
          src={"/project-img/timely.png"}
          height={1030}
          width={735}
          alt="Timely project preview"
          className=" h-full w-auto"
        />
        <div className=" flex w-1/4 gap-[70px]">
          <div className=" relative w-[5px] rounded-b-full   ">
            <div className=" absolute top-0 left-0 h-full bg-white w-[5px] project-line"></div>
            <div className="  h-[30px] w-[45px] bg-white"></div>
            <div className="  project-circle rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 "></div>
          </div>
          <div>
            <h3 className=" text-2xl font-medium">Timely</h3>
            <p className=" mt-8 text-2xl text-secondary-foreground">
              Timely is an productivity app designed to help collage students
              bridge their personal and academic goals, by increasing
              accountability of their activities towards their goals.
            </p>
            <p className=" mt-[190px] text-2xl text-secondary-foreground">
              #interaction design #visual design #app design #research
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
