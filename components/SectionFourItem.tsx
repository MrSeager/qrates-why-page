import Image from "next/image";

interface SectionFourItemProps {
    bg: string;
    tc: string;
    img: string;
    text1: string; 
    text2: string;
    text3: string;
}

export default function SectionFourItem ({ bg, tc, img, text1, text2, text3 }: SectionFourItemProps) {
    return (
        <div className={`col-span-2 md:col-span-1 pt-5 px-3 pb-25 flex flex-col items-center justify-start gap-5 ${bg}`}>
            <Image 
                src={img}
                alt="img"
                height={500}
                width={700}
                className="mb-15 border-2 border-black"
            />
            <span className="animate-bounce inline-flex items-center bg-white px-3 py-2 font-semibold text-black border-2 uppercase">
                {text1}
            </span>
            <h4 className={`${tc} mx-3 lg:mx-15 text-base/13 text-center font-semibold text-[50px] mx-5`}>{text2}</h4>
            <p className={`${tc} text-lg text-center lg:mx-25`}>{text3}</p>
        </div>
    )
}