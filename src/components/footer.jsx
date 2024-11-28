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
  );
};

export default Footer;
