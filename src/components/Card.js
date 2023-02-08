import React from 'react'
import { card } from '../assets'
import Button from './Button'

function Card() {
  return (
    <div>
      <div className='flex flex-col md:flex-row mt-48'>
        <div className='flex justify-center items-start flex-col flex-1'>
          <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Find a better card deal<br className='sm:block hidden'/> in few easy steps.</h2>
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>Arcu tortor, purus in mattis at sed integer faucibus.
             Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
             <div className='mt-10'>
            <Button />
          </div>

        </div>
        <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
        <img className='w-[100%] h-[100%]' src={card} alt="" />

      </div>
      </div>
     
    </div>
  )
}

export default Card