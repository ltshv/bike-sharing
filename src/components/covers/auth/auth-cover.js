import React from "react";
import css from './covers.module.scss';

export const PageSideContainer = (props) => {
  const { cover, children } = props;

  return (
    <div className={css.auth_container}>
      <div className={css.cover} style={{backgroundImage:`url(${cover})`}}></div>
      {children}
    </div>
  );
};
