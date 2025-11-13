'use client'
//Components
import { useState } from 'react'
import Link from "next/link"
//Icons
import { TbBrandNextjs } from "react-icons/tb";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <nav className="fixed top-0 bg-gradient-to-b from-white to-transparent w-full text-black z-50">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-0">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <TbBrandNextjs size={40} />
                    </div>
                    <div className="uppercase font-semibold hidden md:flex space-x-6">
                        <Link href="/" className="hover:text-shadow-md hover:scale-105 duration-500">Discover</Link>
                        <Link href="/" className="hover:text-shadow-md hover:scale-105 duration-500">Search</Link>
                        <Link href="/" className="hover:text-shadow-md hover:scale-105 duration-500">Why</Link>
                        <Link href="/" className="hover:text-shadow-md hover:scale-105 duration-500">Cart</Link>
                    </div>

                    <div className="hidden md:flex space-x-4">
                        <button type="button" className="cursor-pointer uppercase font-semibold bg-transparent px-3 py-1 hover:text-shadow-md hover:scale-105 duration-500">Log In</button>
                        <button type="button" className="cursor-pointer uppercase font-semibold bg-black text-white px-10 py-3 rounded-full hover:scale-105 duration-500">Make a record</button>
                    </div>

                    <div className="md:hidden">
                        <button type='button' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="uppercase font-semibold md:hidden px-4 pb-4 flex flex-col items-center gap-2">
                    <Link href="/" className="block focus:text-shadow-md focus:scale-105 transition-transform duration-500">Discover</Link>
                    <Link href="/" className="block focus:text-shadow-md focus:scale-105 transition-transform duration-500">Search</Link>
                    <Link href="/" className="block focus:text-shadow-md focus:scale-105 transition-transform duration-500">Why</Link>
                    <Link href="/" className="block focus:text-shadow-md focus:scale-105 transition-transform duration-500">Cart</Link>
                    <button type='button' className="uppercase font-semibold bg-transparent focus:text-shadow-md focus:scale-105 transition-transform duration-500">Login</button>
                    <button type='button' className="uppercase font-semibold bg-black text-white px-10 py-3 rounded-full focus:scale-105 transition-transform duration-500">Make a record</button>
                </div>
            )}
        </nav>
    )
}