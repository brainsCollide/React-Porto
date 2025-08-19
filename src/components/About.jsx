import { useTheme } from "../API/contextAPI";
import { motion } from 'framer-motion';

function About() {
    const { theme } = useTheme();
    const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
    const highlight = 'text-[#00ADB5] font-semibold';

    const internships = [
        {
            date: "1 June – 1 August",
            company: "BetrBeta",
            position: "Fullstack Developer Intern",
            desc: "Contributed to production platforms using Next.js, enhanced SEO, built scalable components, and implemented automated testing with Cypress & Cucumber.",
        },
    ];

    const focusPhilosophy = 
    [
        {
            title: "Current Focus",
            content: "Deepening knowledge in backend scalability with Node.js and Docker, designing clean APIs, and mastering microservices architecture.",
        },
        {
            title: "Philosophy",
            content: "I focus on solving real problems with code, making tools that feel natural to use, and continuously learning from every project I build.",
        }
    ];

    return (
        <motion.div
            name="about"
            className={`w-full min-h-screen md:py-40 ${
                theme === 'dark'
                    ? 'bg-gradient-to-b from-gray-950 to-blue-950'
                    : 'bg-gradient-to-b from-gray-100 to-blue-100'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
        >
            <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold ${textColor}`}>
                    About Me
                </h2>
            </div>
            <div className="max-w-screen-lg mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">                
                {/* Left Column: Intro + Focus */}
                <motion.div
                    className="md:w-1/2 flex flex-col gap-12"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Intro Card */}
                    <motion.div
                        className={`rounded-xl p-6 shadow-2xl border-l-4 ${theme === 'dark' ? 'bg-gray-900 border-[#00ADB5]' : 'bg-white border-[#1A1A1A]'}`}
                        whileHover={{ scale: 1.03 }}
                    >
                        <p className={`text-lg md:text-xl ${textColor}`}>
                            Hi, I’m <span className={highlight}>Muhammad Fauzan</span>, a <span className={highlight}>Computer Engineering student</span> building modern full-stack apps that solve real-world problems.
                        </p>
                    </motion.div>

                    {/* Focus & Philosophy */}
                    <div>
                        <h3 className={`text-2xl font-semibold mb-6 ${textColor}`}>Focus & Philosophy</h3>
                        <div className="flex flex-col gap-6">
                            {focusPhilosophy.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-[#00ADB5] hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.6, delay: i * 0.3 }}
                                >
                                    <h4 className="text-[#00ADB5] font-bold text-lg">{item.title}</h4>
                                    <p className="text-gray-100 mt-2">{item.content}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Internships */}
                <motion.div
                    className="md:w-1/2 relative flex flex-col gap-12 pl-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className={`text-2xl font-semibold mb-6 ${textColor}`}>Internships</h3>

                    {/* Vertical line */}
                    <div className="absolute left-2 top-0 bottom-0 w-1 bg-[#00ADB5] rounded-full"></div>

                    {internships.map((intern, i) => (
                        <motion.div
                            key={i}
                            className="relative bg-gradient-to-br from-gray-900/80 to-blue-900/80 p-6 rounded-xl shadow-2xl border-l-4 border-[#00ADB5] hover:scale-105 hover:shadow-3xl transition-transform cursor-pointer ml-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            {/* Dot on vertical line */}
                            <div className="absolute -left-5 top-6 w-3 h-3 bg-[#00ADB5] rounded-full"></div>
                            <p className="text-gray-400 text-sm">📅 {intern.date}</p>
                            <h4 className="text-white text-lg font-bold mt-1">{intern.company}</h4>
                            <p className="text-[#00ADB5] font-semibold">{intern.position}</p>
                            <p className="text-gray-200 mt-2">{intern.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;
