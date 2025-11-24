//Components
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";
import SectionSix from "@/components/SectionSix";
import SectionSeven from "@/components/SectionSeven";
import SectionEight from "@/components/SectionEight";

export const metadata = {
  title: "Qrates Why Page Exercise",
  openGraph: {
    title: "Qrates Why Page Exercise",
    description: "Qrates Why Page Exercise. For creating this page Next.JS, TypeScript and Tailwind were used.",
    images: [
      {
        url: "https://raw.githubusercontent.com/MrSeager/mr-seager-portfolio/refs/heads/main/src/images/075.jpg",
        width: 900,
        height: 660,
        alt: "Meet the Team Section Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qrates Why Page Exercise",
    description: "Qrates Why Page Exercise. For creating this page Next.JS, TypeScript and Tailwind were used.",
    images: [
      "https://raw.githubusercontent.com/MrSeager/mr-seager-portfolio/refs/heads/main/src/images/075.jpg",
    ],
  },
}

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col min-h-screen items-center justify-top bg-white">
      <main className="max-w-[100rem] text-black w-full pt-32 shadow-xl">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
      </main>
    </div>
  );
}
