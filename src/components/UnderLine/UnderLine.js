import React from "react";
import "./UnderLine.css";

function UnderLine({ text, xyz }) {
  return (
    <div className="levbitz_underline_wrap">
      <h6
        style={{
          color: "#050585",
        }}
      >
        {text}
      </h6>
      <div
        style={{
          margin: xyz,
        }}
        className="levbitz_underLine_style "
      ></div>
    </div>
  );
}

export default UnderLine;
