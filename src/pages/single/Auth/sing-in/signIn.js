import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import css from "../auth.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSignIn } from "../../../../storage/reducers/auth/auth-actions";

export const SingIn = (props) => {
  const [isToken, setisToken] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.authData.user) || null;
  let tokenData = useSelector((state) => state.authData.token) || null;

  useEffect(() => {
    setisToken(Boolean(tokenData));
  },[tokenData]);

  const handleSingIn = (values) => {
    dispatch(getSignIn(values.email, values.password));
  };

  const { setSignUp, signUp } = props;

  return (
    <div className={css.auth_box}>
      {!isToken && (
        <div>
          <h1>Вход</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              handleSingIn(values);
            }}
          >
            <Form>
              <label htmlFor="email">Почта</label>
              <Field
                id="email"
                name="email"
                placeholder="Введите почту"
                type="email"
                autoComplete="username"
              />

              <label htmlFor="password">Пароль</label>
              <Field
                id="password"
                name="password"
                placeholder="Введите пароль"
                type="password"
                autoComplete="current-password"
              />
              <button type="submit">Войти</button>
            </Form>
          </Formik>
          У вас ещё нет аккаунта?{" "}
          <span className={css.sign_up_text} onClick={() => setSignUp(!signUp)}>
            Зарегистрироваться!
          </span>
        </div>
      )}
      {isToken && (
        <div className={css.auth_complete_box}>
          Добрый день,{userData.firstName}
        </div>
      )}
    </div>
  );
};
