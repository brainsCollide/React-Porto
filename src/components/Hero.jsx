import person from '../assets/person.png';
import { useTheme } from '../API/contextAPI';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { SiLinkedin, SiGithub } from 'react-icons/si';

function Hero() {
    const { theme } = useTheme(); // Access the current theme

    const handleDownload = () => {
        const fileUrl = 'https://drive.google.com/uc?export=download&id=1HjywmkwMWMu1aPf2ThOjqhJYIoWIUKbX';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div
            name='home'
            className={`h-full w-full ${theme === 'dark' ? 'bg-gradient-to-b from-blue-950 to-gray-950' : 'bg-gradient-to-b from-blue-200 to-gray-100'}`}
        >
            <div className='relative max-w-screen-lg mx-auto flex-col items-center justify-center h-full px-4 pt-20'>
                <div className='flex flex-col justify-center pt-20'>
                    <div className='text-center relative'>
                        <img 
                            src={person} 
                            alt="avatar"
                            className={`mx-auto w-64 border ${theme === 'dark' ? 'border-gray-300 bg-blue-200' : 'border-gray-400 bg-blue-100'} rounded-full animate-float`}
                        />
                        <h3 className={`mt-5 animate-float ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            Hello there! I am Fauzan
                        </h3>
                    </div> 
                    <div className='text-center py-8'>
                        <h2 className={`text-shadow-lg w-auto shadow-[#00df9a] text-4xl sm:text-7xl font-bold font-signature py-8 capitalize ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            Full Stack <span className='text-[#00df9a]'> Web Developer </span> 
                        </h2>
                        <p className={`md:text-lg sm:text-md font-light text-center ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                            I specialize in creating robust, scalable web applications with tehcnologies like React, Node.js, and MongoDB. Let's collaborate to turn your ideas into stunning digital experiences.
                        </p>
                    </div>
                    <div className='flex flex-row gap-4 justify-center items-center font-thin'>
                        <button 
                            onClick={handleDownload}
                            className={`group text-center w-fit px-6 py-3 mt-5 my-2 rounded-md flex items-center justify-center flex-row ring-2 ring-transparent hover:ring-[#00df9a] duration-700 cursor-pointer ${
                                theme === 'dark' ? 'bg-gradient-to-r from-cyan-950 to-slate-700 text-white' : 'bg-gradient-to-r from-cyan-200 to-slate-200 text-gray-800'
                            }`}
                        >
                            Your Next Hire? Download My Resume
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowForwardIos size={15} className='ml-1' />
                            </span>
                        </button>
                        <button 
                            className={`group text-center w-fit px-6 py-3 mt-5 my-2 rounded-md flex items-center justify-center flex-row ring-2 ring-transparent hover:ring-[#00df9a] duration-700 cursor-pointer ${
                                theme === 'dark' ? ' text-white' : 'text-gray-800'
                            }`}
                        >
                            Contact Me
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowForwardIos size={15} className='ml-1' />
                            </span>
                        </button>
                    </div>
                    <div className='flex flex-row gap-x-6 justify-center py-10 items-center' >
                        <SiGithub size={26} className={`${theme === 'dark' ? 'text-white hover:text-[#00df9a]' : 'text-black hover:text-[#00df9a]'} cursor-pointer`} />
                        <SiLinkedin size={26} className={`${theme === 'dark' ? 'text-white hover:text-[#00df9a]' : 'text-black hover:text-[#00df9a]'} cursor-pointer`} />   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;