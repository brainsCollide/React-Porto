import Css from '../assets/exp/css.svg'
import Js from '../assets/exp/javascript.svg'
import Mongo from '../assets/exp/mongodb.svg'
import React from '../assets/exp/react.svg'
import Html from '../assets/exp/html.svg'
import tw from '../assets/exp/Tailwind-CSS.svg'
import { useTheme } from '../API/contextAPI'


function Experience() {
    const { theme } = useTheme();

    const techs = [
        {
            id: 1,
            src: Html,
            title: 'HTML',
            lightStyle: 'shadow-orange-300',
            darkStyle: 'shadow-orange-500',
        },
        {
            id: 2,
            src: Css,
            title: 'CSS',
            lightStyle: 'shadow-blue-300',
            darkStyle: 'shadow-blue-500',
        },
        {
            id: 3,
            src: Js,
            title: 'JavaScript',
            lightStyle: 'shadow-yellow-300',
            darkStyle: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: Mongo,
            title: 'MongoDB',
            lightStyle: 'shadow-green-300',
            darkStyle: 'shadow-green-500',
        },
        {
            id: 5,
            src: tw,
            title: 'Tailwind CSS',
            lightStyle: 'shadow-blue-300',
            darkStyle: 'shadow-blue-500',
        },
        {
            id: 6,
            src: React,
            title: 'React',
            lightStyle: 'shadow-blue-400',
            darkStyle: 'shadow-blue-600',
        }
    ];


    return(
        <div 
        name='experience'
        className={`w-full ${theme === 'dark' ? 'bg-gradient-to-b from-blue-950 to-gray-950' : 'bg-gradient-to-b from-blue-100 to-gray-100'}`}
        >
            <div className='max-w-screen-lg mx-auto p-4 pt-32 flex flex-col
            justify-center w-full text-white'>
                <div>
                    <p className={`text-4xl font-medium border-b-4
                    border-gray-500 pb-2 inline ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                        Experience
                    </p>
                    <p className={`py-6 font-thin text-base ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                        These are the techs I've 
                        learnt and used with
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-10 px-12 sm:px-0">
                    {techs.map(({ id, src, title, lightStyle, darkStyle }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${
                                theme === 'dark' ? darkStyle : lightStyle
                            }`}
                        >
                            <img src={src} alt={title} className="w-20 mx-auto" />
                            <p className={`mt-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;