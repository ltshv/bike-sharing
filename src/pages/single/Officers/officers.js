import React, { useEffect } from "react";
import css from "./officers.module.scss";
import pagesCss from "../pages.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllOfficers } from "../../../storage/reducers/officers/getAllOfficers";
import { ListItem } from "../../../components/listItem/item";
import { Person } from "../../../assets/person";
import { NonAccentButton } from "../../../components/buttons/nonAccentButton";
import { Link } from "react-router-dom";
import { MainLoader } from "../../../components/loaders/mainLoader";
import { deleteOfficer } from "../../../storage/reducers/officers/deleteOfficer";
import { Section } from "../../../components/containers/section";

export const Officers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userToken = useSelector((state) => state.auth.authData.token);
  const userData = useSelector((state) => state.auth.authData.user) || null;
  const officers = useSelector((state) => state.officers.officersData) || null;
  const { data, error, status } = officers;

  useEffect(() => {
    !isAuth && navigate("/sign-in");
  }, [isAuth, navigate, dispatch, userToken, userData]);

  async function handleDeleteItem(id) {
    const action = await dispatch(
      deleteOfficer({ ...{ token: userToken }, id })
    );
    action.meta.requestStatus === "fulfilled" &&
      dispatch(getAllOfficers({ token: userToken }));
  }

  return (
    <>
      <Section>
        <div className={pagesCss.page_title}>
          <h1>Ответственные сотрудники</h1>
          <Link to="/create-officer">
            <NonAccentButton className={pagesCss.add_button}>
              + Добавить
            </NonAccentButton>
          </Link>
        </div>
      </Section>
      <Section>
        {data && status === "resolved" ? (
          <div className={css.officers_list_wrapper}>
            {data.map((item) => {
              return (
                <ListItem
                  key={item._id}
                  item={item}
                  meta={item.email}
                  title={`${item.firstName} ${item.lastName}`}
                  icon={
                    <Person
                      color={
                        item.approved
                          ? "rgb(208, 245, 211)"
                          : "rgb(251, 208, 208)"
                      }
                    />
                  }
                  handleDeleteItem={handleDeleteItem}
                  deleteActionText="Вы уверены, что хотите удалить сотрудника?"
                />
              );
            })}
          </div>
        ) : (
          <MainLoader />
        )}
      </Section>
    </>
  );
};
