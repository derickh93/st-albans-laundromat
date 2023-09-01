import React from "react";
import Menu from "./Menu";

function Header() {
  return (
    <div className="absolute transform top-0 text-center pt-10 font-bold">
      <Menu />
      <span className="title text-[#004AAD] text-7xl drop-shadow-lg">
        St. Albans
      </span>
      <br />
      <span className="text-[#FFDE59] text-5xl drop-shadow-lg">Laundromat</span>
      <div
        id="tham-menu-div"
        className="grid grid-cols-1 gap-2 font-bold text-center text-white text-2xl w-full tham-menu"
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
          <p className="text-sm">Available everyday. Last wash is at 7pm.</p>
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
            18005 Linden Blvd<br></br>Queens, NY 11434
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
  );
}

export default Header;
