import { Link } from "react-router-dom";
import css from './404.module.scss'

export const NotFound = () => {
  return (
    <div className={css.not_found_container}>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p><br/>
      <Link to="/">Главная</Link>
      <Link to="/report">Сообщить о краже велосипеда</Link>
    </div>
  );
};
