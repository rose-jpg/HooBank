import React from "react"
import { features } from "../data/data"
import Button from "../components/Button"

function Business() {
  return (
    <div className="mt-48">
      <div className='flex md:flex-row flex-col'>
        <div className='flex flex-col flex-1 justify-center items-start '>
          <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
            You do the business,
            <br className='sm:block hidden' /> we’ll handle the money.
          </h2>
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <div className='mt-10'>
            <Button />
          </div>
        </div>
        <div className='flex flex-col justify-center items-start flex-1 sm:mt-0 mt-3'>
          {features.map((item) => {
            return (
              <li
                key={item.id}
                className='flex flex-row justify-start items-center mb-3 feature-card p-6 rounded-[20px]'
              >
                <div className="w-[64px] h-[64px] flex justify-center items-center rounded-full bg-dimBlue">
                  <img
                    className='w-[32px] h-[32px] object-contain'
                    src={item.icon}
                    alt=''
                  />
                </div>
                <div className='flex flex-1 flex-col leading-[23px] ml-3 '>
                  <h4 className="text-white font-poppins font-semibold text-[18px]"> {item.title}</h4>
                  <p className='mt-1 text-dimWhite font-poppins font-normal text-[16px]'>{item.content}</p>
                </div>
              </li>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Business
