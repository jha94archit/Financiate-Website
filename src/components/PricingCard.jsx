import React from 'react'
import FreePlanImg from '../assets/free.jpg'
import ThreeMonthPlanImg from '../assets/threeMonths.jpg'
import SixMonthPlanImg from '../assets/sixMonths.jpg'
import YearPlanImg from '../assets/year.jpg'

const PricingCard = ({ planName, planPricing}) => {
  return (
    <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
        <img
            className='h-[70%] mx-auto mt-[-3rem]' 
            src={
                planName === '14 Days' 
                ? FreePlanImg 
                : planName === '3 Months'
                ? ThreeMonthPlanImg
                : planName === '6 Months'
                ? SixMonthPlanImg
                : planName === '1 Year'
                ? YearPlanImg
                : null
            } 
            alt="plan" 
        />
        <h2 className='text-2xl font-bold text-center py-8'>{planName}</h2>
        <p className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta sed, aliquid eaque voluptas dicta aperiam reprehenderit minus autem minima.</p>
        <p className='text-center text-2xl font-bold mt-4'>{planPricing}</p>
        <button className='text-[#8FE3CF] w-[200px] rounded-md font-medium bg-[#0A2647] mx-auto my-6 py-3'>Get Started</button>
    </div>
  )
}

export default PricingCard