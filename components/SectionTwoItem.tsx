import Image from "next/image";

interface SectionTwoItemProps {
    classProp: string;
    text1: string;
    text2: string;
    text3: string;
    img: string;
}

export default function SectionTwoItem({ classProp, text1, text2, text3, img }: SectionTwoItemProps) {
    return (
        <div className={`${classProp} py-[100px] flex flex-col items-center justify-between gap-5 col-span-2 md:col-span-1`}>
            <span className="inline-flex items-center bg-white px-3 py-2 font-semibold text-black border-2 uppercase">
                {text1}
            </span>
            <h2 className="text-center text-[50px] font-semibold">{text2}</h2>
            <p className="text-center px-2 lg:px-30 font-semibold">{text3}</p>
            <Image 
                src={img}
                alt="image"
                width={400}
                height={300}
            />
            <button 
                type="button" 
                className="py-2 px-[50px] text-white border-black bg-black uppercase font-semibold border-2 rounded-full
                        hover:bg-transparent hover:text-black duration-500
                        focus:bg-transparent focus:text-black"
            >
                Learn more
            </button>
        </div>
    );
}