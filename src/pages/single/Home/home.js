import React from "react";
import css from "./home.module.scss";
import { Section } from "../../../components/containers/section";
import { HomePageBox } from "../../../components/containers/boxes/homePageSingleBox";
import MainBikeImage from "../../../assets/home/bike.png";
import ReportBikeImage from "../../../assets/home/green-bike.png";
import { AccentButton } from "../../../components/buttons/accentButton";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Section>
        <HomePageBox>
          <div className={css.hero}>
            <img
              src={MainBikeImage}
              alt={"Grey bike"}
              className={css.hero_image}
            ></img>
            <h1>
              Привет! <br />
              Мы «BIKE SHARE»
            </h1>
          </div>
        </HomePageBox>
      </Section>
      <Section>
        <HomePageBox color="inherit" className={css.about}>
          <h2 className={css.h2}>О нас</h2>
          <p className={css.about_text}>
            Мы звестная компания, занимающаяся прокатом велосипедов в крупных
            городах России На данный момент в нашем парке присутствуют самые
            новые модели популярных европейских и американских марок
            велосипедов!
          </p>
        </HomePageBox>
      </Section>
      <Section>
        <HomePageBox color="inherit" className={css.benefits}>
          <h2 className={css.h2}>Наши преимущества</h2>
          <div className={css.benefits_wrapper}>
            <HomePageBox color="lightblue" className={css.benefits_box_item}>
              Новое оборудование
            </HomePageBox>
            <HomePageBox color="salmon" className={css.benefits_box_item}>
              Большой парк велосипедов
            </HomePageBox>
            <HomePageBox color="orange" className={css.benefits_box_item}>
              Регулярное ТО
            </HomePageBox>
            <HomePageBox color="lightgreen" className={css.benefits_box_item}>
              Низкие цены
            </HomePageBox>
          </div>
        </HomePageBox>
      </Section>
      <Section>
        <HomePageBox>
          <div className={`${css.hero} ${css.report}`}>
            <img
              src={ReportBikeImage}
              alt={"Grey bike"}
              className={css.hero_image}
            ></img>
            <div className={css.report_header}>
              <span className={css.report_header_text}>
                Вы стали свидетелем кражи велосипеда? <br />
                Сообщите нам об этом!
              </span>
              <AccentButton
                className={css.report_button}
                onClick={() => navigate("/report")}
              >
                Сообщить
              </AccentButton>
            </div>
          </div>
        </HomePageBox>
      </Section>
    </>
  );
};
