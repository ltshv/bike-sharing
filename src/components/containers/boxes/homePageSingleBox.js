import React from "react";
import css from "./boxes.module.scss";

export const HomePageBox = (props) => {
  const { children, color, className } = props;
  return (
    <div className={`${css.home_box} ${className || ''}`} style={{ backgroundColor: color }}>{children}</div>
  );
};
