//Components
import Image from "next/image";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";

export default function Home() {
  return (
    <div className="select-none overflow-hidden flex flex-col min-h-screen items-center justify-top bg-white">
      <main className="max-w-[90rem] text-black w-full pt-32 shadow-xl">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
    </div>
  );
}
