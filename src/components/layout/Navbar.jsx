import React, { useContext, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

//TODO: Navbar Link for Desktop + Mobile -
const navbarLinks = [
    { url: '/', page: 'Home' },
    { url: '/blog', page: 'Blog' },
];


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);
    const location = useLocation();

    return (
        <nav className="fixed top-4 w-[95%] left-1/2 -translate-x-1/2 bg-[#0f172a] text-white z-50 rounded-xl border border-cyan-500">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Left: Brand */}
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 text-base md:text-3xl rounded-md bg-black text-white flex items-center justify-center font-bold font-mono">
                            D
                        </div>
                        <span className="text-base md:text-3xl font-semibold font-mono tracking-tight">
                            DailyBrief
                        </span>
                    </div>

                    {/* Center: Navigation (Desktop) */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navbarLinks.map((link, id) => (
                            <li key={id} className={`${location.pathname === link.url ? 'text-cyan-400 underline underline-offset-4' : ''} cursor-pointer font-medium font-mono text-xl`}>
                                <Link to={link.url}>{link.page}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-4">
                        <button className="sm:flex h-9 px-4 items-center rounded-md text-black text-base font-bold cursor-pointer bg-amber-300 font-mono"
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        >
                            {theme === 'light' ? 'Dark' : 'Light'}
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
                            <Link to={link.url}>{link.page}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;