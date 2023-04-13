import React from "react";
import css from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import { SINGLE_PAGES_CONFIG } from '../../../pages/config';

let desktopNavItems = SINGLE_PAGES_CONFIG.filter((item) => item.isNav === true);

export default function Nav() {
    return (
      <>
        <nav className={css.nav_links}>
          {desktopNavItems.map((item) => (
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
            >{item.navTitle}
            </NavLink>
          ))}
        </nav>
      </>
    );
  }