import React from "react";
import { Formik, Form, Field } from "formik";
import { NonAccentButton } from "../buttons/nonAccentButton";
import css from "./forms.module.scss";
import { useSelector } from "react-redux";
import { AccentButton } from "../buttons/accentButton";
import {
  officerformItemsToUpdate,
  officerFormItemsToShow,
} from "../../configs/api/officer";

export const OfficerForm = (props) => {
  const currentOfficer = useSelector((state) => state.officers.currentOfficer);
  const { data } = currentOfficer;
  const { handleAccountChange, isDisabled, setDisabled } = props;

  let formItems =
    isDisabled && currentOfficer.status === "resolved"
      ? officerFormItemsToShow()
      : officerformItemsToUpdate();

  function handleFormDisabled() {
    setDisabled(false);
  }

  function getInitialValues() {
    let values = {
      password: undefined,
      email: data.email,
    };
    formItems
      .filter((item) => item.slug !== "password")
      .map((item) => {
        return (values[item.slug] = data[item.slug] || false);
      });

    return values;
  }

  return (
    <Formik
      initialValues={getInitialValues()}
      onSubmit={(values) => handleAccountChange(values)}
    >
      {({ resetForm }) => (
        <Form className={`${css.auth_form} ${css.account_form}`}>
          {formItems.map((item) => {
            return (
              <div className={`${css.form_item}`} key={item.id}>
                <Field
                  id={item.slug}
                  name={item.slug}
                  type={item.type}
                  disabled={isDisabled}
                  autoComplete={item.autoCompleteValue}
                />
                <label htmlFor={item.slug}>{item.title}</label>
              </div>
            );
          })}
          <div className={css.form_buttons}>
            {isDisabled ? (
              <NonAccentButton
                className={css.auth_button}
                onClick={handleFormDisabled}
                type="button"
              >
                Изменить данные
              </NonAccentButton>
            ) : (
              <>
                <NonAccentButton
                  className={css.auth_button}
                  type="reset"
                  onClick={() => {
                    resetForm();
                    setDisabled(true);
                  }}
                >
                  Отменить изменения
                </NonAccentButton>
                <AccentButton className={css.auth_button} type="submit">
                  Сохранить изменения
                </AccentButton>
              </>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};
