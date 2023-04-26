import React from "react";
import css from "./notify.module.scss";
import { NonAccentButton } from "../buttons/nonAccentButton";

export const CheckingDeleteNotify = (props) => {
  const {
    text,
    setShowDeleteActions,
    deleteAction,
  } = props;

  return (
    <div className={css.chekcing_notify_box}>
      <div className={css.notify_text}>{text}</div>
      <div className={css.check_buttons}>
        <NonAccentButton className={css.negative_choice} onClick={()=>setShowDeleteActions(false)}>
          Нет, оставить
        </NonAccentButton>
        <NonAccentButton className={css.positive_choice} onClick={deleteAction}>
          Да, удалить
        </NonAccentButton>
      </div>
    </div>
  );
};
