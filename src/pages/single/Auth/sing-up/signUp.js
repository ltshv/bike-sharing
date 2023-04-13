import React from 'react';
import { Formik, Field, Form } from 'formik';
import inuqid from 'uniqid'

export const SingUp = () => (
  <div>
    <h1>Регистрация</h1>
    <Formik
      initialValues={{
        email: '',
        password: '',
        clientId: inuqid(),
      }}
      onSubmit={async (values) => {
        
      }}
    >
      <Form>
        <label htmlFor="email">Почта</label>
        <Field id="email" name="email" placeholder="Введите почту" autoComplete="username"/>

        <label htmlFor="password">Пароль</label>
        <Field id="password" name="password" placeholder="Введите пароль" 
            autoComplete="current-password"/>
        <button type="submit">Зарегистрироваться</button>
      </Form>
    </Formik>
    У вас ещё нет аккаунта? Зарегистрироваться!
  </div>
);
