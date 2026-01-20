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
        <nav className="fixed top-4 w-[95%] left-1/2 -translate-x-1/2 bg-[#0f172a] text-white z-50 rounded-xl">
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
                            <li key={id} className="cursor-pointer hover:text-white font-bold font-mono text-cyan-300 text-base hover:underline">
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
                            {menuOpen ? <RxCross2 style={{ width: '30px', height: '30px', color: 'cyan' }} /> : <IoMdMenu style={{ width: '30px', height: '30px', color: 'cyan' }} />}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (UI only, always hidden for now) */}
            <div className={`md:hidden bg-[#101923] overflow-hidden ${menuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
                <ul className="flex flex-col gap-4 px-6 text-lg">
                    {navbarLinks.map((link, id) => (
                        <li key={id} className="cursor-pointer text-white hover:text-blue">
                            <a href={link.url}>{link.page}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;