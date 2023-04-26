import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StatusNotify } from "../notifys/statusNotify";
import { CaseForm } from "../forms/caseForm";
import { editCase } from "../../storage/reducers/cases/editCase";
import { getAllCases } from "../../storage/reducers/cases/getAllCases";
import { caseFormItemsToUpdate } from "../../configs/api/case";
import { MainLoader } from "../loaders/mainLoader";

export const CaseCard = ({ isForNew }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = useSelector((state) => state.auth.authData.token);
  const currentCase = useSelector((state) => state.cases.currentCase) || null;
  const { data, error, status } = currentCase;
  const [isDisabled, setDisabled] = useState(true);
  const [isUpdated, setUpdated] = useState(false);

  async function handleCaseChange(values) {
    const editAction = await dispatch(
      editCase({ ...{ token: userToken }, ...values, id: data._id })
    );
    setUpdated(true);

    editAction.meta.requestStatus === "fulfilled" &&
      (await dispatch(getAllCases({ token: userToken })));
  }

  useEffect(() => {
    if (isUpdated === true) {
      setDisabled(true);
    }
  }, [isUpdated, navigate]);

  const items = caseFormItemsToUpdate(isForNew);

  return (
    <>
      {status === "resolved" && data ? (
        <CaseForm
          setDisabled={setDisabled}
          isDisabled={isDisabled}
          handleCaseChange={handleCaseChange}
          formItems={items}
        ></CaseForm>
      ) : (
        <MainLoader />
      )}
      {isUpdated && (
        <StatusNotify
          text="Данные о происшествии успешно обновлены"
          setUpdated={setUpdated}
          error={error}
        />
      )}
    </>
  );
};
