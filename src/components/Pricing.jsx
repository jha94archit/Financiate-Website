import React from 'react'
import PricingCard from './PricingCard'

const pricingInfo = [
    {
        name: '14 Days',
        price: '$0.00',
    },
    {
        name: '3 Months',
        price: '$21.00',
    },
    {
        name: '6 Months',
        price: '$36.00',
    },
    {
        name: '1 Year',
        price: '$60.00',
    },
]

const Pricing = () => {
  return (
    <div className='w-full px-4 bg-white flex flex-col justify-between'>
        <h1 className='mb-[6rem] pl-[8rem] text-4xl font-bold text-[#0A2647]'>Pricing</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 mb-12'>
            {
                pricingInfo.map((info) => (
                    <PricingCard key={info.name} planName={info.name} planPricing={info.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default Pricing