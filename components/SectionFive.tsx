import Image from "next/image";

export default function SectionFive() {
    return(
        <div className="grid grid-cols-2 md:grid-cols-4 border-1 border-black relative">
            <Image 
                src='/images/pexels-lany-12204293.jpg'
                alt="image 1"
                width={800}
                height={800}
                className="col-span-2 row-span-2 border-1 border-black"
            />
            <Image 
                src='/images/pexels-guillermo-berlin-1524368912-28005535.jpg'
                alt="image 1"
                width={800}
                height={800}
                className="border-1 border-black"
            />
            <Image 
                src='/images/pexels-okayimagery-12987619.jpg'
                alt="image 1"
                width={800}
                height={800}
                className="border-1 border-black"
            />
            <Image 
                src='/images/pexels-melimeraki-33203512.jpg'
                alt="image 1"
                width={800}
                height={800}
                className="border-1 border-black"
            />
            <Image 
                src='/images/pexels-scgough-9851222.jpg'
                alt="image 1"
                width={800}
                height={800}
                className="border-1 border-black"
            />
            <Image 
                src='/images/Cartoon-Eyes-PNG-Photos.png'
                alt="image 1"
                width={200}
                height={200}
                className="absolute top-[-10%] right-[10%] hidden lg:block"
            />
        </div>
    );
}