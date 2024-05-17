import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"
import code from '../assets/code.svg'


function Navbar() {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'experience'
        },
        {
            id: 4,
            link: 'contacts'
        },
    ];

    return(
        <div className="bg-gradient-to-b from-gray-950
        to-blue-950 w-full fixed z-10">
            <div className="flex justify-between items-center h-24 text-white mx-10">
                <div>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a]"
                    >
                        Oz.DEV 
                    </h1>
                </div>
            
                <ul className="hidden md:flex">
                    {links.map(({id, link}) => (
                        <li key={id} 
                        className="px-4 cursor-pointer text-white capitalize font-medium text-xl
                        text-grey-500 hover:scale-105 hover:bg-cyan-500 duration-200"
                        >
                           <Link to={link} smooth duration={500}> {link} </Link>
                        </li>
                    ))}              
                </ul>

                <div
                 onClick={() => setNav(!nav)}
                 className="cursor-pointer pr-4 z-30 text-gray-500
                 md:hidden"
                 >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                {nav && (

                    <ul className="flex flex-col justify-center items-center text-xl absolute top-0 w-full
                    h-screen bg-gradient-to-br from-gray-950 to-blue-950 z-20"
                         >
                         {links.map(({id, link}) => (
                             <li key={id} 
                                className="px-4 cursor-pointer capitalize py-6 hover:bg-cyan-500 duration-200 rounded-lg"
                            >
                                <Link onClick={() => setNav(!nav)}
                                to={link}
                                smooth
                                duration={500}
                                >
                                    {link}
                                </Link>
                             </li>
                        ))}  
                    </ul>
                )}

            </div>
        </div>
    )
}

export default Navbar