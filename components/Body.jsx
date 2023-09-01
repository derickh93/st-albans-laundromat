import React from 'react'

function Body() {
  return (
    <div className="hide-on-small lg:col-span-3 flex">
    <div className="grid grid-cols-2 gap-3 font-bold text-center text-white text-2xl w-full">
      <div
        id="hover-div-1"
        className="bg-[#0CC0DF] tiles flex flex-col h-full justify-center items-center"
      >
        WASH & <br></br>WIN PRIZES
      </div>
      <div
        id="hover-div-2"
        className="bg-[#FF66C4] tiles flex flex-col h-full justify-center items-center"
      >
        SELF <br></br>SERVICE
      </div>
      <div
        id="hover-div-3"
        className="bg-[#CB6CE6] tiles flex flex-col h-full justify-center items-center"
      >
        DROP OFF<br></br>SERVICE
      </div>
      <div
        id="hover-div-4"
        className="bg-[#FF914D] tiles flex flex-col h-full justify-center items-center"
      >
        PICK UP AND <br></br>DELIVERY
      </div>
      <div className="bg-[#6422B8] tiles flex flex-col h-full justify-center items-center">
        OUR LOCATION<br></br>18005 Linden Blvd<br></br>Queens, NY 11434
        <br></br>(929) 933-7507
      </div>
      <div className="bg-[#FFB859] tiles flex flex-col h-full justify-center items-center">
        OPEN 7 DAYS<br></br>8AM - 8PM
      </div>
    </div>
  </div>  )
}

export default Body