import { Formik, Form, Field, ErrorMessage } from "formik";
import { AccentButton } from "../buttons/accentButton";
import css from "./forms.module.scss";
import { officerFormItemsForSignIn } from "../../configs/api/officer";
import * as Yup from "yup";

export const SignInForm = (props) => {
  const { handleSingIn } = props;

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Некорректный адрес почты")
      .required("Заполните почту"),
    password: Yup.string()
      .min(6, "Пароль слишком маленький")
      .required("Введите пароль"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        handleSingIn(values);
      }}
      validationSchema={SignInSchema}
    >
      {({ errors, touched, values }) => (
        <Form className={css.auth_form} noValidate>
          <>
            {officerFormItemsForSignIn().map((item) => {
              return (
                <div className={css.form_item} key={item.id}>
                  <>
                    <Field
                      id={item.slug}
                      name={item.slug}
                      placeholder={item.placeholder}
                      type={item.type}
                      autoComplete={item.autoCompleteValue}
                      required={item.isRequired}
                    />
                    <label htmlFor={item.slug}>{item.title}</label>
                    {errors[item.slug] && touched[item.slug] && (
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
                  </>
                </div>
              );
            })}
            <AccentButton
              type="submit"
              className={css.auth_button}
              disabled={Object.keys(errors).length > 0}
            >
              <p>Войти</p>
            </AccentButton>
            {Object.keys(errors).length > 0 && (
              <div className={css.error_message}>
                Проверьте правильность введённой информации
              </div>
            )}
          </>
        </Form>
      )}
    </Formik>
  );
};
