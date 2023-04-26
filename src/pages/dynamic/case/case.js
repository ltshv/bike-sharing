import React, { useEffect } from "react";
import css from "./case.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCase } from "../../../storage/reducers/cases/getCase";
import { CaseCard } from "../../../components/caseCard.js/card";
import { MainLoader } from "../../../components/loaders/mainLoader";
import { Section } from "../../../components/containers/section";

export const Case = () => {
  const caseId = useParams().id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userToken = useSelector((state) => state.auth.authData.token);
  const userData = useSelector((state) => state.auth.authData.user) || null;
  const currentCase = useSelector((state) => state.cases.currentCase.data) || null;
  const cases = useSelector((state) => state.cases.casesData.data) || null;

  useEffect(() => {
    !isAuth && navigate("/sign-in");
    userToken && caseId && dispatch(getCase({ token: userToken, id: caseId }));
    cases && !cases.find(caseItem => caseItem._id === caseId) && navigate('/404');

  }, [isAuth, navigate, dispatch, userToken, userData, caseId, cases]);

  return currentCase && currentCase._id === caseId ? (
    <>
      <Section>
        <h1>Информация о происшествии</h1>
        <CaseCard />
      </Section>
    </>
  ) : (
    <MainLoader />
  );
};
