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
        <motion.div 
            name='experience'
            className={`w-full h-full ${theme === 'dark' ? 'bg-gradient-to-b from-blue-950 to-[#09172E]' : 'bg-gradient-to-b from-[#f1f5f9] to-[#e2e8f0]'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
            <div className='max-w-screen-lg mx-auto p-8 py-44 flex flex-col justify-center w-full'>
                <motion.div 
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.p 
                        className={`text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#1A202C]'}`}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        My Technology Stack
                    </motion.p>
                    <motion.p 
                        className={`text-xl mt-4 font-thin ${theme === 'dark' ? 'text-white' : 'text-[#4A5568]'}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Here are the technologies I've worked with and love using in my development process.
                    </motion.p>
                </motion.div>

                <div className="w-full flex flex-wrap justify-center items-center gap-8 py-10">
                    {techs.map(({ id, src: Icon, title, lightStyle }, index) => (
                        <motion.div
                            key={id}
                            className={`flex flex-col items-center justify-center text-center
                                w-40 h-40  p-6 rounded-lg drop-shadow-lg 
                                ${theme === 'dark' ? 'shadow-[0px_10px_30px_rgba(255,255,255,0.1)]' : 'shadow-[0_10px_30px_rgba(0,0,0,0.3)]'} 
                                cursor-pointer`}
                            initial={{ opacity: 0, scale: 0.5, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                                // Specific hover settings to make it more responsive
                                hover: { 
                                    duration: 0.1, 
                                    delay: 0 
                                },
                                // Specific tap settings 
                                tap: { 
                                    duration: 0.1, 
                                    delay: 0 
                                }
                            }}
                            whileHover={{ 
                                scale: 1.1,
                                boxShadow: theme === 'dark' 
                                    ? "0px 15px 35px rgba(255,255,255,0.2)"
                                    : "0px 15px 35px rgba(0,0,0,0.4)"
                            }}
                        >
                            {/* Icon with Hover Animation */}
                            <motion.div 
                                className="w-16 h-16 mb-4"
                                animate={{ 
                                    rotate: [0, 10, -10, 0],
                                    y: [0, -5, 0]
                                }}
                                transition={{ 
                                    repeat: Infinity,
                                    duration: 3 + (index * 0.5),
                                    ease: "easeInOut"
                                }}
                            >
                                <Icon className={`w-full h-full ${lightStyle}`} />
                            </motion.div>

                            {/* Text */}
                            <p className={`text-lg font-medium mt-2 ${theme === 'dark' ? 'text-white' : 'text-[#1A202C]'}`}>
                                {title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Experience;
