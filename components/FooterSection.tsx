//Components
import Image from "next/image";
import Link from "next/link";
import FooterSectionItem from "./FooterSectionItem";
//Icons
import { TbBrandNextjs } from "react-icons/tb";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FooterSection() {
    return(
        <footer className="p-5 bg-black text-white">
            <nav className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <FooterSectionItem 
                    title="For artists"
                    links={[
                        { href: "/", label: "Why Qrates?" },
                        { href: "/", label: "Crowdfunding" },
                        { href: "/", label: "Press & Sell" },
                        { href: "/", label: "Our Services" },
                        { href: "/", label: "Artist Toolkit" },
                        { href: "/", label: "Referral Program" },
                    ]}
                />
                <FooterSectionItem 
                    title="For fans"
                    links={[
                        { href: "/", label: "Discover" },
                        { href: "/", label: "Records" },
                        { href: "/", label: "Stories" },
                        { href: "/", label: "Lists" },
                        { href: "/", label: "Artist & Labels" },
                    ]}
                />
                <FooterSectionItem 
                    title="Our company"
                    links={[
                        { href: "/", label: "About Qrates" },
                        { href: "/", label: "Careers" },
                        { href: "/", label: "Partners" },
                    ]}
                />
                <FooterSectionItem 
                    title="Help"
                    links={[
                        { href: "/", label: "Support Center" },
                        { href: "/", label: "Contact Us" },
                        { href: "/", label: "Returns" },
                        { href: "/", label: "Shipping" },
                    ]}
                />
                <div className="mt-[50px] col-span-2 md:col-span-4 lg:col-span-2 flex gap-3 justify-start items-center">
                    <TbBrandNextjs size={150} />
                    <h5 className="uppercase font-bold text-[30px] md:text-[40px] text-base/10">
                        Qrates<br />
                        <span className="text-black text-outline-white">music in<br />
                        your hands</span>
                    </h5>
                </div>
                <div className="mt-[50px] col-span-2 md:col-span-4 lg:col-span-2 flex flex-col items-center md:items-end justify-end gap-5">
                    <div className="flex gap-3">
                        <button type="button" className="text-[40px] hover:text-[#FFF804] duration-500"><FaFacebook /><span className="hidden">Facebook</span></button>
                        <button type="button" className="text-[40px] hover:text-[#FFF804] duration-500"><FaInstagram /><span className="hidden">Instagram</span></button>
                        <button type="button" className="text-[40px] hover:text-[#FFF804] duration-500"><FaTwitter /><span className="hidden">Twitter</span></button>
                    </div>
                    <ul className="flex gap-5 text-[12px]">
                        <li>
                            <Link 
                                href="/"
                                className="duration-500 font-semibold hover:text-[#FFF804]"
                            >
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/"
                                className="duration-500 font-semibold hover:text-[#FFF804]"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/"
                                className="duration-500 font-semibold hover:text-[#FFF804]"
                            >
                                Legal Terms
                            </Link>
                        </li>
                        <li>
                            <h6 className="font-semibold">TDMS Inc.</h6>
                        </li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}