import React from "react"
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"

function Hero() {
  return (
    <div>
      <div className='bg-primary flex justify-center items-start '>
        <div className='xl:max-w-[1280px] w-full'>
          <div id='home'className=" flex md:flex-row flex-col px-6 sm:px-16">
            <div className='flex-1 flex justify-center items-start flex-col xl:px-0 '>
              <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                <img className='w-[32px] h-[32px]' src={discount} alt='' />
                <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2'>
                  <span className='text-white'>20%</span> Discount For{" "}
                  <span className='text-white'>1 Month</span> Account
                </p>
              </div>
              <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                  The Next <br className='sm:block hidden' />{" "}
                  <span className='text-gradient'>Generation</span> {"  "}{" "}
                </h1>
                <div className='ss:flex hidden md:mr-4 mr-0'>
                  <GetStarted />
                </div>
              </div>
              <h1 className=' font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
                {" "}
                Payment Method
              </h1>
              <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                laborum accusamus et illo consequatur facilis distinctio, odit
                facilis distinctio, odit  facilis distinctio, odit
              </p>
            </div>
            <div className="flex flex-1 justify-center items-center md:my-0 my-10 relative">
                 <img className="w-[100%] h-[100%] relative z-[5]" src={robot} alt="" />
                 <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
                 <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
                 <div className="absolute z-0 w-[50%] h-[55%] right-50 bottom-20 blue__gradient"/>
            </div>
            <div className="ss:hidden flex justify-center items-center">
              <GetStarted/>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
