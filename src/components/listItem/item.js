import React, { useState } from "react";
import css from "./item.module.scss";
import { NonAccentButton } from "../buttons/nonAccentButton";
import { ArrowRight } from "../../assets/ArrowRight";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { CheckingDeleteNotify } from "../notifys/checkingNotify";

export const ListItem = (props) => {
  const userData = useSelector((state) => state.auth.authData.user);
  const { approved } = userData;
  const path = useLocation().pathname;
  const { item, meta, title, icon, handleDeleteItem, deleteActionText} = props;
  const { _id } = item;
  const [showDeleteActions, setShowDeleteActions] = useState(false);

  async function deleteAction () {
    handleDeleteItem(_id);
  }

  return (
    <div className={css.list_item}>
      <div className={css.info}>
        <div className={css.icon_box}>{icon}</div>
        <div className={css.meta_box}>
          <div className={css.title}>
            <h3>{title}</h3>
          </div>
          <div className={css.meta}>{meta}</div>
        </div>
      </div>
      <div className={css.actions}>
        <div>
          {approved && _id !== userData.id &&(
            <NonAccentButton
              className={`${css.button} ${css.trash}`}
              color="inherit"
              onClick={() => setShowDeleteActions(true)}
            >
              <div className={`${css.action_button} `}>
                <p>✕</p>
                <p>Удалить</p>
              </div>
            </NonAccentButton>
          )}
        </div>
        <div>
          <Link to={`${path}/${_id}`}>
            <NonAccentButton className={`${css.button}`}>
              <div className={`${css.action_button}`}>
                <p>Подробнее</p>
                <ArrowRight width="15px" height="15px" />
              </div>
            </NonAccentButton>
          </Link>
        </div>
      </div>
      {showDeleteActions && (
        <CheckingDeleteNotify text={deleteActionText} showDeleteActions={showDeleteActions} setShowDeleteActions={setShowDeleteActions} deleteAction={deleteAction}/>
      )}
    </div>
  );
};
