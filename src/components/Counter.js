import React, { useState } from "react"
import Countup from "react-countup"
import ScrollTriger from "react-scroll-trigger"

function Counter() {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <>
      <ScrollTriger className="text-white"
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className='flex justify-center items-center sm:flex-row flex-col '>
          <div className="flex-1 flex items-center xs:justify-start justify-center m-3">
            <h4 className="xs:text-[40px] text-[30px] text-white mr-2 font-poppins">
              {counterOn && (
                <Countup start={0} end={3800} duration={2} delay={0} />
              )}
            +
            </h4>
            <p className="text-gradient xs:text-[20px] text-[15px] uppercase font-poppins font-normal">User Active</p>
          </div>
          <div className='flex-1 flex items-center xs:justify-start justify-center m-3'>
            <h4 className="xs:text-[40px] text-[30px] text-white mr-2 font-poppins">
              {counterOn && (
                <Countup start={0} end={230} duration={2} delay={0} />
              )}
              +
            </h4>
            <p className="text-gradient xs:text-[20px] text-[15px] uppercase font-poppins font-normal">Trusted by Company</p>
          </div>
          <div className='flex-1 flex xs:justify-start justify-center items-center flex-row m-3'>
            <h4 className=" text-white xs:text-[40px] text-[30px] mr-2 font-poppins">
              ${counterOn && (
                <Countup start={0} end={230} duration={2} delay={0} />
              )}
              M+
            </h4>
            <p className="text-gradient uppercase xs:text-[20px] text-[15px] font-poppins font-normal">Transaction</p>
          </div>
         
          
         
        </div>
      </ScrollTriger>
    </>
  )
}

export default Counter
