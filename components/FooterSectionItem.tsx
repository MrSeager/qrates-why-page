// components/FooterList.js
import Link from "next/link";

interface FooterSectionItemProps {
    title: string;  
    links: {
        href: string;
        label: string;
    }[];
}

export default function FooterSectionItem({ title, links }: FooterSectionItemProps) {
  return (
    <ul className="px-5 flex flex-col gap-2">
      <li>
        <h6 className="text-[20px] font-semibold uppercase mb-3">{title}</h6>
      </li>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="duration-500 font-semibold hover:text-[#FFF804]"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
