import Css from '../assets/exp/css.svg'
import Js from '../assets/exp/javascript.svg'
import Mongo from '../assets/exp/mongodb.svg'
import React from '../assets/exp/react.svg'
import Html from '../assets/exp/html.svg'
import tw from '../assets/exp/Tailwind-CSS.svg'




function Experience() {

    const techs = [
        {
            id:1,
            src: Html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: Css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: Js,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: Mongo,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id:5,
            src: tw,
            title: 'Tailwindcss',
            style: 'shadow-blue-500'
        },
        {
            id:6,
            src: React,
            title: 'React',
            style: 'shadow-blue-600'
        },
    ]

    return(
        <div 
        name='experience'
        className='bg-gradient-to-b from-black from-25% via-gray-950 to-black
        w-full h-screen'
        >
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col
            justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl  font-medium border-b-4
                    border-gray-500 pb-2 inline'>
                        Experience
                    </p>
                    <p className='py-6 font-thin'>
                        These are the techs I've 
                        learnt and used with
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3
                gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        techs.map(({id, src, title, style }) => (
                            <div key={id} 
                            className={`shadow-md hover:scale-105 duration-500
                            py-2 rounded-lg ${style}`}
                            >
                                <img src={src} alt='html' className='w-20 mx-auto'/>
                                <p className='mt-4'>{title} </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience;