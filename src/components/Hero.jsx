import person from '../assets/person.png';
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Hero() {
    const handleDownload = () => {
        // URL to the file you want to download
        const fileUrl = 'https://drive.google.com/uc?export=download&id=1_q3uFD9KWxF-IQ-pEt-HdFNR8X7E8mJr'; // Update this path to your actual file location
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'cv.pdf'; // The name the file will be saved as
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div
        name='home'
        className='h-screen w-full bg-gradient-to-b from-blue-950
         to-gray-950'
        >
            <div className=' relative max-w-screen-lg mx-auto flex-col items-center
             justify-center h-full px-4 pt-48'>
                <div className='flex flex-col justify-center h-full'>
                <div className='text-center py-20 relative'>
                        <img src={person} 
                        alt="avatar"
                        className='mx-auto w-64 border border-gray-300 rounded-full bg-blue-200 animate-float'
                        />
                        <h3 className='text-white text-md font-medium mt-5 animate-float'>Hello there!</h3>
                    </div> 
                    <div className='text-center'>
                        <h2 className='text-white text-shadow-lg w-auto shadow-[#00df9a] text-4xl sm:text-7xl
                        font-bold font-signature mb-4 capitalize'
                        >
                            I'm a Full Stack Web Developer
                        </h2>
                        <p className='md:text-lg sm:text-md  text-white font-light py-4 text-justify'
                        >
                            With a solid foundation in HTML, CSS, JavaScript, React, Node.js, and MongoDB, I'm dedicated to mastering full-stack development.
                            My aim is to build web applications that go beyond just meeting user expectations—they should delight and impress.
                            I'm always eager to take on new challenges and bring fresh, innovative ideas to the table.
                            Let's embark on this journey together!
                        </p>
                    </div>
                    <div className=' flex flex-col justify-center items-center '>
                        <button 
                        onClick={handleDownload}
                        className='group text-center w-fit px-6 py-3 mt-5 my-2 font-medium rounded-md flex items-center justify-center flex-row 
                        ring ring-transparent hover:ring-[#00df9a] duration-700 bg-gradient-to-r from-cyan-950 to-slate-400 cursor-pointer'
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
    )
}

export default Hero