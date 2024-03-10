import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import MobileTiles from "./MobileTiles";
import Image from "next/image";
import scheduleIcon from "../public/schedule.png";
import importantIcon from "../public/icons8-information-64.png";

function Header({ className, tileInfo }) {
  return (
    <div className={className}>
      <div className="absolute transform top-0 text-center pt-10 font-bold">
        <Menu className={"lg:hidden pb-5"} />

        <div>
          <span className="title text-[#004AAD] text-7xl drop-shadow-lg">
            St. Albans
          </span>
          <br />
          <span className="text-[#FFDE59] text-5xl drop-shadow-lg">
            LAUNDROMAT
          </span>
        </div>
      </div>

      <div className="transform text-center pt-40 font-bold">
        <div className="transparent_bg">
          <span className="text-[#FFDE59] text-3xl drop-shadow-lg">
            Pickup & Delivery now available
          </span>
        </div>
        <div className="pt-10">
          <a href="https://cleancloudapp.com/s3/29554">
            <button className="m-5 bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <Image
                src={scheduleIcon}
                width={20}
                height={20}
                alt="Schedule buttom"
              />{" "}
              <span className="pl-1">Book Now</span>{" "}
            </button>
          </a>
          <a href="https://stalbanslaundromat.com">
            <button className="m-5 bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded inline-flex items-center drop-shadow-lg font-bold">
              <Image
                src={importantIcon}
                width={20}
                height={20}
                alt="Schedule buttom"
              />{" "}
              <span className="pl-1">Information</span>{" "}
            </button>
          </a>
        </div>
        <div className="text-[#004AAD] content-center flex flex-col drop-shadow-lg font-bold pt-10">
          <span>Pricing starting at </span>
          <span>$1.50 /lb on demand</span>
          <span>$1.25 /lb with subscription</span>
        </div>
      </div>

      <MobileTiles tileInfo={tileInfo} />

      <Footer
        className={"absolute transform text-white text-center bottom-0"}
      />
    </div>
  );
}

export default Header;
