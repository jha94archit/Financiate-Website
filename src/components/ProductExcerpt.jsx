import React from 'react'
import PeImg from '../assets/productExcerpt.jpg'

const ProductExcerpt = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={PeImg} alt='Product Excerpt' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#8FE3CF] font-bold'>Financiate</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Personal Finance Management Tool</h1>
                <p className='md:text-sm'>
                    Financiate is a powerful personal finance management tool that helps you take control of your money. With its intuitive interface and comprehensive features, Financiate makes it easy to track your expenses, set budget goals, and plan for the future.
                    <br/>    
                    <br/>    
                    One of the key features of Financiate is its ability to automatically categorize your transactions, giving you a clear picture of where your money is going. You can also set up customizable budget categories to track your spending and ensure that you stay on track.
                    <br/>
                    <br/>
                    In addition to budgeting and expense tracking, Financiate also offers a range of financial planning tools. You can use the app to set and track savings goals, plan for big purchases, and even create a customized financial plan for the long term.
                    <br/>
                    <br/>
                    Whether you're looking to get a handle on your daily expenses or plan for the future, Financiate has you covered. With its user-friendly design and wide range of features, it's the perfect tool for anyone looking to improve their financial health. So, try Financiate today and take the first step towards financial success!
                </p>
                <button className='text-[#8FE3CF] w-[200px] rounded-md font-medium bg-[#0A2647] mx-auto my-6 py-3'>Get Started</button>
            </div>

        </div>
        <hr className='my-10' />
    </div>
  )
}

export default ProductExcerpt