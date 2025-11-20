'use client';
import Image from "next/image";
import { useState } from "react";

export default function SectionSeven () {
    const [active, setActive] = useState<number>(1);

    return(
        <div className="grid md:grid-cols-2 border-y">
            <div className="bg-[#FFF804] flex flex-col items-start justify-between px-5 py-[75px] border-y border-e">
                <span className="animate-bounce inline-flex items-center bg-white px-3 py-2 font-semibold text-black border-2 uppercase">
                    Artist on qrates
                </span>
                <div className="w-full relative overflow-hidden h-[500px] flex flex-col justify-center">
                    <div 
                        className={`
                        absolute inset-0 transition-all duration-500 ease-in-out
                        flex flex-col justify-center gap-5
                        ${active === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                        `}
                    >
                        <p className="font-semibold text-[25px] lg:me-[150px]">
                            &quot;The response was overwhelming. It made
                            me wonder why I hadn&apos;t pressed any
                            records on vinyl before now. It felt like
                            something that people had been waiting
                            for a long time.&quot;
                        </p>
                        <h5 className="font-semibold text-[25px]">-<span className="underline">SOL</span></h5>
                    </div>
                        <div 
                            className={`
                            absolute inset-0 transition-all duration-500 ease-in-out
                            flex flex-col justify-center gap-5
                            ${active === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                            `}
                        >
                        <p className="font-semibold text-[25px] lg:me-[150px]">
                            &quot;The response was overwhelming. It made
                            me wonder why I hadn&apos;t pressed any
                            records on vinyl before now. It felt like
                            something that people had been waiting
                            for a long time.&quot;
                        </p>
                        <h5 className="font-semibold text-[25px]">-<span className="underline">SOL</span></h5>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button 
                        type="button"
                         onClick={() => setActive(1)}
                         className={`
                            font-semibold px-3 py-1 rounded-full border-2 border-black duration-500
                            ${active === 1 ? 'bg-black text-white' : 'bg-transparent text-black'}
                            hover:bg-black hover:text-white
                        `}
                    >
                        1
                    </button>
                    <button 
                        type="button"
                         onClick={() => setActive(2)}
                         className={`
                            font-semibold px-3 py-1 rounded-full border-2 border-black duration-500
                            ${active === 2 ? 'bg-black text-white' : 'bg-transparent text-black'}
                            hover:bg-black hover:text-white
                        `}
                    >
                        2
                    </button>
                </div>
            </div>
            <div className="border-y border-s relative min-h-[650px]">
                <Image 
                    src='/images/pexels-fotios-photos-18361184.jpg'
                    alt="img"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}