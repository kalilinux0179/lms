import HeroSlider from '@/pages/Student/HeroSlider'
import React from 'react'
import Courses from './Student/Courses'

const Home = () => {
  return (
    <>
      <main className='min-h-screen pb-8'>
        <HeroSlider />
        <div className="container mx-auto">
          <Courses />
        </div>
      </main>
    </>
  )
}

export default Home
