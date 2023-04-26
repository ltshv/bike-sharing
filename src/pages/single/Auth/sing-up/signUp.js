import React, { useEffect } from "react";
import css from "../auth.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  LOCAL_AUTH_DATA,
  LOCAL_AUTH_TOKEN,
  setLocalData,
} from "../../../../hooks/useLocalStorage";
import { useNavigate } from "react-router";
import { SignUpForm } from "../../../../components/forms/signUpForm";
import { fetchSignUpData } from "../../../../storage/reducers/auth/actions/signUp";
import { fetchSignInData } from "../../../../storage/reducers/auth/actions/signIn";
import { AuthBox } from "../authBox";
import { resetError } from "../../../../storage/reducers/auth/actions/authSlice";
import { PageSideContainer } from "../../../../components/covers/auth/auth-cover";
import signUpImage from "../../../../assets/pagesCovers/signUp.avif";
import { MainLoader } from "../../../../components/loaders/mainLoader";
import { Section } from "../../../../components/containers/section";

export const SingUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.auth.authData.user);
  const tokenData = useSelector((state) => state.auth.authData.token);

  useEffect(() => {
    isAuth && navigate("/account");
  }, [isAuth]);

  useEffect(() => {
    if (isAuth) {
      setLocalData(LOCAL_AUTH_TOKEN, tokenData);
      setLocalData(LOCAL_AUTH_DATA, userData);
    }
  }, [tokenData, isAuth, userData]);

  const handleSignUp = async (values) => {
    const signUp = await dispatch(fetchSignUpData(values));
    if (signUp.payload === 200) {
      dispatch(fetchSignInData(values));
    }
  };

  const handleSignInRedirect = () => {
    navigate("/sign-in");
    dispatch(resetError());
  };

  return !tokenData ? (
    <Section>
      <PageSideContainer cover={signUpImage}>
        <AuthBox title={"Регистрация"}>
          <SignUpForm handleSignUp={handleSignUp} />
          <div className={css.sign_up_text_wrapper}>
            У вас уже есть аккаунт?
            <br />
            <span className={css.sign_up_text} onClick={handleSignInRedirect}>
              Войти!
            </span>
          </div>
        </AuthBox>
      </PageSideContainer>
    </Section>
  ) : (
    <MainLoader />
  );
};
