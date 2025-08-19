import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { useTheme } from '../API/contextAPI';
import { motion } from 'framer-motion';
import Particles from '../components/particles/particles';

function Experience() {
    const { theme } = useTheme();

    const techs = [
        { id: 1, src: SiJavascript, title: 'JavaScript', lightStyle: 'text-yellow-300' },
        { id: 2, src: SiMongodb, title: 'MongoDB', lightStyle: 'text-green-500' },
        { id: 3, src: SiTailwindcss, title: 'Tailwind CSS', lightStyle: 'text-sky-400' },
        { id: 4, src: FaReact, title: 'React', lightStyle: 'text-blue-500' },
        { id: 5, src: FaNodeJs, title: 'Node.js', lightStyle: 'text-green-400' },
        { id: 6, src: SiNextdotjs, title: 'Next.js', lightStyle: 'text-gray-100' },
    ];

    return (
        <motion.div
            name='experience'
            className={`relative z-0 overflow-hidden ${
                theme === 'dark' ? 'bg-gradient-to-b from-blue-950 to-[#09172E]' : 'bg-gradient-to-b from-[#f1f5f9] to-[#e2e8f0]'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
            {/* Particles Background */}
            <div className="absolute inset-0 z-0">
                <Particles
                    className="w-full h-full"
                    particleColors={['#9a07df']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.3}
                    moveParticlesOnHover={true}
                    particleHoverFactor={1}
                    cameraDistance={20}
                    sizeRandomness={1}
                    particleBaseSize={100}
                    alphaParticles={true}
                    disableRotation={false}
                />
            </div>

            {/* Main Content */}
            <div className="relative max-w-screen-lg mx-auto px-6 md:px-12 py-32 flex flex-col md:flex-row gap-12 z-10">
                
                {/* Left Column: Intro */}
                <motion.div
                    className="md:w-1/2 flex flex-col justify-center gap-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className={`text-4xl md:text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        My Technology Stack
                    </motion.h2>
                    <motion.p
                        className={`mt-4 text-lg md:text-xl font-light ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Here are the technologies I've worked with and love using in my development process.
                    </motion.p>
                </motion.div>

                {/* Right Column: Tech Grid */}
                <motion.div
                    className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {techs.map(({ id, src: Icon, title, lightStyle }, index) => (
                        <motion.div
                            key={id}
                            className={`flex flex-col items-center justify-center text-center w-32 h-32 p-4 rounded-xl cursor-pointer
                                bg-white/10 backdrop-blur-md shadow-lg ${theme === 'dark' ? 'shadow-[0px_10px_30px_rgba(255,255,255,0.1)]' : 'shadow-[0_10px_30px_rgba(0,0,0,0.3)]'}`}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: theme === 'dark'
                                    ? "0px 15px 35px rgba(255,255,255,0.2)"
                                    : "0px 15px 35px rgba(0,0,0,0.4)",
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <motion.div
                                className="w-12 h-12 mb-2"
                                animate={{ rotate: [0, 15, -15, 0], y: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            >
                                <Icon className={`w-full h-full ${lightStyle}`} />
                            </motion.div>
                            <p className={`text-sm md:text-base font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {title}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Experience;
