import React, { useEffect, useState } from "react";
import css from "./notify.module.scss";
import { useSelector } from "react-redux";

export const StatusNotify = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [isVisible, setVisible] = useState(true);
  const [updateStatus, setUpdateStatus] = useState("");
  const { setUpdated, text, error } = props;

  const interval = setInterval(() => {
    setSeconds(seconds + 1);
  }, 1000);

  useEffect(() => {
    if (error) {
      setUpdateStatus("Произошла ошибка. Попробуйте позже");
    } else {
      setUpdateStatus(text);
    }
  }, [error, text]);

  useEffect(() => {
    if (seconds > 3) {
      setVisible(false);
      clearInterval(interval);
      setUpdated(false);
    }
  }, [seconds, interval, setUpdated]);

  return (
    <div
      className={`${css.update_notify_box} ${
        isVisible && css.update_notify_box_visible
      }`}
    >
      {" "}
      <div
        className={css.notify_content}
        style={{ borderColor: !error ? "rgb(208, 245, 211)" : "red" }}
      >
        {updateStatus}
      </div>
    </div>
  );
};
