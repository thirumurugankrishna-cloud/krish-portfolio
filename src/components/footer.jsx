import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
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
        <div className=" flex flex-col gap-8">
          <h4 className=" text-sm 2xl:text-base text-[#808080]">NAVIGATION</h4>
          <Link
            className=" relative nav-link text-lg 2xl:text-2xl w-fit"
            href={"/#work"}
          >
            Work
          </Link>
          <Link
            className=" relative nav-link text-lg 2xl:text-2xl w-fit"
            href={"/about"}
          >
            About
          </Link>
        </div>
        <div className=" flex gap-8 flex-col">
          <h4 className=" text-sm 2xl:text-base text-[#808080]">PROJECTS</h4>
          <a
            className=" relative nav-link text-lg 2xl:text-2xl w-fit"
            target="_blank"
            href={
              "https://www.behance.net/gallery/154683703/Integrating-Game-Based-Learning-In-Virtual-Ed"
            }
          >
            Immersive Education
          </a>

          <a
            className=" relative nav-link text-lg 2xl:text-2xl w-fit"
            target="_blank"
            href={"https://www.clootrack.com/"}
          >
            Clootrack
          </a>

          <a
            className=" relative nav-link text-lg 2xl:text-2xl w-fit"
            target="_blank"
            href={"https://www.behance.net/gallery/195201637/ZEE-Design-System"}
          >
            ZEE5 Design System
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
