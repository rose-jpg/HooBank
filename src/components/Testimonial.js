import React from "react"
import { quotes } from "../assets"
import { feedback } from "../data/data"

function Testimonial() {
  return (
    <div>

      <div className='flex justify-center items-center md:flex-row flex-col mb-6 relative mt-48'>
        
        <div className='flex flex-1 justify-center items-start'>
          <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
            What people are <br className='sm:block hidden' /> saying about us
          </h2>
        </div>
        <div className='flex flex-1 justify-center items-start'>
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center sm:justify-start w-full feedback-container z-[1] relative'>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
        {feedback.map((item) => {
          return (
            <div className='feedback-card rounded-[20px] px-10 py-12 flex justify-between flex-col max-w-[370px] my-5'>
              <img
                className='w-[42px] h-[27px] object-contain'
                src={quotes}
                alt=''
              />
              <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>
                {item.content}
              </p>
              <div className="flex">
                <img className='w-[48px] h-[48px]' src={item.img} alt='' />
                <div className="flex flex-col ml-4">
                  <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white ">{item.name}</h4>
                  <p className="font-poppins font-semibold text-[16px] leading-[24px] text-dimWhite">{item.title}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonial
