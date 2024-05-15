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
            <div className=' relative max-w-screen-lg pb-30  mx-auto flex-col items-center
             justify-center h-full px-4 z-10'>
                <div className='flex flex-col justify-center h-full'>
                <div className='text-center py-20 relative z-10'>
                        <img src={person} 
                        alt="avatar"
                        className='mx-auto w-64 border border-gray-300 rounded-full bg-blue-200 animate-float'
                        />
                        <h3 className='text-white text-md font-medium mt-5 animate-float'>Hello there!</h3>
                    </div> 
                    <div className='text-center'>
                        <h2 className='text-white text-shadow-lg w-auto shadow-yellow-400 text-4xl sm:text-7xl
                        font-bold font-signature mb-4 capitalize'
                        >
                            I'm a Full Stack Web Developer
                        </h2>
                        <p className='md:text-lg sm:text-md  text-white font-light py-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Necessitatibus natus modi quam fuga voluptas pariatur sint, veritatis magnam? 
                            Cupiditate, perspiciatis! Expedita nesciunt molestias fugit placeat cupiditate 
                            maiores. Perferendis, perspiciatis nisi.
                        </p>
                    </div>
                    <div className=' flex flex-col justify-center items-center '>
                        <button 
                        onClick={handleDownload}
                        className='group text-center w-fit px-6 py-3 mt-5 my-2 rounded-md flex items-center justify-center flex-row 
                        bg-gradient-to-r from-cyan-950 to-slate-400 cursor-pointer'
                        >
                            Portofolio
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