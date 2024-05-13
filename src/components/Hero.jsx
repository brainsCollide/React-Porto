import person from '../assets/person.png';
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Hero() {
    return(
        <div
        name='home'
        className='h-screen w-full bg-gradient-to-br from-zinc-950 from-5%
        to-white relative'>
            <div className='text-center py-20'>
                    <img src={person} 
                    alt="avatar"
                    className='mx-auto w-64 h-auto aspect-ratio-16/9 border border-gray-300 rounded-full bg-blue-200 animate-float'
                    />
                    <h3 className='text-white text-md font-extrabold mt-5 animate-float'>Hello there!</h3>
            </div>

            <div className='max-w-screen-lg mx-auto my-10 text-center flex flex-col
                     items-center justify-center px-4'>
                <div>
                    <h2 className='text-gray-600 text-4xl font-bold font-signature mb-4 capitalize'>I'm a Full Stack Web Developer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus natus modi quam fuga voluptas pariatur sint, veritatis magnam? Cupiditate, perspiciatis! Expedita nesciunt molestias fugit placeat cupiditate maiores. Perferendis, perspiciatis nisi.</p>
                </div>
                <div>
                    <button className='group text-center w-fit px-6 py-3 my-2 rounded-md flex items-center justify-center flex-row 
                    bg-gradient-to-r from-cyan-950 to-slate-400 cursor-pointer'>Click Here
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineArrowForwardIos size={15} className='ml-1' />
                        </span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Hero