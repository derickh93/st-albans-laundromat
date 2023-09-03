import React from "react";

function MobileTiles({ tileInfo }) {
  function renderTiles() {
    let tileArr = [];
    tileInfo.forEach((element, i) => {
      let tileClass = `tiles flex flex-col h-full justify-center items-center opacity-80 px-4 py-3`;
      let bgColor = element.bgColor;

      tileArr.push(
        <div key={i + 1} className={tileClass} role="alert"
        style={{backgroundColor:bgColor}}
        >
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
