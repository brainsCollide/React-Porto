import person from '../assets/person.png';
import { useTheme } from '../API/contextAPI';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa'; 
import GradientText from './particles/GradientText';

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

    // Generate an array of rectangles for the background animation
    const rectangles = Array.from({ length: 20 }, (_, i) => i);

    return(
        <motion.div
            name='home'
            className={`h-full w-full relative ${theme === 'dark' ? 'bg-gradient-to-b from-blue-950 to-gray-950' : 'bg-gradient-to-b from-blue-200 to-gray-100'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
        >
            {/* Background animation rectangles - positioned in specific area */}
            <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden pointer-events-none">
                {rectangles.map((i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-md ${
                            theme === 'dark' 
                                ? 'border border-white bg-pink-200/10' 
                                : 'border border-gray-900 bg-blue-600/20'
                        }`}
                        style={{
                            width: Math.random() * 60 + 20, // Random width between 20-80px
                            height: Math.random() * 60 + 20, // Random height between 20-80px
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 50 - 25], // Random horizontal movement
                            y: [0, Math.random() * 50 - 25], // Random vertical movement
                            rotate: [0, Math.random() * 180 - 90], // Random rotation
                            opacity: [0.1, 0.3, 0.1], // Fade in and out
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 1 + Math.random() * 10,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className='relative max-w-screen-lg mx-auto flex-col items-center justify-center h-full px-4 pt-20'>
                <div className='flex flex-col justify-center pt-20'>
                    <div className='text-center relative'>
                        <motion.img 
                            src={person} 
                            alt="avatar"
                            className={`mx-auto w-64 border ${theme === 'dark' ? 'border-gray-300 bg-blue-200' : 'border-gray-400 bg-blue-100'} rounded-full`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                                animate={{
                                    y: [0, -5, 0],
                                    transition: {
                                         duration: 3,
                                         repeat: Infinity,
                                         ease: "easeInOut"
                                    }  
                                 }}
                            
                        />
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                            <motion.div
                                className="absolute top-5 left-80 text-2xl text-[#61DAFB]" // React icon
                                transition={{ duration: 0.5, delay: 0.4 }}
                                animate={{
                                   y: [0, -5, 0],
                                   rotate: 90,
                                   transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                   }  
                                }}
                            >
                                <FaReact />
                            </motion.div>
                            <motion.div
                                className="absolute bottom-5 right-80 text-2xl text-[#8CC84B]" // Node.js icon
                                transition={{ duration: 0.5, delay: 0.4 }}
                                animate={{
                                    y: [0, -5, 0],
                                    transition: {
                                         duration: 3,
                                         repeat: Infinity,
                                         ease: "easeInOut"
                                    }  
                                 }}
                            >
                                <FaNodeJs />
                            </motion.div>
                        </div>
                        <motion.h3 
                            className={`mt-5 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Hello there! I am Fauzan
                        </motion.h3>
                    </div> 
                    <div className='text-center py-8'>
                        <h1>
                            <GradientText
                                className={`tw-auto text-4xl sm:text-7xl font-bold font-signature py-8 capitalize ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
                            >
                                Full Stack Developer
                            </GradientText>
                        </h1>
                        <motion.p 
                            className={`md:text-lg sm:text-md font-light text-center ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            I specialize in creating robust, scalable web applications with technologies like React, Node.js, and MongoDB. Let's collaborate to turn your ideas into stunning digital experiences.
                        </motion.p>
                    </div>
                    <motion.div 
                        className='flex flex-row gap-4 justify-center items-center font-thin'
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.button 
                            onClick={handleDownload}
                            className={`group text-center w-fit px-6 py-3 mt-5 my-2 rounded-md flex items-center justify-center flex-row ring-2 ring-transparent hover:ring-[#00df9a] duration-700 cursor-pointer ${
                                theme === 'dark' ? 'bg-gradient-to-r from-cyan-950 to-slate-700 text-white' : 'bg-gradient-to-r from-cyan-200 to-slate-200 text-gray-800'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            Your Next Hire? Download My Resume
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowForwardIos size={15} className='ml-1' />
                            </span>
                        </motion.button>
                        <motion.a
                            href='mailto:fauzanasyraf.syah@gmail.com'
                            className={`group text-center w-fit px-6 py-3 mt-5 my-2 rounded-md flex items-center justify-center flex-row ring-2 ring-transparent hover:ring-[#00df9a] duration-700 cursor-pointer ${
                                theme === 'dark' ? ' text-white' : 'text-gray-800'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            Contact Me
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowForwardIos size={15} className='ml-1' />
                            </span>
                        </motion.a>
                    </motion.div>
                    <motion.div 
                        className='flex flex-row gap-x-6 justify-center py-10 items-center'
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.a
                            href='https://github.com/brainsCollide'
                            whileHover={{ scale: 1.2, color: "#00df9a" }}
                            transition={{ duration: 0.2 }}
                        >
                            <SiGithub size={26} className={`${theme === 'dark' ? 'text-white' : 'text-black'} cursor-pointer`} />
                        </motion.a>
                        <motion.a
                            href='https://www.linkedin.com/in/fauzan-asyraf/'
                            whileHover={{ scale: 1.2, color: "#00df9a" }}
                            transition={{ duration: 0.2 }}
                        >
                            <SiLinkedin size={26} className={`${theme === 'dark' ? 'text-white' : 'text-black'} cursor-pointer`} />   
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default Hero;
