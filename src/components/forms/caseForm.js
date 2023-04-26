import React from "react";
import { Formik, Form, Field } from "formik";
import { NonAccentButton } from "../buttons/nonAccentButton";
import css from "./forms.module.scss";
import { useSelector } from "react-redux";
import { AccentButton } from "../buttons/accentButton";
import { MainLoader } from "../loaders/mainLoader";

export const CaseForm = (props) => {
  const caseData = useSelector((state) => state.cases.currentCase);
  const { status } = caseData;
  const userData = useSelector((state) => state.auth.authData.user);
  const currentCase = useSelector((state) => state.cases.currentCase.data);
  const officersList = useSelector((state) => state.officers.officersData.data);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const { handleCaseChange, isDisabled, setDisabled, formItems } = props;

  const FormItems = () => {
    const nonSelectItems = formItems.nonSelectItems.map((item) => {
      return (
        <div className={`${css.form_item}`} key={item.id}>
          <Field
            id={item.slug}
            name={item.slug}
            type={item.type}
            disabled={isDisabled}
            autoComplete={item.autoCompleteValue && item.autoCompleteValue}
            required={item.isRequired}
          />
          <label htmlFor={item.slug}>{item.title}</label>
        </div>
      );
    });
    const selectItems = formItems.selectItems.map((item) => {
      return (
        <div className={`${css.form_item}`} key={item.id}>
          <Field
            as="select"
            id={item.slug}
            name={item.slug}
            disabled={isDisabled}
            autoComplete={item.autoCompleteValue && item.autoCompleteValue}
            required={item.isRequired}
          >
            {item.options.map((option, index) => {
              return (
                <option key={index} value={option.slug}>
                  {option.title}
                </option>
              );
            })}
          </Field>
          <label htmlFor={item.slug}>{item.title}</label>
        </div>
      );
    });
    const officersItems = formItems.officersItems.map((item) => {
      return (
        isAuth && (
          <div className={`${css.form_item}`} key={item.id}>
            <Field
              as="select"
              id={item.slug}
              name={item.slug}
              disabled={isDisabled}
              autoComplete={currentCase.officer || "off"}
              required={item.isRequired}
            >
              {" "}
              <option hidden>Выберите ответственного</option>;
              {officersList
                .filter((officer) => officer.approved === true)
                .map((option, index) => {
                  return (
                    <option key={index} value={option._id}>
                      {option.firstName} {option.lastName}
                    </option>
                  );
                })}
            </Field>
            <label htmlFor={item.slug}>{item.title}</label>
          </div>
        )
      );
    });

    const nonChangeableItems = isDisabled && formItems.nonChangeableFormItems.map((item) => {
      return (
        <div className={`${css.form_item}`} key={item.id}>
          <Field
            id={item.slug}
            name={item.slug}
            type={item.type}
            disabled={isDisabled}
            autoComplete={item.autoCompleteValue && item.autoCompleteValue}
          />
          <label htmlFor={item.slug}>{item.title}</label>
        </div>
      );
    });

    return nonSelectItems
      .concat(selectItems)
      .concat(officersItems)
      .sort(function (a, b) {
        return a.key - b.key;
      }).concat(nonChangeableItems);
  };

  function handleFormDisabled() {
    setDisabled(false);
  }

  function getInitialValues() {
    let values = {
      clienId: currentCase.clienId,
      officer: currentCase.officer,
    };
    formItems.formItems
      .filter((item) => (item.slug !== "clientId") !== "officer")
      .map((item) => {
        return (values[item.slug] = currentCase[item.slug] || "");
      });
      formItems.nonChangeableFormItems.map((item) => {
        return (values[item.slug] = currentCase[item.slug] || "");
      })
    return values;
  }

  return status === "resolved" && officersList ? (
    <Formik
      initialValues={getInitialValues()}
      onSubmit={(values) => handleCaseChange(values)}
    >
      {({ resetForm }) => (
        <Form
          className={`${css.case_form} ${isDisabled ? `${css.disabled}` : ""}`}
        >
          <FormItems />
          <div className={css.form_buttons}>
            {isDisabled && userData.approved === true ? (
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
                  className={css.case_button}
                  type="button"
                  onClick={() => {
                    resetForm();
                    setDisabled(true);
                  }}
                >
                  Отменить изменения
                </NonAccentButton>
                <AccentButton className={css.case_button} type="submit">
                  Сохранить изменения
                </AccentButton>
              </>
            )}
          </div>
        </Form>
      )}
    </Formik>
  ) : (
    <MainLoader />
  );
};
