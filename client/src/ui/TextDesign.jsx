import React from "react";
import "../styles/textDesign.css"; // Ensure this file contains the CSS styles

function TextDesign({ text, width = "100%", height = "100%" }) {
  return (
    <div className="text-design-container flex justify-center items-center bg-slate-600">
      <div className="wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1300 400"
          aria-labelledby="svgTitle"
          role="img"
        >
          <title id="svgTitle">{text}</title>
          <text className="text-animation" transform="translate(6 271)">
            <tspan x="0" y="0">
              {text}
            </tspan>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default TextDesign;
