import React from "react"
import { apple, bill, google } from "../assets"

function Billing() {
  return (
    <div>
      <div className='flex md:flex-row flex-col-reverse mt-48 '>
        <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
          <img className="w-[100%] h-[100%] relative z-index-[5]" src={bill} alt="" />
        
         
        </div>
        <div className="flex-1 flex justify-center items-start flex-col">
          <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">Easily control your <br className="sm:block hidden"/>  billing & invoicing.</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
          <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
            <img className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" src={apple} alt="" />
            <img  className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" src={google} alt="" />
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing
