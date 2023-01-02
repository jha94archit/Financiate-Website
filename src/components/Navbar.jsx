import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false)

    const handleNav = () => {
        setMobileNav(!mobileNav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full font-bold text-3xl text-[#8FE3CF]'>
            Financiate.
        </h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Product</li>
            <li className='p-4'>Pricing</li>
            <li className='p-4'>About</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {
                !mobileNav 
                        ? <AiOutlineMenu size={24}/> 
                        : <AiOutlineClose size={24}/>
            }
        </div>
        <div className={
            mobileNav
               ? 'fixed left-0 top-0 w-[60%] h-full border-r-[#144272] bg-[#112031] ease-in-out duration-500'
                : 'fixed left-[-100%]'
        }>
            <h1 className='w-full font-bold text-3xl text-[#8FE3CF] m-8'>Financiate.</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-[#E7F6F2]'>Home</li>
                <li className='p-4 border-b border-[#E7F6F2]'>Product</li>
                <li className='p-4 border-b border-[#E7F6F2]'>Pricing</li>
                <li className='p-4'>About</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar