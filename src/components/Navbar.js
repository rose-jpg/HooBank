import React, { useState } from "react"
import { Link } from "react-router-dom"
import { logo, close, menu } from "../assets"
import { navLinks } from "../data/data"
function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full'>
          <nav className='w-full flex justify-between py-6 items-center'>
            <img className='w-[124px] h-[32px]' src={logo} alt='' />
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
              {navLinks.map((item) => {
                return (
                  <li className='text-[14px] font-poppins text-white mr-10' key={item.id}>
                    {item.title}
                  </li>
                )
              })}
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img
                className='w-[28px] h-[28px] object-contain'
                onClick={() => setToggle(!toggle)}
                src={toggle ? close : menu}
                alt=''
              />
              <div
                className={`${
                  toggle ? "flex" : "hidden"
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                 <ul className='list-none flex flex-col  justify-end items-center flex-1'>
              {navLinks.map((item) => {
                return (
                  <li className='text-[16px] text-white mb-4' key={item.id}>
                    {item.title}
                  </li>
                )
              })}
            </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
