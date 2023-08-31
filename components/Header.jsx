import React from 'react'

function Header() {
    function toggleMenu() {
        const menu = document.getElementById("tham-menu-div");
        menu.classList.toggle("tham-menu");
      }
  return (
    <div className="absolute transform top-0 text-center pt-10 font-bold">
    <span className="title text-[#004AAD] text-7xl drop-shadow-lg">
      St. Albans
    </span>
    <br />
    <span className="text-[#FFDE59] text-5xl drop-shadow-lg">
      Laundromat
    </span>
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="relative group delay-0">
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
            <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

            <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
              <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
              <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
            </div>
          </div>
        </div>
      </button>
    </div>
    <div
      id="tham-menu-div"
      className="grid grid-cols-1 gap-1 font-bold text-center text-white text-2xl w-full tham-menu"
    >
      <div
        className="bg-[#0CC0DF] tiles flex flex-col h-full justify-center items-center opacity-80 px-4 py-3 delay-0	"
        role="alert"
      >
        <p className="font-bold"> WASH & WIN PRIZES</p>
        <p className="text-sm">
          Enter our prize raffle each time you wash with us.
        </p>
      </div>

      <div
        className="bg-[#FF66C4] tiles flex flex-col h-full justify-center items-center opacity-80 px-4 py-3"
        role="alert"
      >
        <p className="font-bold"> SELF SERVICE</p>
        <p className="text-sm">
          Available everyday. Last wash is at 7pm.
        </p>
      </div>

      <div
        className="bg-[#CB6CE6]  tiles flex flex-col h-full justify-center items-center opacity-80 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">DROP OFF SERVICE</p>
        <p className="text-sm">
          Drop off available daily. Come Monday - Thursday for special
          pricing.
        </p>
      </div>
      <div
        className="bg-[#FF914D]  tiles flex flex-col h-full justify-center items-center opacity-80 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">PICK UP AND DELIVERY</p>
        <p className="text-sm">Coming soon!</p>
      </div>
      <div
        className="bg-[#6422B8]  tiles flex flex-col h-full justify-center items-center opacity-80 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">OUR LOCATION</p>
        <p className="text-sm">
          OUR LOCATION<br></br>18005 Linden Blvd<br></br>Queens, NY
          11434
          <br></br>(929) 933-7507
        </p>
      </div>
      <div
        className="bg-[#FFB859]  tiles flex flex-col h-full justify-center items-center opacity-80 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">
          OPEN 7 DAYS<br></br>8AM - 8PM
        </p>
      </div>
    </div>{" "}
  </div>
  )
}

export default Header