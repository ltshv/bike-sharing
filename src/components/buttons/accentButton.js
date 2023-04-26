import React from "react";
import css from "./buttons.module.scss";

export const AccentButton = (props) => {
  const { link, color, type, onClick, children, className, disabled } = props;

  return (
    <button
      style={{ backgroundColor: color && `${color} !important` }}
      href={link}
      type={type}
      onClick={onClick}
      className={`${className} ${css.accent_button}`}
      disabled={disabled}
    >
      <div className={css.button_children}>{children}</div>
    </button>
  );
};
