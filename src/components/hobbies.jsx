"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const HobbiesSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["end end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0", "-50%"]);
  const translateYReverse = useTransform(
    scrollYProgress,
    [0, 1],
    ["-50%", "0%"]
  );

  return (
    <section className=" h-[300vh] w-full px-12 overflow-clip " ref={targetRef}>
      <div className=" h-screen w-full sticky top-0  bg-red-200/10 flex flex-row gap-8 hobbies-section ">
        <div className=" h-full flex-[3] overflow-clip ">
          <motion.div
            className=" flex flex-col gap-8"
            style={{
              translateY: translateY,
            }}
          >
            <Image
              priority={true}
              src={"/gifs/Frame_1.gif"}
              height={120}
              width={200}
              alt="gifs frame 1"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_2.gif"}
              height={120}
              width={200}
              alt="gifs frame 2"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_3.gif"}
              height={120}
              width={200}
              alt="gifs frame 3"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_4.gif"}
              height={120}
              width={200}
              alt="gifs frame 4"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_5.gif"}
              height={120}
              width={200}
              alt="gifs frame 5"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_6.gif"}
              height={120}
              width={200}
              alt="gifs frame 6"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_7.gif"}
              height={120}
              width={200}
              alt="gifs frame 7"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_8.gif"}
              height={120}
              width={200}
              alt="gifs frame 8"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_9.gif"}
              height={120}
              width={200}
              alt="gifs frame 9"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_10.gif"}
              height={120}
              width={200}
              alt="gifs frame 10"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_11.gif"}
              height={120}
              width={200}
              alt="gifs frame 11"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_1.gif"}
              height={120}
              width={200}
              alt="gifs frame 1"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_2.gif"}
              height={120}
              width={200}
              alt="gifs frame 2"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_3.gif"}
              height={120}
              width={200}
              alt="gifs frame 3"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_4.gif"}
              height={120}
              width={200}
              alt="gifs frame 4"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_5.gif"}
              height={120}
              width={200}
              alt="gifs frame 5"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_6.gif"}
              height={120}
              width={200}
              alt="gifs frame 6"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_7.gif"}
              height={120}
              width={200}
              alt="gifs frame 7"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_8.gif"}
              height={120}
              width={200}
              alt="gifs frame 8"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_9.gif"}
              height={120}
              width={200}
              alt="gifs frame 9"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_10.gif"}
              height={120}
              width={200}
              alt="gifs frame 10"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/gifs/Frame_11.gif"}
              height={120}
              width={200}
              alt="gifs frame 11"
              className=" w-full h-auto"
            />
          </motion.div>
        </div>
        <div className=" h-full flex-[2] overflow-clip  ">
          <motion.div
            className=" flex flex-col gap-8"
            style={{
              translateY: translateYReverse,
            }}
          >
            <Image
              priority={true}
              src={"/Inktober/frame-1.png"}
              height={150}
              width={150}
              alt="inktober frame 1"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-2.png"}
              height={150}
              width={150}
              alt="inktober frame 2"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-3.png"}
              height={150}
              width={150}
              alt="inktober frame 3"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-4.png"}
              height={150}
              width={150}
              alt="inktober frame 4"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-5.png"}
              height={150}
              width={150}
              alt="inktober frame 5"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-6.png"}
              height={150}
              width={150}
              alt="inktober frame 6"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-7.png"}
              height={150}
              width={150}
              alt="inktober frame 7"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-8.png"}
              height={150}
              width={150}
              alt="inktober frame 8"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-9.png"}
              height={150}
              width={150}
              alt="inktober frame 9"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-10.png"}
              height={150}
              width={150}
              alt="inktober frame 10"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-11.png"}
              height={150}
              width={150}
              alt="inktober frame 11"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-1.png"}
              height={150}
              width={150}
              alt="inktober frame 1"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-2.png"}
              height={150}
              width={150}
              alt="inktober frame 2"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-3.png"}
              height={150}
              width={150}
              alt="inktober frame 3"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-4.png"}
              height={150}
              width={150}
              alt="inktober frame 4"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-5.png"}
              height={150}
              width={150}
              alt="inktober frame 5"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-6.png"}
              height={150}
              width={150}
              alt="inktober frame 6"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-7.png"}
              height={150}
              width={150}
              alt="inktober frame 7"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-8.png"}
              height={150}
              width={150}
              alt="inktober frame 8"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-9.png"}
              height={150}
              width={150}
              alt="inktober frame 9"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-10.png"}
              height={150}
              width={150}
              alt="inktober frame 10"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/Inktober/frame-11.png"}
              height={150}
              width={150}
              alt="inktober frame 11"
              className=" w-full h-auto"
            />
          </motion.div>
        </div>
        <div className=" h-full flex-[3] overflow-clip ">
          <motion.div
            className=" flex flex-col gap-8"
            style={{
              translateY: translateY,
            }}
          >
            <Image
              priority={true}
              src={"/3d-models/model-1.png"}
              height={120}
              width={200}
              alt="3d-models frame 1"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-2.png"}
              height={120}
              width={200}
              alt="3d-models frame 2"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-3.png"}
              height={120}
              width={200}
              alt="3d-models frame 3"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-4.png"}
              height={120}
              width={200}
              alt="3d-models frame 4"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-5.png"}
              height={120}
              width={200}
              alt="3d-models frame 5"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-6.png"}
              height={120}
              width={200}
              alt="3d-models frame 6"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-7.png"}
              height={120}
              width={200}
              alt="3d-models frame 7"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-8.png"}
              height={120}
              width={200}
              alt="3d-models frame 8"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-9.png"}
              height={120}
              width={200}
              alt="3d-models frame 9"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-10.png"}
              height={120}
              width={200}
              alt="3d-models frame 10"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-11.png"}
              height={120}
              width={200}
              alt="3d-models frame 11"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-1.png"}
              height={120}
              width={200}
              alt="3d-models frame 1"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-2.png"}
              height={120}
              width={200}
              alt="3d-models frame 2"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-3.png"}
              height={120}
              width={200}
              alt="3d-models frame 3"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-4.png"}
              height={120}
              width={200}
              alt="3d-models frame 4"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-5.png"}
              height={120}
              width={200}
              alt="3d-models frame 5"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-6.png"}
              height={120}
              width={200}
              alt="3d-models frame 6"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-7.png"}
              height={120}
              width={200}
              alt="3d-models frame 7"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-8.png"}
              height={120}
              width={200}
              alt="3d-models frame 8"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-9.png"}
              height={120}
              width={200}
              alt="3d-models frame 9"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-10.png"}
              height={120}
              width={200}
              alt="3d-models frame 10"
              className=" w-full h-auto"
            />
            <Image
              priority={true}
              src={"/3d-models/model-11.png"}
              height={120}
              width={200}
              alt="3d-models frame 11"
              className=" w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
