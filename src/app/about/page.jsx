import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className=" max-w-screen-xl mx-auto min-h-screen px-10 ">
        <section className=" space-y-12">
          <div className=" flex gap-2 items-center">
            <div className=" size-3 rounded-full bg-white  shadow-[0px_0px_20px_0px]"></div>
            <h2 className=" text-lg text-[#808080]">ABOUT ME</h2>
          </div>
          <div className=" flex gap-12 lg:gap-24 items-center h-full">
            <Image
              src={"/picture.png"}
              height={560}
              width={840}
              alt="krishna photo"
              className=" h-full lg:h-[60vh] w-auto"
            />

            <div className=" space-y-12 text-base lg:text-2xl text-[#BCBCBC] font-light leading-loose">
              <p>
                I&apos;m Krishna, a{" "}
                <span className=" font-bold">product designer</span>, Currently
                shaping intuitive AI experiences and defining the future of LLM
                interfaces at <span className=" font-bold">Clootrack</span>,
                Delaware.
              </p>
              <p>
                Previously, at <span className=" font-bold">ZEE</span>, I
                developed a token-based{" "}
                <span className=" font-bold">design system</span> for the ZEE5
                OTT platform, achieving a 40% boost in design efficiency by
                streamlining components across mobile, web, and CTV.
              </p>
              <p>
                Guided by empathy, innovation, and a commitment to user-centered
                design, I aim to make complex technologies accessible and
                impactful. My mission is to bring meaning to everyday
                interactions, empowering users and reimagining their experience
                with technology in ways that are simple yet powerful.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
