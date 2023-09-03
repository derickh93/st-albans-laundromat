import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import MobileTiles from "./MobileTiles";

function Header({ className, tileInfo}) {
  return (
    <div className={className}>
      <div className="absolute transform top-0 text-center pt-10 font-bold">
        <div className="flex flex-row">
          <Menu className={"lg:hidden"} />

          <div>
            <span className="title text-[#004AAD] text-7xl drop-shadow-lg">
              St. Albans
            </span>
            <br />
            <span className="text-[#FFDE59] text-5xl drop-shadow-lg">
              Laundromat
            </span>
          </div>
        </div>
      </div>
      <MobileTiles tileInfo={tileInfo}/>

      <Footer
        className={"absolute transform text-white text-center bottom-0"}
      />
    </div>
  );
}

export default Header;
