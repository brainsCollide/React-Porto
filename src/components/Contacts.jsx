import linked from '../assets/linkedin.svg'
import github from '../assets/github.svg'



function Contacts() {

    const social = [
        {
            id:1,
            src:github,
            title:'GitHub',
            link:'linkedin.com/in/fauzan-asyraf'

        },
        {
            id:2,
            src:linked,
            title:'LinkedIn',
            link:'linkedin.com/in/fauzan-asyraf'


        },
    ]

    return(
        <div
        name='contacts'
        className='bg-gradient-to-b from-black from-25% via-gray-950 to-black
        w-full h-screen'
        >
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col
            justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl'>Contacts</p>
                </div>

                <div>
                    <p>
                        Let's connect!
                    </p>
                </div>

                <div className='w-full grid grid-cols-2
                text-center py-8 px-12'>
                    {
                        social.map(({id, src, title }) => (
                            <div key={id}>
                                <img src={src} className=' w-12 mx-auto border rounded-full bg-white'/>
                                <p className='py-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Contacts;