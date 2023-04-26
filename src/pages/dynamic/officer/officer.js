import React, { useEffect } from "react";
import css from "./officer.module.scss";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getOfficer } from "../../../storage/reducers/officers/getOfficer";
import { OfficerCard } from "../../../components/officerCard/card";
import { MainLoader } from "../../../components/loaders/mainLoader";
import { Section } from "../../../components/containers/section";

export const Officer = () => {
  const officerId = useParams().id;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userToken = useSelector((state) => state.auth.authData.token);
  const userData = useSelector((state) => state.auth.authData.user) || null;
  const currentOfficer =
    useSelector((state) => state.officers.currentOfficer) || null;
  const currentOfficerData =
    useSelector((state) => state.officers.currentOfficer.data) || null;
  const officers =
    useSelector((state) => state.officers.officersData.data) || null;

  useEffect(() => {
    !isAuth && navigate("/sign-in");
    userToken && dispatch(getOfficer({ token: userToken, id: officerId }));
    officers &&
      !officers.find((caseItem) => caseItem._id === officerId) &&
      navigate("/404");
  }, [isAuth, navigate, dispatch, userToken, userData, officerId, officers]);

  return currentOfficerData &&
    currentOfficerData._id === officerId &&
    currentOfficer.status === "resolved" ? (
    <Section>
      <h1>Данные сотрудника</h1>
      <OfficerCard />
    </Section>
  ) : (
    <MainLoader />
  );
};
