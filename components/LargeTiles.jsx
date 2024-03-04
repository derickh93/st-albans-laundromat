import React from "react";

function LargeTiles({ tileInfo, className }) {
  function renderTiles() {
    let tileArr = [];
    tileInfo.forEach((element, i) => {
      let id = `hover-div-${i + 1}`;
      let bgColor = element.bgColor;
      let tileClass = `tiles flex flex-col h-full justify-center`;
      tileArr.push(
        <div
          key={i + 1}
          id={id}
          className={tileClass}
          style={{ backgroundColor: bgColor }}
          onClick={() => {
            if (element.url) window.location = element.url;
          }}
        >
          {element.initialText}
        </div>
      );
    });
    return tileArr;
  }

  return <div className={className}>{renderTiles()}</div>;
}

export default LargeTiles;
