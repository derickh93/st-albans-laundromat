import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import MobileTiles from "./MobileTiles";

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
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Book Now</span>{" "}
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
