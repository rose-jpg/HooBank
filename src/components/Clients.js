import React from "react"
import { airbnb, binance, coinbase, dropbox } from "../assets"
import { clients } from "../data/data"

function Clients() {
  return (
    <div>
      <div className='flex justify-center items-center my-4'>
        <div className="flex justify-center items-center flex-wrap w-full">
            {clients.map((item)=>{
                return(
                    <div className="flex flex-1 justify-center items-center sm:min-w-[192px] min-w-[120px]">
                    <img className="sm:w-[192px] w-[100px] object-contain" src={item.logo} alt="" />
                
              </div>
                )
            })}
     

        </div>
      </div>
    </div>
  )
}

export default Clients
