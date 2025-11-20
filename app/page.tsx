//Components
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";
import SectionSix from "@/components/SectionSix";
import SectionSeven from "@/components/SectionSeven";

export default function Home() {
  return (
    <div className="select-none overflow-hidden flex flex-col min-h-screen items-center justify-top bg-white">
      <main className="max-w-[100rem] text-black w-full pt-32 shadow-xl">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
      </main>
    </div>
  );
}
