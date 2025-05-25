import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTheme } from "../API/contextAPI";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Navbar() {
    const [nav, setNav] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'experience' },
        { id: 4, link: 'projects' },
        { id: 5, link: 'contacts' },
    ];

    return (
<div className={`w-full fixed z-10 bg-transparent ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
    <div className="flex justify-between items-center h-24 mx-10">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#00df9a]">Oz.DEV</h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
                <li key={id} className="px-4 cursor-pointer capitalize font-medium text-lg hover:scale-105 rounded-full duration-200">
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}
        </ul>

        {/* Theme Toggle Button on the right side */}
        <div className="flex items-center ml-4 space-x-4">
            {/* Mobile Menu Icon */}
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-30 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Theme Toggle Button */}
            <button 
                onClick={toggleTheme} 
                className={`p-2 border rounded-full ${theme === 'dark' ? 'hover:bg-slate-900' : 'hover:bg-white'} transition-colors duration-200`}
            >
                {theme === 'light' ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
            </button>
        </div>
    </div>

    {/* Mobile Menu and Overlay */}
    {nav && (
        <div
            onClick={() => setNav(false)}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-20 md:hidden"
        ></div>
    )}

    {/* Mobile Menu */}
    <ul
        className={`flex flex-col absolute top-0 right-0 w-2/4 h-screen ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        } py-16 text-2xl font-thin transform ${
            nav ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-30`}
    >
        {links.map(({ id, link }) => (
            <li key={id} className="py-6 px-10 cursor-pointer capitalize" onClick={() => setNav(!nav)}>
                <Link to={link} smooth duration={500}>{link}</Link>
            </li>
        ))}
    </ul>
</div>

    );
}

export default Navbar;
