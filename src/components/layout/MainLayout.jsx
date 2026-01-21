import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen ${theme === 'light' ? 'bg-[#101923] text-white' : 'bg-white text-black'}`}>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainLayout;