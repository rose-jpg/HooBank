import React from "react"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../data/data"

function Footer() {
  return (
    <div className='flex justify-center items-center sm:py-16 py-6 flex-col'>
      <div className='flex justify-center items-start md:flex-row flex-col mb-8 w-full'>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img
            src={logo}
            className='w-[266px] h-[72px] object-contain'
            alt=''
          />
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310px]'>
            A new way to make payment, easy, reliable and secure
          </p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((item) => (
            <div className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{item.title}</h4>
              <ul className="mt-4">
             {item.links.map((item)=>{
              return(
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">{item.name}</li>
              )
             })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex md:flex-row w-full justify-between items-center flex-col pt-6 border-t-[1px] border-t-[#3F3E45] ">
        <p className="font-poppins font-medium text-[18px] leading-[27px] text-white">2023 Hookbank. All Rights Reserved</p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((item)=>{
            return(
              <div>
                <img className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" src={item.icon} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer
