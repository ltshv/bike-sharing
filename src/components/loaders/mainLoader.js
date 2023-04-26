import React from "react";
import css from "./loaders.module.scss";

export const MainLoader = () => {
  return (
    <div className={css.loader_container}>
      <div className={css.loader}>
        <span></span>
      </div>
    </div>
  );
};
