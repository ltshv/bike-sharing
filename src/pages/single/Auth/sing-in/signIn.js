import React, { useEffect } from "react";
import css from "../auth.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignInData } from "../../../../storage/reducers/auth/actions/signIn";
import {
  LOCAL_AUTH_DATA,
  LOCAL_AUTH_TOKEN,
  setLocalData,
} from "../../../../hooks/useLocalStorage";
import { useNavigate } from "react-router";
import { SignInForm } from "../../../../components/forms/signInForm";
import { AuthBox } from "../authBox";
import { resetError } from "../../../../storage/reducers/auth/actions/authSlice";
import { PageSideContainer } from "../../../../components/covers/auth/auth-cover";
import signInImage from "../../../../assets/pagesCovers/signIn.avif";
import { MainLoader } from "../../../../components/loaders/mainLoader";
import { Section } from "../../../../components/containers/section";

export const SignIn = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.auth.authData.user);
  const tokenData = useSelector((state) => state.auth.authData.token);

  useEffect(() => {
    isAuth && navigate("/account");
  }, [isAuth, navigate]);

  useEffect(() => {
    if (isAuth) {
      setLocalData(LOCAL_AUTH_TOKEN, tokenData);
      setLocalData(LOCAL_AUTH_DATA, userData);
    }
  }, [tokenData, isAuth, userData]);

  const handleSingIn = (values) => {
    dispatch(
      fetchSignInData({ email: values.email, password: values.password })
    );
  };

  const handleSignUpRedirect = () => {
    navigate("/sign-up");
    dispatch(resetError());
  };

  return !tokenData ? (
    <Section>
      <PageSideContainer cover={signInImage}>
        <AuthBox title="Вход">
          <SignInForm handleSingIn={handleSingIn} />
          <div className={css.sign_up_text_wrapper}>
            У вас ещё нет аккаунта?
            <br />
            <span className={css.sign_up_text} onClick={handleSignUpRedirect}>
              Зарегистрироваться!
            </span>
          </div>
        </AuthBox>
      </PageSideContainer>
    </Section>
  ) : (
    <MainLoader />
  );
};
