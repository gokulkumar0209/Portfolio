import React from "react";
import "../styles/textDesign.css"; // Ensure this file contains the CSS styles

function TextDesign({ text, width = "100%", height = "100%" }) {
  return (
    <div className="text-design-container">
      <svg
        width={width}
        height={height}
        viewBox="0 0 1000 100" 
        preserveAspectRatio=" xMidYMid meet"
      >
        <text
          className="text-animation"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

export default TextDesign;
