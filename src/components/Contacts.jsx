import linked from '../assets/linkedin.svg'
import github from '../assets/github.svg'



function Contacts() {

    const social = [
        {
            id:1,
            src:github,
            title:'GitHub',
            link:'https://github.com/brainsCollide'

        },
        {
            id:2,
            src:linked,
            title:'LinkedIn',
            link:'https://www.linkedin.com/in/fauzan-asyraf/'
        },
    ]

    return(
        <div
        name='contacts'
        className='bg-gradient-to-b from-black to-black w-full h-full'
        >
            <div className='max-w-screen-lg mx-auto flex flex-col
            justify-center w-full py-20 pl-4 text-white'>
                <div>
                    <p className='text-4xl pb-2 font-medium border-b-4 inline border-gray-500'>Contacts</p>
                </div>

                <div>
                    <p className='py-8 text-base '>
                        Let's connect!
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 text-center py-8 px-12'>
                {social.map(({ id, src, link, title }) => (
                    <a key={id} href={link} className='group'>
                    <div>
                        <img src={src} className='w-12 mx-auto border rounded-full bg-white transition-transform ease-in-out duration-300 group-hover:scale-110'/>
                        <p className='py-4 transition-transform ease-in-out duration-300 group-hover:-translate-y-1 group-hover:scale-110 hover:text-[#00df9a] '>{title}</p>
                    </div>
                    </a>
                ))}
                </div>

            </div>
        </div>
    )
}

export default Contacts;