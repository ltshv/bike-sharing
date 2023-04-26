import React, { useEffect, useState } from "react";
import css from "./report.module.scss";
import { CaseCard } from "../../../components/caseCard.js/card";
import { AddCaseForm } from "../../../components/forms/addCaseForm";
import { createCase } from "../../../storage/reducers/cases/createCase";
import { useSelector, useDispatch } from "react-redux";
import { getAllCases } from "../../../storage/reducers/cases/getAllCases";
import { PageSideContainer } from "../../../components/covers/auth/auth-cover";
import reportCaseImage from "../../../assets/pagesCovers/report.jpeg";
import { MainLoader } from "../../../components/loaders/mainLoader";
import { Section } from "../../../components/containers/section";

export const ReportCase = () => {
  const clientId = "19d6066c-9ecf-4516-aa73-ad0165f424c7";
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.auth.authData.token);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const officersFetchStatus = useSelector(
    (state) => state.officers.officersData.status
  );
  const officersList = useSelector((state) => state.officers.officersData.data);

  const [isCaseCreated, setCaseCreated] = useState(false);

  function checkPublic() {
    if (isAuth) {
      return officersFetchStatus === "resolved" && officersList;
    } else {
      return true;
    }
  }

  const handleCreateCase = async (values) => {
    const createAction = isAuth
      ? await dispatch(
          createCase({ ...{ token: userToken }, ...values, public: false })
        )
      : await dispatch(
          createCase({ ...{ clientId: clientId }, ...values, public: true })
        );

    console.log(createAction);

    createAction.meta.requestStatus === "fulfilled" &&
      isAuth &&
      (await dispatch(getAllCases({ token: userToken })));

    createAction.meta.requestStatus === "fulfilled" && setCaseCreated(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Section>
      {!isCaseCreated && (
        <PageSideContainer cover={reportCaseImage}>
          <AddCaseForm
            checkPublic={checkPublic}
            handleCreateCase={handleCreateCase}
          />
        </PageSideContainer>
      )}
      {isCaseCreated && <div>Спасибо, информация о происшествии получена</div>}
    </Section>
  );
};
