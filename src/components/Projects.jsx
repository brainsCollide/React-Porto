import project1 from '../assets/projects/project1.png';
import { useTheme } from '../API/contextAPI';

function Projects() {
    const { theme } = useTheme();

    const projects = [
        {
            id: 1,
            title: 'Finance App',
            description: 'A web app for managing and tracking financial tasks efficiently.',
            techStack: ['React', 'Node.js', 'MongoDB'],
            image: project1,
            demoLink: 'https://example.com/project-one',
            repoLink: 'https://github.com/brainsCollide/Dashboard',
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'An e-commerce site with product filtering and checkout.',
            techStack: ['Next.js', 'Tailwind CSS', 'Stripe API'],
            demoLink: 'https://example.com/project-two',
            repoLink: 'https://github.com/username/project-two',
        },
        // Add more projects as needed
    ];

    return (
        <section
            name="projects"
            className={`w-full py-16 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-950 to-blue-950 text-white' : 'bg-gradient-to-b from-gray-100 to-blue-100 text-gray-800'}`}
        >
            <div className="max-w-screen-lg mx-auto px-4">
                <h2 className="text-4xl font-medium border-b-4 border-gray-500 inline-block mb-8">Projects</h2>
                <p className="text-base font-thin mb-8">
                    Here are some of the projects I’ve worked on recently.
                </p>

                <div className="grid gap-8 sm:grid-cols-2">
                    {projects.map(({ id, title, description, techStack, image, demoLink, repoLink }) => (
                        <div
                            key={id}
                            className={`rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 duration-300 ${
                                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                            }`}
                        >
                            <img src={image} alt={title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                                <p className="text-sm mb-4">{description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {techStack.map((tech, index) => (
                                        <span
                                            key={index}
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
