import person from '../assets/person.png';
import { useTheme } from '../API/contextAPI';
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Hero() {
    const { theme } = useTheme(); // Access the current theme

    const handleDownload = () => {
        const fileUrl = 'https://drive.google.com/uc?export=download&id=1_q3uFD9KWxF-IQ-pEt-HdFNR8X7E8mJr';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div
            name='home'
            className={`h-full w-full ${theme === 'dark' ? 'bg-gradient-to-b from-blue-950 to-gray-950' : 'bg-gradient-to-b from-blue-200 to-gray-100'}`}
        >
            <div className='relative max-w-screen-lg mx-auto flex-col items-center justify-center h-full px-4 pt-20'>
                <div className='flex flex-col justify-center h-full'>
                    <div className='text-center py-20 relative'>
                        <img 
                            src={person} 
                            alt="avatar"
                            className={`mx-auto w-64 border ${theme === 'dark' ? 'border-gray-300 bg-blue-200' : 'border-gray-400 bg-blue-100'} rounded-full animate-float`}
                        />
                        <h3 className={`mt-5 animate-float ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            Hello there! I am Fauzan
                        </h3>
                    </div> 
                    <div className='text-center'>
                        <h2 className={`text-shadow-lg w-auto shadow-[#00df9a] text-4xl sm:text-7xl font-bold font-signature mb-4 capitalize ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            I'm a Full Stack Web Developer
                        </h2>
                        <p className={`md:text-lg sm:text-md font-light py-4 text-justify ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                            With a solid foundation in HTML, CSS, JavaScript, React, Node.js, and MongoDB, I'm dedicated to mastering full-stack development.
                            My aim is to build web applications that go beyond just meeting user expectations—they should delight and impress.
                            I'm always eager to take on new challenges and bring fresh, innovative ideas to the table.
                            Let's embark on this journey together!
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <button 
                            onClick={handleDownload}
                            className={`group text-center w-fit px-6 py-3 mt-5 my-2 font-medium rounded-md flex items-center justify-center flex-row ring ring-transparent hover:ring-[#00df9a] duration-700 cursor-pointer ${
                                theme === 'dark' ? 'bg-gradient-to-r from-cyan-950 to-slate-400 text-white' : 'bg-gradient-to-r from-cyan-200 to-slate-200 text-gray-800'
                            }`}
                        >
                            See my CV Here
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowForwardIos size={15} className='ml-1' />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
