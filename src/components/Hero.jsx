import React from 'react'
import HeroImg from '../assets/finhero.jpg'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center'>
            <img
                className='rounded-full sm:mx-0 mx- my-2 sm:w-[500px] w-[300px]' 
                src={HeroImg} 
                alt="Personal Finance planning" 
            />
            <h1 className='md:text-7xl sm:text-6xl text-3xl font-bold md:py-6  md:mx-0 sm:mx-0 mx-2'>
                Simplify your financial life with &nbsp;
                <span className='text-[#8FE3CF]'>
                    Financiate.
                </span> 
            </h1>
            <p className='text-[#D8D8D8] sm:text-lg text-sm md:mx-0 sm:mx-0 mx-3 sm:my-0 my-2'>
                Financiate is a powerful personal finance management tool that helps you take control of your money by
                making it easier to track your expenses, set budget goals, and plan for the future. 
            </p>
            <button className='bg-[#8FE3CF] w-[200px] mt-4 rounded-md py-2 text-[#0A2647]  md:mx-0 sm:mx-0 mx-3'>
                Explore
            </button>
        </div>
    </div>
  )
}

export default Hero