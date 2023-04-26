import { Link } from "react-router-dom";
import css from "./404.module.scss";
import { Section } from "../../../components/containers/section";

export const NotFound = () => {
  return (
    <Section>
      <div className={css.not_found_container}>
        <h1>Упс! Кажется вы потерялись.</h1>
        <p>Вот некоторые полезные ссылки:</p>
        <br />
        <Link to="/">Главная</Link>
        <Link to="/report">Сообщить о краже велосипеда</Link>
      </div>
    </Section>
  );
};
