//Components
import Image from "next/image";
import AccordionGroup from "./AccordionItem";

export default function SectionThree() {
    return(
        <div className="grid md:grid-cols-2 py-[100px]">
            <div className="flex flex-col py-5 px-4 items-center gap-[35px]">
                <span className="animate-bounce inline-flex items-center bg-white px-3 py-2 font-semibold text-black border-2 uppercase">
                    Our services
                </span>
                <h3 className="text-center text-outline text-[45px] font-extrabold text-base/10 text-white uppercase">You make music.<br />
                we do the rest.</h3>
                <Image 
                    src='/images/pexels-marcela-alessandra-789314-1885213.jpg'
                    alt="img"
                    width={400}
                    height={700}
                    className="border-2 border-black rotate-350 my-5"
                />
                <p className="text-center font-semibold lg:mx-[60px]">We want you to be able to put all your energy into the creative side of making music. So we created a one-stop shop for everything else.</p>
                <button 
                    type="button"
                    className="uppercase font-semibold border-2 py-2 px-[50px] rounded-full cursor-pointer
                    duration-500
                    hover:bg-black hover:text-white hover:border-black
                    focus:bg-black focus:text-white focus:border-black
                    active:bg-black active:text-white active:border-black"
                >
                    Learn more
                </button>
            </div>
            <div className="flex flex-col justify-center px-5 md:ps-[50px] lg:px-[100px]">
                <h4 className="bg-black text-white font-bold text-[30px] px-5 pt-5 pb-[50px]">Making Records</h4>
                <AccordionGroup
                    items={[
                        { title: "Design & Castomization", content: <p>Design & Castomization section</p> },
                        { title: "Mastering", content: <p>Mastering section</p> },
                        { title: "Artwork Assistance", content: <p>Artwork Assistance section</p> },
                        { title: "Pressing", content: <p>Pressing section</p> },
                    ]}
                />
                <h4 className="bg-black text-white font-bold text-[30px] px-5 pt-5 pb-[50px]">Storage & Distribution</h4>
                <AccordionGroup
                    items={[
                        { title: "Free Storage", content: <p>Free Storage section</p> },
                        { title: "Shop", content: <p>Shop section</p> },
                        { title: "Digital Downloads", content: <p>Digital Downloads section</p> },
                        { title: "Retail Distribution", content: <p>Retail Distribution section</p> },
                    ]}
                />
                <h4 className="bg-black text-white font-bold text-[30px] px-5 pt-5 pb-[50px]">Support</h4>
                <AccordionGroup
                    items={[
                        { title: "Customer Support", content: <p>Customer Support section</p> },
                        { title: "Artist Support", content: <p>Artist Support section</p> },
                    ]}
                />
            </div>
        </div>
    );
}