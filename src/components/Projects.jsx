import project1 from '../assets/projects/project1.png';
import project2 from '../assets/projects/project2.png';
import project3 from '../assets/projects/project3.png';
import { useTheme } from '../API/contextAPI';
import { motion } from 'framer-motion';
import { EyeDropperIcon } from '@heroicons/react/24/solid';

function Projects() {
    const { theme } = useTheme();

    const projects = [
        {
            id: 1,
            title: 'Finance Tracker App',
            description: 'A sleek web application designed for efficient financial tracking, expense management, and insightful analytics.',
            techStack: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
            image: project1,
            demoLink: 'https://finance-tracker-nine-rosy.vercel.app/', 
            repoLink: 'https://github.com/brainsCollide/Dashboard', 
        },        
        {
            id: 2,
            title: "Company Profile",
            description: "A corporate website showcasing company information, products, services, clients, and contact details with a modern UI.",
            techStack: ["React", "Tailwind CSS", "Headless UI", "Vite"],
            image: project2,
            demoLink: "https://ms-web-five.vercel.app",
            repoLink: "https://github.com/brainsCollide/Mulia-web"
        },
        {
            id: 3,
            title: "CodeNext",
            description: "A service platform for requesting website development and digital solutions with a seamless experience and modern UI.",
            techStack: ["React", "Tailwind CSS"],
            image: project3,
            demoLink: "https://web-service-beryl.vercel.app/",
            repoLink: "https://github.com/brainsCollide/Web-Service"
        }
        
        // Add more projects as needed
    ];

    return (
        <motion.section
            name="projects"
            className={`w-full py-16 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-950 to-blue-950 text-white' : 'bg-gradient-to-b from-gray-100 to-blue-100 text-gray-800'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-screen-lg mx-auto px-4">
                <motion.div 
                    className='py-10 text-center'
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl font-semibold mb-8">Projects</h2>
                    <p className="text-xl font-thin mb-8">
                        Here are some of the projects I've worked on.
                    </p>
                </motion.div>

                <div className="grid gap-8 sm:grid-cols-2">
                    {projects.map(({ id, title, description, techStack, image, demoLink, repoLink }, index) => (
                        <motion.div
                            key={id}
                            className={`rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 duration-300 ${
                                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ 
                                duration: 0.5, 
                                delay: 0.2 + (index * 0.1) 
                            }}
                        >
                            {/* Image with overlay container */}
                            <div className="relative overflow-hidden group">
                                <img src={image} alt={title} className="w-full h-48 object-cover" />
                                
                                {/* Eye icon overlay */}
                                <motion.div 
                                    className={`absolute inset-0 flex items-center justify-center 
                                    ${theme === 'dark' ? 'bg-gray-900/70' : 'bg-gray-100/70'} 
                                    opacity-0 group-hover:opacity-100 group-active:opacity-100 
                                    transition-opacity duration-300 cursor-pointer`}
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    whileTap={{ opacity: 1 }}
                                    onClick={() => window.open(demoLink, '_blank')}
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    >
                                        <p className={`text-sm font-medium mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                            View Demo
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                                <p className="text-sm mb-4">{description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className={`px-2 py-1 rounded-full text-xs ${
                                                theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                                            }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <a
                                        href={demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-sm font-medium underline ${
                                            theme === 'dark' ? 'text-[#00df9a]' : 'text-blue-500'
                                        }`}
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-sm font-medium underline ${
                                            theme === 'dark' ? 'text-[#00df9a]' : 'text-blue-500'
                                        }`}
                                    >
                                        GitHub Repo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Projects;
