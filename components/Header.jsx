import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import MobileTiles from "./MobileTiles";
import Modal from "./Modal";

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

      <div>
        <div>
          <span className="text-[#FFDE59] text-3xl drop-shadow-lg">
            Pickup & Delivery now available
          </span>
        </div>
        <div className="content-center">
          <a
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            href="https://cleancloudapp.com/s3/29554"
          >
            Book Now
          </a>
          <Modal />
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
