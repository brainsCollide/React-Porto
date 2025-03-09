import { useTheme } from "../API/contextAPI";
import person from "../assets/person.png";
import { motion } from 'framer-motion';

function About() {
    const { theme } = useTheme();

    return (
        <motion.div
            name="about"
            className={`w-full py-20 md:py-40 ${
                theme === 'dark' ? 'bg-gradient-to-b from-gray-950 to-blue-950' : 'bg-gradient-to-b from-gray-100 to-blue-100'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
        >
            <div className="max-w-screen-lg mx-auto px-6 md:px-12">
                {/* Title Section */}
                <div className="text-center mb-12 md:mb-20">
                    <motion.p
                        className={`text-3xl md:text-5xl font-semibold border-b-4 inline-block pb-2 ${
                            theme === 'dark' ? 'border-[#00ADB5] text-white' : 'border-[#1A1A1A] text-gray-900'
                        }`}
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        About Me
                    </motion.p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
                    {/* Text Section */}
                    <motion.div 
                        className="md:w-1/2 text-base sm:text-lg font-light space-y-6 text-center md:text-left"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.p 
                            className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            I'm <span className="font-semibold text-[#00ADB5]">Muhammad Fauzan</span>, a Computer Engineering student skilled in full-stack web development. 
                            I specialize in building responsive web apps
                        </motion.p>

                        <motion.p 
                            className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            During my internship, I built production-ready apps with <span className="font-semibold text-[#00ADB5]">Next.js</span>, optimized SEO, and implemented BDD pipelines using <span className="font-semibold text-[#00ADB5]">Cypress</span> and <span className="font-semibold text-[#00ADB5]">Cucumber</span>. Currently, I'm diving into microservices with <span className="font-semibold text-[#00ADB5]">Node.js</span> and <span className="font-semibold text-[#00ADB5]">Docker</span>.
                            </motion.p>

                        <motion.p 
                            className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            I'm excited to tackle full-stack projects that push my expertise and contribute to innovative digital solutions.
                        </motion.p>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div 
                        className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 0.3,
                            type: "spring",
                            stiffness: 100
                        }}
                    >
                        <motion.img
                            src={person}
                            alt="Muhammad Fauzan"
                            className="rounded-full shadow-lg w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover shadow-teal-700"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 25px rgba(0, 173, 181, 0.7)"
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
