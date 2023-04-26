import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OfficerForm } from "../forms/officerForm";
import { updateOfficer } from "../../storage/reducers/officers/updateOfficer";
import { useNavigate } from "react-router-dom";
import { StatusNotify } from "../notifys/statusNotify";
import { getAllOfficers } from "../../storage/reducers/officers/getAllOfficers";
import { MainLoader } from "../loaders/mainLoader";

export const OfficerCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.auth.authData.token);
  const currentOfficer =
    useSelector((state) => state.officers.currentOfficer) || null;
  const error =
    useSelector((state) => state.officers.currentOfficer.error) || null;
  const currentOfficerData =
    useSelector((state) => state.officers.currentOfficer.data) || null;
  const [isDisabled, setDisabled] = useState(true);
  const [isUpdated, setUpdated] = useState(false);

  async function handleAccountChange(values) {
    const updateAction = await dispatch(
      updateOfficer({
        ...{ token: userToken },
        ...values,
        id: currentOfficerData._id,
      })
    );
    setUpdated(true);

    updateAction.meta.requestStatus === "fulfilled" &&
      (await dispatch(getAllOfficers({ token: userToken })));
  }

  useEffect(() => {
    if (isUpdated === true) {
      setDisabled(true);
      navigate("/officers");
    }
  }, [isUpdated, navigate]);

  return (
    <>
      {currentOfficerData && currentOfficer.status === "resolved" ? (
        <OfficerForm
          setDisabled={setDisabled}
          isDisabled={isDisabled}
          handleAccountChange={handleAccountChange}
          isUpdated={isUpdated}
        ></OfficerForm>
      ) : (
        <MainLoader />
      )}
      {isUpdated && (
        <StatusNotify
          error={error}
          text="Данные о сотруднике успешно обновлены"
          setUpdated={setUpdated}
        />
      )}
    </>
  );
};
