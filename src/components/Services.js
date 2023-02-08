import React from 'react'
import Button from "../components/Button"

function Services() {
  return (
    <div className='flex justify-center items-center sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] sm:px-16 px-6 sm:py-12 py-4 sm:my-16 my-6 box-shadow'>
        <div className='flex flex-col flex-1'>
            <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Let's try out our services now!</h2>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className='flex justify-center items-center sm:ml-10 ml-0 mt-10 sm:mt-0          '>
            <Button/>
        </div>
    </div>
  )
}

export default Services