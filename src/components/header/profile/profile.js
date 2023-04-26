import React from "react";
import css from "./profile.module.scss";
import { Icon } from "./icon";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Profile = () => {
  const { pathname } = useLocation();
  let isActivePath = ["/sign-in", "/sign-up", "/account"].includes(pathname);
  return (
    <NavLink
      to={"/sign-in" || "/sign-up" || "/account"}
      isactive={isActivePath.toString()}
      className={({ isActive }) =>
        isActive
          ? `${css.profile_icon_box} ${css.profile_icon_box_active}`
          : `${css.profile_icon_box}`
      }
    >
      <div className={css.profile_box}>
        <Icon />
      </div>
    </NavLink>
  );
};
