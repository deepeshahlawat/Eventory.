import React from 'react'
import Section from './Segment'
import banner from '../assets/hack1.png'
import { Gradient } from './design/Services';

const Events = () => {
    return (

        <Section id="events">
            <div class="rounded p-4 shadow-lg transition-all duration-550 hover:scale-110">
                <div class="flex flex-col gap-2">
                    <div className='container'>
                        <div className='relative'>
                            <div className='relative z-1 flex items-center h-[9rem] lg:h-[66vh] mb-5 p-5 border border-n-1/10 rounded-3xl overflow-hidden lg:flex-col lg:justify-end lg:pt-20 lg:pb-0 bg-white/5 backdrop-blur-xl shadow-lg'>
                                <div className='absolute top-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto'>
                                    <img src={banner} alt="bg1" className='w-full h-full object-cover md:object-right' />
                                </div>
                                <div className='relative z-1 max-w-[17rem] max-sm:m-auto max-sm:mb-2 sm:ml-auto' >
                                    {/* <h3 className='h3 mb-2 w-[18rem] text-center font-bold'>My hackathon</h3>
                            <p className='body-2 mb-[3rem] text-n-3 w-[18rem] text-center'> this is a 36hr hackathon with many themes and problem statements</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Section>

    )
}

export default Events