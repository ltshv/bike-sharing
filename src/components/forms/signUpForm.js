import { Formik, Form, Field } from "formik";
import css from "./forms.module.scss";
import { AccentButton } from "../buttons/accentButton";
import { officerFormItemsForSignUp } from "../../configs/api/officer";
import * as Yup from "yup";

export const SignUpForm = (props) => {
  const { handleSignUp } = props;

  function handleSubmit(values) {
    handleSignUp(values);
  }

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Имя слишком короткое")
      .max(50, "Имя слишком длинное"),
    //.required('Заполните Имя'),
    lastName: Yup.string()
      .min(2, "Фамилия слишком короткая")
      .max(50, "Фамилия слишком длинная"),
    //.required('Required'),
    email: Yup.string()
      .email("Некорректный адрес почты")
      .required("Заполните почту"),
    password: Yup.string()
      .min(8, "Пароль слишком короткий")
      .max(50, "Пароль слишком длинный")
      .required("Введите пароль"),
    clientId: Yup.string().min(8, "Слишком короткий ID").required("Заполните это поле"),
  });

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          clientId: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}

      >
        {({ errors, touched, values }) => (
          <>
            <Form className={css.auth_form} noValidate>
              {officerFormItemsForSignUp().map((item) => {
                return (
                  <div className={css.form_item} key={item.id}>
                    <Field
                      id={item.slug}
                      name={item.slug}
                      placeholder={item.placeholder}
                      type={item.type}
                      autoComplete={item.autoCompleteValue}
                      required={item.isRequired}
                    />
                    <label htmlFor={item.slug}>{item.title}</label>
                    {errors[item.slug] && touched[item.slug] && values[item.slug].length > 0 && (
                      <div className={css.field_validate}>
                        {errors[item.slug]}
                      </div>
                    )}
                    {!errors[item.slug] &&
                      touched[item.slug] &&
                      values[item.slug] && (
                        <div
                          className={`${css.field_validate} ${css.good_validate}`}
                        >
                          Отлично!
                        </div>
                      )}
                  </div>
                );
              })}
              <AccentButton type="submit" className={css.auth_button} disabled={Object.keys(errors).length > 0}>
                Зарегистрироваться
              </AccentButton>
              {Object.keys(errors).length > 0 && <div className={css.error_message}>Проверьте правильность введённой информации</div>}
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};
