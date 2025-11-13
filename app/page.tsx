import Image from "next/image";
//Components
import SectionOne from "@/components/SectionOne";

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col min-h-screen items-center justify-top bg-white">
      <main className="max-w-[90rem] text-black w-full pt-32">
        <SectionOne />
      </main>
    </div>
  );
}
