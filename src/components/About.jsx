import { useTheme } from "../API/contextAPI";
import person from "../assets/person.png";
import { motion } from 'framer-motion';

function About() {
    const { theme } = useTheme();

    const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
    const highlight = 'text-[#00ADB5] font-semibold';

    return (
        <motion.div
            name="about"
            className={`w-full h-full md:py-40 ${
                theme === 'dark'
                    ? 'bg-gradient-to-b from-gray-950 to-blue-950'
                    : 'bg-gradient-to-b from-gray-100 to-blue-100'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
        >
            <div className="max-w-screen-lg mx-auto px-6 md:px-12">
                {/* Section Title */}
                <div className="text-center mb-12 md:mb-20">
                    <motion.h2
                        className={`text-3xl md:text-5xl font-semibold border-b-4 inline-block pb-2 ${
                            theme === 'dark' ? 'border-[#00ADB5] text-white' : 'border-[#1A1A1A] text-gray-900'
                        }`}
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        About Me
                    </motion.h2>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Section */}
                    <motion.div
                        className="md:w-2/3 space-y-8"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Identity Card */}
                        <div className={`rounded-xl p-6 shadow-lg border-l-4 ${theme === 'dark' ? 'bg-gray-900 border-[#00ADB5]' : 'bg-white border-[#1A1A1A]'}`}>
                            <p className={`text-lg md:text-xl ${textColor}`}>
                                Hi, I’m <span className={highlight}>Muhammad Fauzan</span>, a <span className={highlight}>Computer Engineering student</span> with practical experience building modern, full-stack apps that solve real-world problems.
                            </p>
                        </div>

                 
                        {/* Timeline Details */}
                        <div className="space-y-6 border-l-2 pl-6 border-[#00ADB5]">
                            {/* Internship Experience */}
                            <div className="relative">
                                <div className="absolute w-3 h-3 bg-[#00ADB5] rounded-full -left-[0.85rem] top-1.5" />
                                <p className={`${textColor}`}>
                                    <span className={highlight}>Internship @ BetrBeta</span> — Contributed to real-world production platforms using <span className={highlight}>Next.js</span>. I enhanced SEO strategies, built scalable components, and implemented automated testing with <span className={highlight}>Cypress</span> and <span className={highlight}>Cucumber</span>.
                                </p>
                            </div>

                            {/* Backend Focus */}
                            <div className="relative">
                                <div className="absolute w-3 h-3 bg-[#00ADB5] rounded-full -left-[0.85rem] top-1.5" />
                                <p className={`${textColor}`}>
                                    <span className={highlight}>Current Focus</span> — I’m exploring backend scalability using <span className={highlight}>Node.js</span> and <span className={highlight}>Docker</span>, designing clean APIs and learning microservice architecture principles.
                                </p>
                            </div>

                            {/* Personal Philosophy */}
                            <div className="relative">
                                <div className="absolute w-3 h-3 bg-[#00ADB5] rounded-full -left-[0.85rem] top-1.5" />
                                <p className={`${textColor}`}>
                                    <span className={highlight}>Philosophy</span> — I'm passionate about writing clean, maintainable code, building intuitive user experiences, and developing digital products that have real impact. Every project is an opportunity to grow and contribute meaningfully.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        className="md:w-1/3 flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            type: "spring",
                            stiffness: 100,
                        }}
                    >
                        <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-2xl">
                            <motion.img
                                src={person}
                                alt="Muhammad Fauzan"
                                className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover shadow-md"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 25px rgba(0, 173, 181, 0.7)",
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
