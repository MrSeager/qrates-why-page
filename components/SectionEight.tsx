import Image from "next/image";

export default function SectionEight() {
    return (
        <div className="py-[100px] px-3 bg-black flex flex-col items-center gap-5">
            <span className="animate-bounce inline-flex items-center bg-white px-3 py-2 font-semibold text-black border-2 uppercase">
                Vinyl studio
            </span>
            <h5 className="text-center text-white font-semibold text-[40px] text-base/10">
                Make it real with<br />
                Qrates Vinyl Studio    
            </h5>
            <p className="text-white text-center lg:w-[50%]">
                Design the look and feel of your vinyl and use the profit calculator to
                immediately see how much your project will cost, and how much you&apos;ll earn.
            </p>
            <Image 
                src={'/images/Screenshot 2025-11-21 110905.png'}
                alt="img"
                width={700}
                height={400}
            />
                <button 
                    type="button"
                    className="bg-[#FFF804] uppercase font-semibold border-2 border-[#FFF804] py-3 px-[75px] rounded-full cursor-pointer
                    duration-500
                    hover:bg-transparent hover:text-[#FFF804] hover:border-[#FFF804]
                    focus:bg-transparent focus:text-[#FFF804] focus:border-[#FFF804]
                    active:bg-transparent active:text-[#FFF804] active:border-[#FFF804]"
                >
                    Try it out
                </button>
        </div>
    );
}