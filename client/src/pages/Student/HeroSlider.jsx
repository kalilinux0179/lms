import React from 'react'
import { Button } from '../../components/ui/button'

const HeroSlider = () => {
    return (
        <>
            <div className="bg-slate-200 dark:bg-orange-500 w-full min-h-[30rem] flex justify-center items-center pt-16">
                <div className="container mx-auto w-full h-full flex flex-col justify-center space-y-4">
                    <h1 className='dark:text-white light:text-black text-6xl font-bold text-center '>Get the Best Course For You</h1>
                    <p className='text-center text-2xl dark:text-white light:text-black font-bold'>Discover , Learn and Grow</p>
                    <form action="" onClick={(e) => e.preventDefault()}>
                        <div className='flex justify-center items-center mt-8'>
                            <input type="text"
                                className=' px-8 py-3 rounded-full bg-white min-w-96 rounded-e-none shadow-xl outline-none'
                                placeholder='Search Your Courses Here...'/>
                            <Button className='px-8 py-6 rounded-full rounded-s-none text-[17px] tracking-wider shadow-xl'>Search</Button>
                        </div>
                        <div className='flex justify-center items-center mt-8'>
                            <Button className='px-8 py-6 rounded-full text-[17px] tracking-wider shadow-xl'>Explore More</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default HeroSlider
