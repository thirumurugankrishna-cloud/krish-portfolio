import Navbar from "@/components/navbar";
import Image from "next/image";

import ProjectsSection from "@/components/projects";
import OtherProjectsSection from "@/components/other-projects";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import HobbiesSection from "@/components/hobbies";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        <Image
          src={"/under-construction.png"}
          height={300}
          width={150}
          alt="under construction label"
          className=" fixed right-20 bottom-20 z-20"
        />
        <HeroSection />
        <ProjectsSection />
        <OtherProjectsSection />
        <HobbiesSection />
      </main>
      <Footer />
    </>
  );
}
