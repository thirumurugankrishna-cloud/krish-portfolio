import React from "react";
import { ThemeSwitch } from "./theme-switch";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" w-full h-[200px] bg-gradient-to-b from-navbar-start/70 to-navbar-end/0 px-[73px] flex items-center justify-between pb-[46px] sticky">
      <div className=" flex gap-[115px] ">
        <div className=" flex flex-col">
          <h2 className=" text-foreground text-xl leading-6 font-medium">
            Krishna T
          </h2>
          <p className=" text-xs text-foreground/50 leading-4 font-normal tracking-[0.125px] ">
            Product Designer
          </p>
        </div>

        <div className=" flex items-center justify-center gap-[70px] font-medium text-2xl leading-5 tracking-[0.2px]">
          <Link href={"#"}>Work</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Resume</Link>
        </div>
      </div>

      <ThemeSwitch />
    </nav>
  );
};

export default Navbar;
