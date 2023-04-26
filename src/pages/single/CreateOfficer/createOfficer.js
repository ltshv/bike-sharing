import React, { useEffect, useState } from "react";
import css from "./create-officer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { CreateOfficerForm } from "../../../components/forms/createOfficerForm";
import { createOfficer } from "../../../storage/reducers/officers/createOfficer";
import { getAllOfficers } from "../../../storage/reducers/officers/getAllOfficers";
import { MainLoader } from "../../../components/loaders/mainLoader";
import { Section } from "../../../components/containers/section";

export const CreateOfficer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userToken = useSelector((state) => state.auth.authData.token);
  const userData = useSelector((state) => state.auth.authData.user) || null;
  const [isOfficerCreated, setOfficerCreated] = useState(false);

  useEffect(() => {
    (!isAuth || userData.approved !== true) && navigate("/sign-in");
  }, [isAuth, navigate, userData]);

  async function handleCreateOfficer(values) {
    const createAction = await dispatch(
      createOfficer({ ...{ token: userToken }, ...values })
    );

    createAction.meta.requestStatus === "fulfilled" &&
      isAuth &&
      (await dispatch(getAllOfficers({ token: userToken })));

    createAction.meta.requestStatus === "fulfilled" && setOfficerCreated(true);
  }

  return (
    <Section>
      <div className={css.page_title}>
        <h1>Добавить сотрудника</h1>
      </div>
      {isAuth && !isOfficerCreated ? (
        <CreateOfficerForm handleCreateOfficer={handleCreateOfficer} />
      ) : (
        <MainLoader />
      )}
      {isOfficerCreated && navigate('/officers')}
      </Section>
  );
};
