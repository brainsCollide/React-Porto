import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
import { useTheme } from '../API/contextAPI';
import { motion } from 'framer-motion';

function Experience() {
    const { theme } = useTheme();

    const techs = [
        {
            id: 1,
            src: SiJavascript,
            title: 'JavaScript',
            lightStyle: 'text-yellow-300',
        },
        {
            id: 2,
            src: SiMongodb,
            title: 'MongoDB',
            lightStyle: 'text-green-500',
        },
        {
            id: 3,
            src: SiTailwindcss,
            title: 'Tailwind CSS',
            lightStyle: ' text-sky-400 ',
        },
        {
            id: 4,
            src: FaReact,
            title: 'React',
            lightStyle: 'text-blue-500',
        },
        {
            id: 5,
            src: FaNodeJs,
            title: 'Node.js',
            lightStyle: 'text-green-400',
        },
    ];

    return (
        <div 
            name='experience'
            className={`w-full h-full ${theme === 'dark' ? 'bg-gradient-to-b from-blue-950 to-[#09172E]' : 'bg-gradient-to-b from-[#f1f5f9] to-[#e2e8f0]'}`}
        >
            <div className='max-w-screen-lg mx-auto p-8 py-44 flex flex-col justify-center w-full'>
                <div className="text-center mb-10">
                    <p className={`text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#1A202C]'}`}>
                        My Technology Stack
                    </p>
                    <p className={`text-xl mt-4 font-thin ${theme === 'dark' ? 'text-white' : 'text-[#4A5568]'}`}>
                        Here are the technologies I've worked with and love using in my development process.
                    </p>
                </div>

                <motion.div 
                    className="w-full flex flex-wrap justify-center items-center gap-8 py-10"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { 
                            opacity: 1, 
                            y: 0, 
                            transition: { staggerChildren: 0.2 } 
                        }
                    }}
                >
                    {techs.map(({ id, src: Icon, title, lightStyle }) => (
                        <motion.div
                            key={id}
                            className={`flex flex-col items-center text-center p-6 rounded-lg drop-shadow-lg 
                                ${theme === 'dark' ? 'shadow-[0px_10px_30px_rgba(255,255,255,0.1)]' : 'shadow-[0_10px_30px_rgba(0,0,0,0.3)]'} 
                                hover:scale-105 transition-all duration-500 cursor-pointer`}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, y: 30 },
                                visible: { opacity: 1, scale: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {/* Icon with Infinite Rotation */}
                            <motion.div 
                                className="w-16 h-16 mb-4"
                                animate={{ rotate: [0, 15, -15, 0] }}// Full rotation
                                transition={{ 
                                    repeat: Infinity, // Loops forever
                                    duration: 5, // Takes 5 seconds for a full loop
                                    ease: "linear" // Ensures smooth rotation
                                }}
                            >
                                <Icon className={`w-full h-full ${lightStyle}`} />
                            </motion.div>

                            {/* Text */}
                            <motion.p className={`text-lg font-medium mt-2 ${theme === 'dark' ? 'text-white' : 'text-[#1A202C]'}`}>
                                {title}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Experience;
