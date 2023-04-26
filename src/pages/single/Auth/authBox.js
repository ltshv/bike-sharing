import React from "react";
import css from "./auth.module.scss";
import { useSelector } from "react-redux";

export const AuthBox = (props) => {
  const { status, error } = useSelector((state) => state.auth);

  const { title, children } = props;
  return (
    <div className={css.auth_box}>
      <h1>{title}</h1>
      {children}
      {status === "loading" && (
        <div className={css.loading_box}>Загрузка...</div>
      )}
      {error && <div className={css.error_box}>{error}</div>}
    </div>
  );
};
