import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

//TODO: Navbar Link for Desktop + Mobile -
const navbarLinks = [
    { url: '/', page: 'Home' },
    { url: '/blog', page: 'Blog' },
];


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full border-b border-gray-300 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Left: Brand */}
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md bg-black text-white flex items-center justify-center font-bold font-mono">
                            D
                        </div>
                        <span className="text-2xl font-semibold font-mono tracking-tight">
                            DailyBrief
                        </span>
                    </div>

                    {/* Center: Navigation (Desktop) */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navbarLinks.map((link, id) => (
                            <li key={id} className="cursor-pointer hover:text-black font-bold font-mono text-gray-600 text-base hover:underline">
                                <a href={link.url}>{link.page}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-4">
                        <button className="sm:flex h-9 px-4 items-center rounded-md bg-black text-white text-sm font-medium cursor-pointer">
                            Dark
                        </button>

                        {/* Mobile Menu Icon */}
                        <div className="md:hidden flex items-center justify-center" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <RxCross2 style={{ width: '30px', height: '30px', color: 'blue' }} /> : <IoMdMenu style={{ width: '30px', height: '30px', color: 'blue' }} />}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (UI only, always hidden for now) */}
            <ul className="md:hidden hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3 text-sm font-medium text-gray-600">
                {navbarLinks.map((link, id) => (
                    <li key={id} className="cursor-pointer hover:text-black">
                        <a href={link.url}>{link.page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;