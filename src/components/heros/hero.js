import React from "react";
import css from './heros.module.scss';
import heroImage from '../../assets/pagesCovers/accountHero.jpeg'

export const Hero = (props) => {
    const {cover, title, children, className} = props;

    return (
        <div className={`${css.hero} ${className}`} style={{backgroundImage:`url(${cover || heroImage})`}}>
          <div className={css.overlay}></div>
          <h1 className={css.hero_text}>{title}</h1>
          {children}
        </div>
    )

}