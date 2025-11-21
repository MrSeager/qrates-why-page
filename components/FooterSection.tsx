//Components
import Image from "next/image";
import Link from "next/link";
import FooterSectionItem from "./FooterSectionItem";

export default function FooterSection() {
    return(
        <footer className="p-5 bg-black text-white">
            <nav className="grid grid-cols-4 gap-3">
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
                <ul className="col-span-2">5</ul>
                <ul className="col-span-2">6</ul>
            </nav>
        </footer>
    );
}