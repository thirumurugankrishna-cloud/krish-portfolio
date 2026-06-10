import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { projects } from "@/lib/projects-data";

const ProjectCard = ({ project }) => (
  <Link
    href={`/projects/${project.slug}`}
    className=" h-fit w-fit relative group block"
  >
    <div className=" relative h-[60vh] w-[44vw] max-w-[760px] overflow-hidden rounded-xl border border-white/10">
      <Image
        src={project.card.image}
        height={1030}
        width={735}
        alt={`${project.title} preview`}
        className=" h-full w-full object-cover object-top"
      />
    </div>

    <div className=" absolute image-overlay group-hover:backdrop-blur-[1px] opacity-0 group-hover:opacity-100 z-10 -inset-[1px] rounded-xl transition-all duration-200 ease-in-out grid place-items-center">
      <Button
        variant={"link"}
        className=" text-foreground cursor-pointer text-xl "
        asChild
      >
        <span className=" opacity-0 group-hover:opacity-100">View Project</span>
      </Button>
    </div>
  </Link>
);

const ProjectInfo = ({ project }) => (
  <div className=" flex w-1/4 gap-[70px] h-4/5 2xl:h-3/5">
    <div className=" relative w-[5px] rounded-b-full">
      <div className=" absolute top-0 left-0 h-full bg-white w-[5px] project-line"></div>
      <div className=" h-[30px] w-[45px] bg-white project-rect"></div>
      <div className=" project-circle rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 "></div>
    </div>

    <div>
      <div className=" flex justify-between flex-col h-full">
        <div className=" space-y-2 w-full overflow-clip">
          <Link href={`/projects/${project.slug}`}>
            <h3 className=" text-2xl 2xl:text-3xl font-medium project-text hover:underline underline-offset-4">
              {project.title}
            </h3>
          </Link>
          <p className=" mt-8 text-secondary-foreground 2xl:text-xl project-text">
            {project.card.blurb}
          </p>
        </div>
        <p className=" text-secondary-foreground 2xl:text-xl">
          {project.tags.join(" ")}
        </p>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section
      className=" h-[400vh] w-full flex flex-col items-center justify-between mb-[10vh] gap-[20vh] relative "
      id="work"
    >
      <div className=" absolute inset-0 -z-10 pointer-events-none">
        <div className=" sticky top-0 left-0 right-0 h-screen bg-grid-pattern w-full "></div>
      </div>
      <div className=" border-y w-full border-white py-6 overflow-clip ">
        <h2 className=" text-[64px] 2xl:text-[96px]  font-medium text-[#F2F2F2]  leading-none text-center tracking-tight whitespace-nowrap projects-heading">
          SELECTED PROJECTS - SELECTED PROJECTS - SELECTED PROJECTS - SELECTED
          PROJECTS
        </h2>
      </div>

      {projects.map((project, i) => (
        <div
          key={project.slug}
          className=" flex-1 w-full flex justify-center items-center gap-[10%]"
        >
          {i % 2 === 0 ? (
            <>
              <ProjectCard project={project} />
              <ProjectInfo project={project} />
            </>
          ) : (
            <>
              <ProjectInfo project={project} />
              <ProjectCard project={project} />
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
