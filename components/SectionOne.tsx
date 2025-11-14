import Image from "next/image";
//Components
import Link from "next/link"

export default function SectionOne() {
    return(
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <div className="px-5 flex flex-col items-start justify-center gap-3">
            <Link
              href='/'
              className="border-3 px-3 py-1 uppercase font-semibold
                        hover:bg-black hover:text-white hover:border-black duration-500"
            >
              Why Qrates
            </Link>
            <h1 className="text-7xl font-bold">Your music on <br /> vinyl.<br />
            Without the <br /> barriers.</h1>
            <p className="text-lg">Full-service pressing, a global retail <br /> network, customer support - and <br /> you keep up to 85% of profit. &#8595;</p>
          </div>
          <div className="relative flex justify-start items-center min-h-150 md:min-h-300 lg:min-h-150">
            <Image 
              src='/images/pexels-marleneleppanen-1925099.jpg'
              alt="image 1"
              width='900'
              height='1500'
              className="border-2 border-black rotate-15 absolute"
            />
          </div>
          <div className="relative flex justify-start items-center min-h-100 md:min-h-150 lg:min-h-170">
            <Image 
              src='/images/pexels-rombo-1510555-3528694.jpg'
              alt="image 2"
              width='600'
              height='900'
              className="border-2 border-black rotate-330 absolute"
            />
          </div>
          <div className="flex pt-16 md:pt-0 items-center md:justify-end lg:justify-center">
            <Image 
              src='/images/Screenshot 2025-11-13 103523.png'
              alt="image 3"
              width='400'
              height='400'
            />
          </div>
        </div>
    );
}