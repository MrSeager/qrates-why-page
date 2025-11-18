//Components
import Image from "next/image"
import SectionFourItem from "./SectionFourItem"

export default function SectionFour() {
    return(
        <div className="grid grid-cols-2">
            <SectionFourItem
                bg='bg-black'
                tc='text-white'
                img='/images/Screenshot 2025-11-18 110731.png'
                text1='Retail network'
                text2='Worldwide distro, demystified'
                text3='Get direct access to over 150 of our retail partners across the globe.'
            />
            <SectionFourItem
                bg='bg-[#E280FF]'
                tc='text-black'
                img='/images/Screenshot 2025-11-18 110753.png'
                text1='Customer support'
                text2='Here to help, whenever you need it.'
                text3="Whether you're an artist in the middle of product, or a fan with questions about your order; our team is here to help."
            />
            <div className="col-span-2 py-25 flex flex-col items-center gap-5">
                <span className="animate-bounce inline-flex items-center bg-white px-3 py-2 font-semibold text-black border-2 uppercase">
                    Community
                </span>
                <h4 className='text-base/13 text-center font-semibold text-[50px] mx-5'>Join a growing community.</h4>
                <p className='text-lg text-center mx-3 lg:w-[50%]'>We&apos;re building a home for the next generation of vinyl lovers.
                    Get in front of fans, connect with artists, labels and stores.
                </p>
                <button 
                    type="button"
                    className="uppercase font-semibold border-2 py-2 px-[50px] rounded-full cursor-pointer
                    duration-500
                    hover:bg-black hover:text-white hover:border-black
                    focus:bg-black focus:text-white focus:border-black
                    active:bg-black active:text-white active:border-black"
                >
                    Browse artists
                </button>
            </div>
        </div>
    )
}