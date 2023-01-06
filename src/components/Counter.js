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
        <div className='flex justify-center items-center flex-row flex-wrap px-6 sm:px-16'>
          <div className="flex-1 flex items-center justify-start">
            <h3 className="">
              {counterOn && (
                <Countup start={0} end={3800} duration={2} delay={0} />
              )}
              +
            </h3>
            <p className="">User Active</p>
          </div>
          <div className='flex-1 flex items-center justify-start'>
            <h3 className="">
              {counterOn && (
                <Countup start={0} end={230} duration={2} delay={0} />
              )}
              +
            </h3>
            <p className="">Trusted by Company</p>
          </div>
          <div className='flex-1 flex items-center justify-start flex-row'>
            <h3 className="">
              ${counterOn && (
                <Countup start={0} end={230} duration={2} delay={0} />
              )}
              M+
            </h3>
            Transaction
          </div>
         
          
         
        </div>
      </ScrollTriger>
    </>
  )
}

export default Counter
