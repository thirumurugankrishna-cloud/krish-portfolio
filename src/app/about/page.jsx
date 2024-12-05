import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Globe } from "lucide-react";
import Image from "next/image";
import React from "react";

import { FaAppStoreIos, FaAndroid } from "react-icons/fa";

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

        <div className=" my-20 bg-[#424242] px-10  w-full h-[1px]"></div>

        <section className=" space-y-12">
          <div className=" flex gap-2 items-center">
            <div className=" size-3 rounded-full bg-white  shadow-[0px_0px_20px_0px]"></div>
            <h2 className=" text-lg text-[#808080]">EXPERIENCE</h2>
          </div>
          <div className=" grid grid-cols-2 gap-[72px]">
            <div className=" space-y-4">
              <h3 className=" text-foreground text-4xl">Clootrack</h3>
              <p className=" text-secondary-foreground text-2xl">Bangalore</p>
              <Globe className=" text-white size-8" />
            </div>
            <div className=" ">
              <h3 className=" mb-3 text-2xl text-foreground">
                Product Designer
              </h3>
              <p className=" mb-6 text-teritary-foreground text-xl">
                06/&apos;24 - Present
              </p>
              <p className=" text-teritary-foreground text-xl">
                Translated concepts into Figma prototypes, driving efficient
                productization. Designed Genie, a GPT-4 chatbot enabling data
                exploration beyond dashboards. Built a cohesive design system to
                unify design language and streamline handoffs.
              </p>
            </div>

            <div className=" space-y-4">
              <h3 className=" text-foreground text-4xl">ZEE Entertainment</h3>
              <p className=" text-secondary-foreground text-2xl">Bangalore</p>
              <div className=" flex gap-6">
                <Globe className=" text-white size-8" />
                <FaAndroid className=" text-white size-8" size={32} />
                <FaAppStoreIos className=" text-white size-8" size={32} />
              </div>
            </div>
            <div className=" ">
              <h3 className=" mb-3 text-2xl text-foreground">
                Associate Product Designer, Design Systems
              </h3>
              <p className=" mb-6 text-teritary-foreground text-xl">
                06/&apos;23 - 03/&apos;24
              </p>
              <p className=" text-teritary-foreground text-xl">
                Contributed to the ZEE design system team, focusing on essential
                components and ensuring consistency across all products.
                Collaborated on developing design tokens, components, and a
                visual library. Created screens for Gen AI projects and ILT20
                season 2.
              </p>
            </div>

            <div className=" space-y-4">
              <h3 className=" text-foreground text-4xl">Agrivision4U</h3>
              <p className=" text-secondary-foreground text-2xl">Remote</p>
              <Globe className=" text-white size-8" />
            </div>
            <div className=" ">
              <h3 className=" mb-3 text-2xl text-foreground">
                UX Design Intern, Website Designer
              </h3>
              <p className=" mb-6 text-teritary-foreground text-xl">
                Summer &apos;21
              </p>
              <p className=" text-teritary-foreground text-xl">
                Interned as a UI designer at AgriVision4U, conducting research
                to inform the website&apos;s UI design. Created intuitive,
                visually appealing UI elements aligned with the brand and target
                audience, ensuring a seamless user experience.
              </p>
            </div>

            <div className=" space-y-4">
              <h3 className=" text-foreground text-4xl">
                Indian Institute of Technology
              </h3>
              <p className=" text-secondary-foreground text-2xl">Guwahati</p>
            </div>
            <div className=" ">
              <h3 className=" mb-3 text-2xl text-foreground">B.Des</h3>
              <p className=" mb-6 text-teritary-foreground text-xl">
                07/&apos;19 - 05/&apos;23
              </p>
              <p className=" text-teritary-foreground text-xl">
                During my four years at IIT Guwahati, I delved into diverse
                design domains, gaining a well-rounded foundation in the field.
                For my bachelor&apos;s project, I designed an immersive learning
                experience for children, integrating AR, VR, and gamification to
                make education both engaging and interactive. This experience
                enhanced my expertise in user experience design and fueled my
                passion for crafting innovative, impactful solutions.
              </p>
            </div>
          </div>
        </section>

        <section className=" my-24"></section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
