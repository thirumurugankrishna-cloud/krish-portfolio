import Image from "next/image";
import React from "react";

const ProjectsSection = () => {
  return (
    <section className=" w-full flex flex-col relative h-[300vh]  ">
      {/* <div className=" sticky top-0 left-0 right-0 h-screen project-background border-t border-[#424242] ">
        {Array.from(Array(130).keys()).map((_, index) => (
          <div
            key={index}
            className=" w-full aspect-square bg-background"
          ></div>
        ))}
      </div> */}
      <div className=" sticky top-0 left-0 right-0 h-screen flex justify-around border">
        <div className=" absolute inset-0 overflow-hidden flex flex-col gap-[7.2vw]">
          {Array.from(Array(30).keys()).map((_, index) => (
            <div
              key={index}
              className="w-full h-[0.3vw] lg:h-[0.2vw] xl:h-[0.1vw] shrink-0 bg-[#424242]"
            ></div>
          ))}
        </div>
        {Array.from(Array(13).keys()).map((_, index) => (
          <div
            key={index}
            className=" h-full w-[0.3vw] lg:w-[0.2vw] xl:w-[0.1vw] bg-[#424242]"
          ></div>
        ))}

        {/* <Image src={"/bg-grid.svg"} layout="fill" className=" w-full h-full" /> */}
      </div>
      {/*<div className=" absolute top-0 left-0 right-0 projects-grid">
        <h2 className="text-[128px] text-center projects-heading">
          SELECTED PROJECTS
        </h2>

        <div className=" flex justify-between items-center first-project">
          <Image
            src={"/project-img/timely.png"}
            height={1030}
            width={735}
            alt="Timely project preview"
            className=" project-image"
          />
          <div className="  flex project-desc">
            <div className="  bg-white border relative w-[5px] -translate-x-[2.5px] ">
              <div className="  h-[30px] w-[45px] bg-white"></div>
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
        </div> */}

      {/* <div className=" flex items-center w-full justify-center mt-[296px] gap-[138px]">
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
      </div>*/}
    </section>
  );
};

export default ProjectsSection;
