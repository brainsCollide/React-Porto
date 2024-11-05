import linked from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import { useTheme } from '../API/contextAPI';

function Footer() {
    const { theme } = useTheme();

    const social = [
        {
            id: 1,
            src: github,
            title: 'GitHub',
            link: 'https://github.com/brainsCollide',
        },
        {
            id: 2,
            src: linked,
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/fauzan-asyraf/',
        },
    ];

    return (
        <footer 
        name='contacts'
        className={`w-full py-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center">
                <p className="text-2xl font-medium mb-4">Let's Connect!</p>
                <div className="flex space-x-8">
                    {social.map(({ id, src, link, title }) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <img
                                src={src}
                                alt={title}
                                className={`w-10 h-10 border rounded-full transition-transform ease-in-out duration-300 group-hover:scale-110 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
                            />
                            <p className={`mt-2 text-sm transition-colors duration-300 group-hover:text-[#00df9a] ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
                <p className={`mt-6 text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                    © 2024 Fauzan Asyraf. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
