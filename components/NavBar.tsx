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
        <nav className="fixed top-0 w-full bg-gray-900 text-white z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <TbBrandNextjs size={40} />
                    </div>

                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="hover:text-gray-300">Discover</Link>
                        <Link href="/" className="hover:text-gray-300">Search</Link>
                        <Link href="/" className="hover:text-gray-300">Why</Link>
                        <Link href="/" className="hover:text-gray-300">Cart</Link>
                    </div>

                    <div className="hidden md:flex space-x-4">
                        <button type="button" className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500">Log In</button>
                        <button type="button" className="bg-green-600 px-3 py-1 rounded hover:bg-green-500">Make a record</button>
                    </div>

                    <div className="md:hidden">
                        <button type='button' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
                <Link href="/" className="block hover:text-gray-300">Discover</Link>
                <Link href="/about" className="block hover:text-gray-300">Search</Link>
                <Link href="/services" className="block hover:text-gray-300">Why</Link>
                <Link href="/blog" className="block hover:text-gray-300">Cart</Link>
                <button type='button' className="w-full bg-blue-600 px-3 py-1 rounded hover:bg-blue-500">Login</button>
                <button type='button' className="w-full bg-green-600 px-3 py-1 rounded hover:bg-green-500">Make a record</button>
                </div>
            )}
        </nav>
    )
}