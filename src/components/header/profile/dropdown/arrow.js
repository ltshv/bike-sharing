import React from "react";

export const Arrow = (props) => {
  return (
    <svg style={props.state ? {rotate: "180deg"} : {rotate:"0deg"}}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_9)">
        <path
          d="M7.415 8.20999L12 12.795L16.585 8.20999L18 9.62499L12 15.625L6 9.62499L7.415 8.20999Z"
        />
      </g>
    </svg>
  );
}
