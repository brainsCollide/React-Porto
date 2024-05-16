function About() {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-950 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 pt-40 mx-auto flex flex-col justify-center w-full h-full">
                <div>
                <p className="text-4xl font-medium border-b-4 inline border-gray-500">
                    About
                </p>

                </div>

                <p className="md:text-xl pt-10 font-thin sm:text-sm ">
                    A dedicated Computer Engineering student skilled in web development, with expertise in HTML, CSS,
                    JavaScript, React, Node.js, and MongoDB. Demonstrated in developing responsive web applications and
                    solving complex problems. Aspiring to become a Full Stack Web Developer, seeking challenging roles to
                    expand skills in front-end and back-end technologies, contribute to innovative projects, and grow
                    professionally.
                </p>

                <br />
                <p className="md:text-xl font-thin sm:text-sm">
                Recently, I have completed comprehensive learning modules on React and Tailwind CSS. With React,
                I have gained proficiency in building dynamic and interactive user interfaces, utilizing hooks, managing state,
                and integrating with various APIs. My experience with Tailwind CSS has equipped me with the skills to create
                highly customizable and responsive designs efficiently,
                leveraging utility-first principles and modern CSS techniques.
                </p>
            </div>
        </div>
    );
}

export default About;
