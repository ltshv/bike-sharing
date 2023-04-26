import React from "react";
import css from "./header.module.scss";
import Nav from "../navigation/nav";
import { Container } from "../containers/container";
import { Logo } from "../../assets/logo";
import { NavLink } from "react-router-dom";
import { Profile } from "./profile/profile";

export const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.header_wrapper}>
        <NavLink to={`/`} className={({ isActive }) =>
            isActive
              ? `${css.logo_home_link} ${css.logo_home_link_active}`
              : `${css.logo_home_link}`
          }><Logo/><p className={css.app_title}>BIKE-SHARE</p></NavLink>
        {/* <Nav /> */}
        <Profile/>
        </div>
      </Container>
    </header>
  );
};
