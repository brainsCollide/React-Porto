import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../API/contextAPI';

function Footer() {
    const { theme } = useTheme();

    const social = [
        {
            id: 1,
            icon: <FaGithub />,
            title: 'GitHub',
            link: 'https://github.com/brainsCollide',
        },
        {
            id: 2,
            icon: <FaLinkedin />,
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/fauzan-asyraf/',
        },
        {
            id: 3,
            icon: <FaEnvelope />,
            title: 'Email',
            link: 'mailto:fauzanasyraf.syah@gmail.com', // Replace with your real email
        },
        {
            id: 4,
            icon: <FaWhatsapp />,
            title: 'WhatsApp',
            link: 'https://wa.me/905522704879', // Replace with your real WhatsApp number
        },
    ];

    return (
        <footer 
            name='contacts'
            className={`w-full py-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center">
                <p className="text-2xl font-medium mb-4">Let's Connect!</p>
                <div className="flex flex-wrap justify-center gap-6">
                    {social.map(({ id, icon, link, title }) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <div className={`p-3 rounded-full text-3xl transition-transform ease-in-out duration-300 group-hover:scale-110 
                                ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'}`}
                            >
                                {icon}
                            </div>
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
