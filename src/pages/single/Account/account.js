import React, { useEffect} from "react";
import css from "./account.module.scss";
import { useNavigate } from "react-router";
import { signOut } from "../../../storage/reducers/auth/actions/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AccentButton } from "../../../components/buttons/accentButton";
import { Hero } from "../../../components/heros/hero";
import { getOfficer } from "../../../storage/reducers/officers/getOfficer";
import { OfficerCard } from "../../../components/officerCard/card";
import { MainLoader } from "../../../components/loaders/mainLoader";
import { Section } from "../../../components/containers/section";

export const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userToken = useSelector((state) => state.auth.authData.token);
  const userData = useSelector((state) => state.auth.authData.user) || null;
  const currentOfficer =
    useSelector((state) => state.officers.currentOfficer) || null;
  const currentOfficerData =
    useSelector((state) => state.officers.currentOfficer.data) || null;
  const handleSignOut = () => {
    dispatch(signOut());
  };

  useEffect(() => {
    !isAuth && navigate("/sign-in");
    userData && dispatch(getOfficer({ token: userToken, id: userData.id }));
  }, [isAuth, navigate, dispatch, userToken, userData]);

  return (
    <>
      {currentOfficerData && currentOfficer.status === "resolved" ? (
        <div className={css.account_container}>
          <Section>
          <Hero
            title={`Добрый день, ${
              currentOfficerData.firstName || "незнакомец"
            }. Это ваш личный кабинет`}
          >
            <AccentButton
              className={css.sign_out_button}
              onClick={handleSignOut}
            >
              Выйти
            </AccentButton>
          </Hero>
          </Section>
          <Section>
          <h2>Ваши данные</h2>
          <OfficerCard />
          </Section>
        </div>
      ) : (
        <MainLoader />
      )}
    </>
  );
};
