import { ThemeSwitch } from "@/components/theme-switch";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-24 p-24 bg-background">
      <ThemeSwitch />
      <h1 className=" text-foreground font-semibold text-5xl">
        Krishna, the bully
      </h1>
    </main>
  );
}
