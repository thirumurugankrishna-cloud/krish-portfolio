import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  return (
    <section
      className=" h-[350vh] w-full flex flex-col items-center justify-between mb-[10vh] gap-[20vh] "
      id="work"
    >
      <div className=" border-y w-full border-white py-6 overflow-clip ">
        <h2 className=" text-[64px] 2xl:text-[96px]  font-medium text-[#F2F2F2]  leading-none text-center tracking-tight whitespace-nowrap projects-heading">
          SELECTED PROJECTS - SELECTED PROJECTS - SELECTED PROJECTS - SELECTED
          PROJECTS
        </h2>
      </div>

      <div className=" flex-1 w-full flex justify-center items-center gap-[10%]">
        <div className=" h-fit w-fit relative group">
          <Image
            src={"/project-img/btp.png"}
            height={1030}
            width={735}
            alt="Timely project preview"
            className=" h-[80vh] w-auto"
          />

          <div className=" absolute image-overlay group-hover:backdrop-blur-[1px] opacity-0 group-hover:opacity-100 z-10 inset-0 transition-all duration-200 ease-in-out grid place-items-center">
            <Button
              variant={"link"}
              className=" text-foreground cursor-pointer text-xl "
              asChild
            >
              <a
                href={
                  "https://www.behance.net/gallery/154683703/Integrating-Game-Based-Learning-In-Virtual-Ed"
                }
                className=" opacity-0 group-hover:opacity-100"
                target="_blank"
              >
                View Project
              </a>
            </Button>
          </div>
        </div>

        <div className=" flex w-1/4 gap-[70px] h-4/5 2xl:h-3/5">
          <div className=" relative w-[5px] rounded-b-full   ">
            <div className=" absolute top-0 left-0 h-full bg-white w-[5px] project-line"></div>
            <div className="  h-[30px] w-[45px] bg-white project-rect"></div>
            <div className="  project-circle rounded-full bg-white absolute -bottom-1 left-1/2 -translate-x-1/2 "></div>
          </div>

          <div>
            <div className=" flex justify-between flex-col h-full">
              <div className=" space-y-2 w-full  overflow-clip">
                <h3 className=" text-2xl 2xl:text-3xl font-medium  project-text">
                  {"Immersive Interfaces for Children's Education"}
                </h3>
                <p className=" mt-8 text-secondary-foreground 2xl:text-xl project-text">
                  Designed interactive educational games to enhance student
                  engagement and learning outcomes.Researched game mechanics,
                  developed educational content, and aligned games with
                  curriculum objectives. Aimed to enhance the virtual learning
                  experience for students.
                </p>
              </div>
              <p className="  text-secondary-foreground 2xl:text-xl">
                #immersive design #extended reality #interaction design #game
                design
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-1 w-full flex justify-center items-center gap-[10%]">
        <div className=" flex w-1/4 gap-[70px] h-4/5 2xl:h-3/5">
          <div className=" relative w-[5px] rounded-b-full   ">
            <div className=" absolute top-0 left-0 h-full bg-white w-[5px] project-line"></div>
            <div className="  h-[30px] w-[45px] bg-white  project-rect"></div>
            <div className="  project-circle rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 "></div>
          </div>
          <div>
            <div className=" flex justify-between flex-col h-full">
              <div className=" space-y-2 w-full overflow-clip">
                <h3 className=" text-2xl 2xl:text-3xl font-medium  project-text">
                  Zee5 Design System
                </h3>
                <p className=" mt-8 text-secondary-foreground 2xl:text-xl  project-text">
                  {
                    "Contributed to ZEE's design system team, focusing on essential components and ensuring consistency across all products, while bridging the gap between designers and developers. Collaborated on developing design tokens, components, and a visual library."
                  }
                </p>
              </div>
              <p className="  text-secondary-foreground 2xl:text-xl">
                #design system #visual design #motion design #copywriting
                #interaction design
              </p>
            </div>
          </div>
        </div>

        <div className=" h-fit w-fit relative group">
          <Image
            src={"/project-img/zee5-design-system.png"}
            height={1030}
            width={735}
            alt="Timely project preview"
            className=" h-[80vh] w-auto"
          />
          <div className=" absolute image-overlay group-hover:backdrop-blur-[1px] opacity-0 group-hover:opacity-100 z-10 inset-0 transition-all duration-200 ease-in-out grid place-items-center">
            <Button
              variant={"link"}
              className=" text-foreground cursor-pointer text-xl "
              asChild
            >
              <a
                href={
                  "https://www.behance.net/gallery/195201637/ZEE-Design-System"
                }
                className=" opacity-0 group-hover:opacity-100"
                target="_blank"
              >
                View Project
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className=" flex-1 w-full flex justify-center items-center gap-[10%]">
        <div className=" h-fit w-fit relative group">
          <Image
            src={"/project-img/timely.png"}
            height={1030}
            width={735}
            alt="Timely project preview"
            className=" h-[80vh] w-auto"
          />

          <div className=" absolute image-overlay group-hover:backdrop-blur-[1px] opacity-0 group-hover:opacity-100 z-10 inset-0 transition-all duration-200 ease-in-out grid place-items-center">
            <Button
              variant={"link"}
              className=" text-foreground cursor-pointer text-xl "
              asChild
            >
              <a
                href={
                  "https://www.behance.net/gallery/154680105/Timely-An-app-to-make-college-students-accountable"
                }
                className=" opacity-0 group-hover:opacity-100"
                target="_blank"
              >
                View Project
              </a>
            </Button>
          </div>
        </div>
        <div className=" flex w-1/4 gap-[70px] h-4/5 2xl:h-3/5">
          <div className=" relative w-[5px] rounded-b-full   ">
            <div className=" absolute top-0 left-0 h-full bg-white w-[5px] project-line"></div>
            <div className="  h-[30px] w-[45px] bg-white  project-rect"></div>
            <div className="  project-circle rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 "></div>
          </div>

          <div>
            <div className=" flex justify-between flex-col h-full">
              <div className=" space-y-2 w-full  overflow-clip">
                <h3 className=" text-2xl 2xl:text-3xl font-medium  project-text">
                  Timely
                </h3>
                <p className=" mt-8 text-secondary-foreground 2xl:text-xl project-text">
                  Timely is an productivity app designed to help collage
                  students bridge their personal and academic goals, by
                  increasing accountability of their activities towards their
                  goals.
                </p>
              </div>
              <p className="  text-secondary-foreground 2xl:text-xl">
                #interaction design #visual design #app design #research
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
