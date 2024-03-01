import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import MobileTiles from "./MobileTiles";
import Image from "next/image";
import scheduleIcon from "../public/schedule.png";

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

      <div className="absolute text-center pt-10 font-bold">
        <div>
          <span className="text-[#FFDE59] text-3xl drop-shadow-lg">
            Pickup & Delivery now available
          </span>
        </div>
        <div>
          <a href="https://cleancloudapp.com/s3/29554">
            <button class="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <Image
                src={scheduleIcon}
                width={20}
                height={20}
                alt="Schedule buttom"
              />{" "}
              <span className="pl-1">Book Now</span>{" "}
            </button>
          </a>
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
