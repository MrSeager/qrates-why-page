"use client";
import { useState, ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="px-5 border-x-2 border-b-3">
      <button
        type="button"
        onClick={onClick}
        className="flex justify-between items-center w-full py-3 text-left text-gray-800 font-medium focus:outline-none"
      >
        <span className="text-[20px] font-semibold">{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Animated content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 text-gray-600">{children}</div>
      </div>
    </div>
  );
}

interface AccordionGroupProps {
  items: { title: string; content: ReactNode }[];
}

export default function AccordionGroup({ items }: AccordionGroupProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
