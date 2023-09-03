import React from "react";
import { render } from "react-dom";

function MobileTiles({ tileInfo }) {
  function renderTiles() {
    let tileArr = [];
    tileInfo.forEach((element, i) => {
      let id = `hover-div-${i + 1}`;
      let tileClass = `bg-[${element.bgColor}] tiles flex flex-col h-full justify-center items-center opacity-80 px-4 py-3`;
      tileArr.push(
        <div key={i + 1} id={id} className={tileClass} role="alert">
          <p className="font-bold">{element.initialText}</p>
          <p className="text-sm">{element.hoveredText}
          </p>{" "}
        </div>
      );
    });
    return tileArr;
  }
  return (
    <div
      id="tham-menu-div"
      className="grid grid-cols-1 gap-2 font-bold text-center text-white text-2xl w-full tham-menu"
    >
     {renderTiles()}
    </div>
  );
}

export default MobileTiles;
