import React from "react";
import { Formik, Form, Field } from "formik";
import css from "./forms.module.scss";
import { AccentButton } from "../buttons/accentButton";
import { officerFormItemsForNew } from "../../configs/api/officer";

export const CreateOfficerForm = (props) => {
  const { handleCreateOfficer } = props;

  const formItems = officerFormItemsForNew();

  const FormItems = () => {
    const items = formItems.map((item) => {
      return (
        <div className={`${css.form_item}`} key={item.id}>
          <Field
            id={item.slug}
            name={item.slug}
            type={item.type}
            required={item.isRequired}
            placeholder={item.placeholder}
            className={css.form_input}
            autoComplete={item.autoCompleteValue || "off"}
          />
          <label htmlFor={item.slug}>{item.title}</label>
        </div>
      );
    });

    return items.sort(function (a, b) {
      return a.key - b.key;
    });
  };

  function getInitialValues() {
    let values = {};
    formItems
      .filter((item) => item.slug)
      .map((item) => {
        return (values[item.slug] = "");
      });
    return values;
  }

  return (
    <Formik
      initialValues={getInitialValues()}
      onSubmit={(values) => handleCreateOfficer(values)}
    >
      <Form>
        <FormItems />
        <div className={css.form_buttons}>
          <>
            <AccentButton className={css.auth_button} type="submit">
              Создать сотрудника
            </AccentButton>
          </>
        </div>
      </Form>
    </Formik>
  );
};
