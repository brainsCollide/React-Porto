import { useTheme } from '../API/contextAPI';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import project1 from '../assets/projects/project1.png';
import project2 from '../assets/projects/project2.png';
import project3 from '../assets/projects/project3.png';

function Projects() {
    const { theme } = useTheme();

    const projects = [
        {
            id: 1,
            title: 'Finance Tracker App',
            description: 'Efficient financial tracking, expense management, and analytics.',
            techStack: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
            image: project1,
            demoLink: 'https://finance-tracker-nine-rosy.vercel.app/',
            repoLink: 'https://github.com/brainsCollide/Dashboard',
        },
        {
            id: 2,
            title: "Company Profile",
            description: "Corporate website showcasing company info, products, services, and contact.",
            techStack: ["React", "Tailwind CSS", "Headless UI", "Vite"],
            image: project2,
            demoLink: "https://ms-web-five.vercel.app",
            repoLink: "https://github.com/brainsCollide/Mulia-web"
        },
        {
            id: 3,
            title: "CodeNext",
            description: "Service platform for requesting website development with modern UI.",
            techStack: ["React", "Tailwind CSS"],
            image: project3,
            demoLink: "https://web-service-beryl.vercel.app/",
            repoLink: "https://github.com/brainsCollide/Web-Service"
        }
    ];

    return (
        <motion.section
            name="projects"
            className={`w-full py-16 ${
                theme === 'dark'
                    ? 'bg-gradient-to-b from-gray-950 to-blue-950 text-white'
                    : 'bg-gradient-to-b from-gray-100 to-blue-100 text-gray-800'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-screen-lg mx-auto px-4">
                <motion.div className='py-10 text-center'>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
                    <p className="text-xl md:text-2xl font-thin mb-12">
                        A showcase of projects with modern tech and clean UI.
                    </p>
                </motion.div>

                {/* Desktop: Two-column magazine style */}
                <div className="hidden md:flex flex-col gap-16">
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={proj.id}
                            className={`flex flex-col md:flex-row items-center gap-8 ${
                                idx % 2 === 0 ? '' : 'md:flex-row-reverse'
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: idx * 0.2 }}
                        >
                            <motion.img
                                src={proj.image}
                                alt={proj.title}
                                className="md:w-1/2 rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                onClick={() => window.open(proj.demoLink, '_blank')}
                            />

                            <motion.div className={`md:w-1/2 space-y-4 p-4 md:p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
    <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{proj.title}</h3>
    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{proj.description}</p>
    <div className="flex flex-wrap gap-2">
        {proj.techStack.map((tech, i) => (
            <span
                key={i}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                    theme === 'dark' ? 'bg-[#00ADB5]/20 text-white' : 'bg-[#00ADB5]/20 text-gray-900'
                }`}
            >
                {tech}
            </span>
        ))}
    </div>
    <div className="flex gap-4 mt-2">
        <a
            href={proj.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg font-medium transition ${
                theme === 'dark'
                    ? 'bg-[#00ADB5] text-white hover:bg-[#00c1d0]'
                    : 'bg-[#00ADB5] text-white hover:bg-[#00c1d0]'
            }`}
        >
            Live Demo
        </a>
        <a
            href={proj.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg font-medium border transition ${
                theme === 'dark'
                    ? 'border-[#00ADB5] text-white hover:bg-[#00ADB5]/30'
                    : 'border-[#00ADB5] text-gray-900 hover:bg-[#00ADB5]/20'
            }`}
        >
            GitHub Repo
        </a>
    </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                <div className="md:hidden">
                <Swiper
                    spaceBetween={16}
                    slidesPerView={1}
                    loop
                    grabCursor
                    speed={500}
                >
                    {projects.map((proj, idx) => (
                    <SwiperSlide key={proj.id}>
                        <motion.div
                        className={`space-y-3 p-4 rounded-2xl shadow-lg backdrop-blur-md transition-colors ${
                            theme === 'dark' ? 'bg-white/10 text-white' : 'bg-white/10 text-gray-800'
                        }`}
                        >
                        <img
                            src={proj.image}
                            alt={proj.title}
                            className="rounded-2xl w-full object-cover cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => window.open(proj.demoLink, '_blank')}
                        />
                        <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {proj.title}
                        </h3>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {proj.techStack.map((tech, i) => (
                            <span
                                key={i}
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                theme === 'dark' ? 'bg-[#00ADB5]/20 text-white' : 'bg-[#00ADB5]/20 text-gray-900'
                                }`}
                            >
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-2 justify-between">
                            <a
                            href={proj.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-3 py-1 rounded-lg font-medium transition ${
                                theme === 'dark' ? 'bg-[#00ADB5] text-white hover:bg-[#00c1d0]' : 'bg-[#00ADB5] text-white hover:bg-[#00c1d0]'
                            }`}
                            >
                            Demo
                            </a>
                            <a
                            href={proj.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-3 py-1 rounded-lg border font-medium transition ${
                                theme === 'dark' ? 'border-[#00ADB5] text-white hover:bg-[#00ADB5]/30' : 'border-[#00ADB5] text-gray-900 hover:bg-[#00ADB5]/20'
                            }`}
                            >
                            Repo
                            </a>
                        </div>
                        </motion.div>
                    </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            </div>
        </motion.section>
    );
}

export default Projects;
