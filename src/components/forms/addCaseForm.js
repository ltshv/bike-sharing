import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import css from "./forms.module.scss";
import { caseFormItemsToUpdate } from "../../configs/api/case";
import { AccentButton } from "../buttons/accentButton";
import { MainLoader } from "../loaders/mainLoader";
import * as Yup from "yup";

export const AddCaseForm = (props) => {
  const officersList =
    useSelector((state) => state.officers.officersData.data) || null;
  const isAuth = useSelector((state) => state.auth.isAuth);
  const { handleCreateCase, checkPublic } = props;

  const formItems = caseFormItemsToUpdate(true);

  const caseFormSchema = Yup.object().shape({
    ownerFullName: Yup.string()
      .min(10, "ФИО слишком короткие")
      .max(50, "ФИО слишком длинные")
      .required("Заполните ФИО"),
    licenseNumber: Yup.string()
      .min(6, "Слишком короткий номер")
      .max(12, "Слишком длинный номер")
      .required("Заполните номер"),
    type: Yup.string().required("Выберите вариант"),
  });

  const FormItems = ({ errors, touched, values }) => {
    const nonSelectItems = formItems.nonSelectItems.map((item) => {
      return (
        <div className={`${css.form_item}`} key={item.id}>
          <Field
            id={item.slug}
            name={item.slug}
            type={item.type}
            required={item.isRequired}
            placeholder={item.placeholder}
            className={css.form_input}
          />
          <label htmlFor={item.slug}>{item.title}</label>
          {errors[item.slug] && touched[item.slug] && (
            <div className={css.field_validate}>{errors[item.slug]}</div>
          )}
          {!errors[item.slug] && touched[item.slug] && values[item.slug] && (
            <div className={`${css.field_validate} ${css.good_validate}`}>
              Отлично!
            </div>
          )}
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
            required={item.isRequired}
            className={css.form_select}
          >
            <option hidden>Выберите вариант</option>
            {item.options.map((option, index) => {
              return (
                <option
                  key={index}
                  value={option.slug}
                  className={css.form_select_option}
                >
                  {option.title}
                </option>
              );
            })}
          </Field>
          <label htmlFor={item.slug}>{item.title}</label>
          {errors[item.slug] && touched[item.slug] && (
            <div className={css.field_validate}>{errors[item.slug]}</div>
          )}
          {!errors[item.slug] && touched[item.slug] && values[item.slug] && (
            <div className={`${css.field_validate} ${css.good_validate}`}>
              Отлично!
            </div>
          )}
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
              autoComplete="off"
              required={item.isRequired}
              className={css.form_select}
            >
              <option hidden>Выберите ответственного</option>;
              {officersList &&
                officersList
                  .filter((officer) => officer.approved === true)
                  .map((option, index) => {
                    return (
                      <option
                        key={index}
                        value={option._id}
                        className={css.form_select_option}
                      >
                        {option.firstName} {option.lastName}
                      </option>
                    );
                  })}
            </Field>
            <label htmlFor={item.slug}>{item.title}</label>
            {errors[item.slug] && touched[item.slug] && (
              <div className={css.field_validate}>{errors[item.slug]}</div>
            )}
            {!errors[item.slug] && touched[item.slug] && values[item.slug] && (
              <div className={`${css.field_validate} ${css.good_validate}`}>
                Отлично!
              </div>
            )}
          </div>
        )
      );
    });
    return nonSelectItems
      .concat(selectItems)
      .concat(officersItems)
      .sort(function (a, b) {
        return a.key - b.key;
      });
  };

  function getInitialValues() {
    let values = {};
    formItems.formItems
      .filter((item) => item.slug !== "clientId")
      .map((item) => {
        return (values[item.slug] = "");
      });
    return values;
  }

  return checkPublic ? (
    <Formik
      initialValues={getInitialValues()}
      onSubmit={(values) => handleCreateCase(values)}
      validationSchema={caseFormSchema}
    >
      {({ errors, touched, values }) => (
        <Form className={`${css.auth_form} ${css.account_form}`} noValidate>
          <FormItems errors={errors} touched={touched} values={values} />
          <div className={css.form_buttons}>
            <>
              <AccentButton className={css.auth_button} type="submit" disabled={Object.keys(errors).length > 0}>
                Сообщить
              </AccentButton>
            </>
          </div>
          {Object.keys(errors).length > 0 && (
            <div className={css.error_message}>
              Проверьте правильность введённой информации
            </div>
          )}
        </Form>
      )}
    </Formik>
  ) : (
    <MainLoader />
  );
};
