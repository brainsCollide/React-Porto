import { useTheme } from "../API/contextAPI";
import person from "../assets/person.png";

function About() {
    const { theme } = useTheme();

    return (
        <div
            name="about"
            className={`w-full py-20 md:py-40 ${
                theme === 'dark' ? 'bg-gradient-to-b from-gray-950 to-blue-950' : 'bg-gradient-to-b from-gray-100 to-blue-100'
            }`}
        >
            <div className="max-w-screen-lg mx-auto px-6 md:px-12">
                {/* Title Section */}
                <div className="text-center mb-12 md:mb-20">
                    <p
                        className={`text-3xl md:text-5xl font-semibold border-b-4 inline-block pb-2 ${
                            theme === 'dark' ? 'border-[#00ADB5] text-white' : 'border-[#1A1A1A] text-gray-900'
                        }`}
                    >
                        About Me
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
                    {/* Text Section */}
                    <div className="md:w-1/2 text-base sm:text-lg font-light space-y-6 text-center md:text-left">
                        <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            I’m <span className="font-semibold text-[#00ADB5]">Muhammad Fauzan</span>, a Computer Engineering student skilled in full-stack web development. 
                            I specialize in building responsive web apps with technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB.
                        </p>

                        <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            Recently, I've honed my skills in <span className="font-semibold text-[#00ADB5]">React</span> and <span className="font-semibold text-[#00ADB5]">Tailwind CSS</span>, 
                            crafting interactive UI and embracing utility-first design. I focus on clean code and performance optimization.
                        </p>

                        <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            During my internship, I deployed apps with <span className="font-semibold text-[#00ADB5]">Next.js</span>, managed SEO, and worked with <span className="font-semibold text-[#00ADB5]">Cypress </span> 
                            and <span className="font-semibold text-[#00ADB5]">Cucumber</span> for BDD. I’m now exploring microservices with <span className="font-semibold text-[#00ADB5]">Node.js</span> and <span className="font-semibold text-[#00ADB5]">Docker</span>.
                        </p>

                        <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            I'm excited to tackle full-stack projects that push my expertise and contribute to innovative digital solutions.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
                        <img
                            src={person}
                            alt="Muhammad Fauzan"
                            className="rounded-full shadow-lg w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover animate-float shadow-teal-700"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
