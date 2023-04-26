import React from "react";
import css from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import { SINGLE_PAGES_CONFIG } from "../../configs/pages/pagesConfig";
import { useSelector } from "react-redux";


export default function Nav() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const getNavItems = () => {
    if (isAuth) {
      return SINGLE_PAGES_CONFIG.filter((item) => item.isNav === true)
    } 
    return SINGLE_PAGES_CONFIG.filter((item) => item.isPublicNav === true)
  }

  return (
    <>
      <nav className={css.nav_links}>
        {getNavItems().map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${css.nav_item} ${css.nav_item_active}`
                : `${css.nav_item}`
            }
            to={`/${item.slug}`}
            key={item.slug}
            style={({ isActive }) =>
              isActive ? { backgroundColor: item.color } : {}
            }
          >
            {item.navTitle}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
