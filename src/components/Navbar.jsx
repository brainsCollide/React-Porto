import React from "react";

function Navbar() {

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
            link: 'projects'
        },
        {
            id: 4,
            link: 'contacts'
        },
    ];

    return(
        <div className="bg-gradient-to-b from-blue-950
        to-zinc-950">
            <div className="flex justify-between items-center h-24 text-white mx-5">
                <div>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a]">Oz.DEV</h1>
                </div>
            
                <ul className="flex">
                    {links.map(({id, link}) => (
                        <li key={id} 
                        className="px-4 cursor-pointer text-white capitalize font-medium
                        text-grey-500 hover:scale-105 hover:bg-cyan-500 duration-200"
                        >
                            {link}
                        </li>
                    ))}              
                </ul>
            </div>
        </div>
    )
}

export default Navbar