import React, { useState } from "react";
import {Arrow} from "./arrow";
import css from './dropdown.module.scss'

const profileOptions = [
  {
    id: 0,
    title: "Войти",
    link: "/auth",
  },
  {
    id: 1,
    title: "Выйти",
    link: "#",
  },
];

export const ProfileDropdown = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <>
    <div className={`${css.profile_dropdown_arrow} ${css.pointer}`} onClick={toggleDropdown}><Arrow state={isOpen}/></div>
        {isOpen && (
        <div className={css.profile_dropdown_box}>
          <ul className={css.profile_options}>
            {profileOptions.map((item) => (
              <li className={`${css.profile_options_item} ${css.pointer}`} key={item.id} href={item.link}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        )}
    </>
  );
};

// export default ProfileDropdown;
