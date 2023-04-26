import React from "react";
import css from "./buttons.module.scss";

export const NonAccentButton = (props) => {
  const { link, color, type, onClick, children, className, disabled } = props;

  return (
    <button
      style={{ backgroundColor: color && color }}
      href={link}
      type={type}
      onClick={onClick}
      className={`${className && className} ${css.non_accent_button}`}
      disabled={disabled}
    >
     <div className={css.button_children}>{children}</div>
    </button>
  );
};
