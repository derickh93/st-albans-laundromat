import React from "react";
import Footer from "./Footer";

function Header({ className }) {
  return (
    <div className={className}>
      <div className="absolute transform top-0 text-center pt-10 font-bold">
        <span className="title text-[#004AAD] text-7xl drop-shadow-lg">
          St. Albans
        </span>
        <br />
        <span className="text-[#FFDE59] text-5xl drop-shadow-lg">
          Laundromat
        </span>
      </div>
      <Footer
        className={
          "absolute transform text-white text-center bottom-0"
        } />
    </div>
  );
}

export default Header;
