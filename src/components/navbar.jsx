import React from "react";
import { ThemeSwitch } from "./theme-switch";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" w-full h-[20vh] bg-gradient-to-b from-navbar-start/70 to-navbar-end/0 px-[73px] flex items-center justify-between pb-[46px] sticky">
      <Link className=" flex items-center gap-4" href={"/"}>
        <Image src="/logo.png" width={47} height={52} alt="logo" />

        <div className=" flex flex-col gap-2">
          <h2 className=" text-foreground text-lg  2xl:text-2xl leading-6 font-medium">
            Krishna T
          </h2>
          <p className=" text-foreground/50 leading-4 font-normal tracking-[0.125px] text-sm 2xl:text-base  ">
            Product Designer
          </p>
        </div>
      </Link>

      <div className=" flex items-center justify-center gap-[70px] font-medium 2xl:text-xl leading-5 tracking-[0.2px]">
        <Link href={"#"}>Work</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"#"}>Resume</Link>
      </div>
    </nav>
  );
};

export default Navbar;
