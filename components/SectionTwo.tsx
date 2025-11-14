//Components
import SectionTwoItem from "./SectionTwoItem";
import Link from "next/link";

export default function SectionTwo() {
    return (
        <div className="grid grid-cols-2">
            <div className="border-y-2 py-[100px] col-span-2">
                <p className="text-center font-semibold">No matter where you&apos;re at in your career, we&apos;ve got a production model to suit you.</p>
            </div>
            <SectionTwoItem 
                classProp='bg-[#FFF804] border-e-1'
                text1='No risk, no waste'
                text2='Crowdfunding'
                text3='Rally your fans and gather pledges. Press the exact number of records you need, without having to pay anything upfront.'
                img='/images/Screenshot1.png'
            />
            <SectionTwoItem 
                classProp='bg-[#81836C] border-s-1'
                text1='Get into it'
                text2='Press & Sell'
                text3='Launch your record, sooner. Take pre-orders from fans and we&apos;ll take care of the rest.'
                img='/images/Screenshot2.png'
            />
            <div className="bg-black py-[100px] col-span-2 flex flex-col md:flex-row text-white items-center justify-between px-5 gap-3 lg:px-[150px]">
                <p className="font-semibold text-center md:text-start">Just after straight up vinyl pressing? We do that too. Records are shipped in bulk to wherever you need.</p>
                <Link href="/" className="uppercase font-semibold underline">Start a press only project</Link>
            </div>
        </div>
    );
}