import { useTheme } from "../API/contextAPI";

function About() {
    const { theme } = useTheme();

    return (
        <div
            name="about"
            className={`w-full ${theme === 'dark' ? 'bg-gradient-to-b from-gray-950 to-blue-950' : 'bg-gradient-to-b from-gray-100 to-blue-100'}`}
        >
            <div className="max-w-screen-lg px-4 pt-32 mx-auto text-justify flex flex-col justify-center w-full h-full">
                <div>
                <p className={`text-4xl font-medium border-b-4 inline border-gray-500 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                    About
                </p>

                </div>

                <p className={`md:text-xl pt-10 font-thin sm:text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                    I’m Muhammad Fauzan, a Computer Engineering student skilled in full-stack web development with expertise in HTML, CSS, JavaScript, React, Node.js, and MongoDB.
                    I specialize in building responsive web applications and solving complex challenges.
                    Recently, I deepened my knowledge of React and Tailwind CSS, creating interactive interfaces and efficient, utility-first designs.
                </p>

                <br />
                <p className={`md:text-xl font-thin sm:text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                In my recent internship, I deployed apps with Next.js and Vercel, managed SEO, and used Behavior-Driven Development practices with Cypress and Cucumber.
                Currently, I’m preparing to build microservices with Node.js and Docker, ready to tackle challenging projects that expand my full-stack expertise.
                </p>
            </div>
        </div>
    );
}

export default About;
