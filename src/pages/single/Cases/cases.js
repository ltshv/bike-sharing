import React, { useEffect } from "react";
import css from "./cases.module.scss";
import pagesCss from "../pages.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ListItem } from "../../../components/listItem/item";
import { BikeCaseIcon } from "../../../assets/bikeCase";
import { Link, useNavigate } from "react-router-dom";
import { NonAccentButton } from "../../../components/buttons/nonAccentButton";
import { MainLoader } from "../../../components/loaders/mainLoader";
import { deleteCase } from "../../../storage/reducers/cases/deleteCase";
import { getAllCases } from "../../../storage/reducers/cases/getAllCases";
import { Section } from "../../../components/containers/section";

export const Cases = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userToken = useSelector((state) => state.auth.authData.token);
  const cases = useSelector((state) => state.cases.casesData) || null;
  const { data, status, error } = cases;
  //const casesData = useSelector((state) => state.cases.casesData.data) || null;
  const localDate = (date) => {
    const localDate = new Date(date).toLocaleDateString("ru-RU");
    return localDate;
  };

  useEffect(() => {
    !isAuth && navigate("/sign-in");
  }, [isAuth, navigate, dispatch, userToken]);

  const getStatusColor = (status) => {
    if (status === "new") {
      return "rgb(208, 245, 211)";
    } else if (status === "in_progress") {
      return "rgb(249, 251, 208)";
    }
    return "rgb(251, 208, 208)";
  };

  async function handleDeleteItem(id) {
    const action = await dispatch(deleteCase({ ...{ token: userToken }, id }));
    action.meta.requestStatus === "fulfilled" &&
      dispatch(getAllCases({ token: userToken }));
  }

  return (
    <>
      <Section>
        <div className={pagesCss.page_title}>
          <h1>Сообщения о кражах</h1>
          <Link to="/report">
            <NonAccentButton className={pagesCss.add_button}>
              + Добавить
            </NonAccentButton>
          </Link>
        </div>
      </Section>
      {data && status === "resolved" ? (
        <Section>
          <div className={css.list_wrapper}>
            {data.map((item) => {
              return (
                <ListItem
                  key={item._id}
                  item={item}
                  title={
                    <>
                      {item.licenseNumber}{" "}
                      <span className={css.bike_type}>({item.type})</span>
                    </>
                  }
                  icon={
                    <BikeCaseIcon
                      color={getStatusColor(item.status)}
                      className={css.bike_fill}
                    />
                  }
                  meta={localDate(item.date)}
                  handleDeleteItem={handleDeleteItem}
                  deleteActionText="Вы уверены, что хотите удалить происшествие?"
                />
              );
            })}
          </div>
        </Section>
      ) : (
        <MainLoader />
      )}
    </>
  );
};
