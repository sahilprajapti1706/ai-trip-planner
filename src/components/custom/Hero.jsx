import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-52 my-10 gap-10'>
        <h1 className='font-extrabold text-[50px] text-center'>
            <span className='text-[#f56551]'>Discover Your Next Journey with AI :</span><br />
            Personalized Itineraries at Your Fingertips
        </h1>
        <p className='text-xl text-gray-500 text-center px-20'>
            Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget
        </p>
        <Link to={"/create-trip"}>
            <Button>Get Started</Button>
        </Link>
    </div>
  )
}

export default Hero