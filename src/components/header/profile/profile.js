import React from "react";
import css from './profile.module.scss';
import { Icon } from "./icon";
import { NavLink } from "react-router-dom";
import { ProfileDropdown } from "./dropdown/dropdown";

export const Profile = () => {
    return (
        <div className={css.profile_box}><Icon/><div className={css.profile_dropdown}><ProfileDropdown/></div></div>

    )
}