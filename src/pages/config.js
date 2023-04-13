import { Case, Officer } from "./dynamic/dynamicPages";
import { Auth, Cases, Home, Officers, ReportCase } from "./single/singlePages";

export const SINGLE_PAGES_CONFIG = [
  {
    path: "/",
    slug: "",
    title: "Главная",
    description: "Главная страница",
    component: <Home />,
    isNav: false,
    navTitle: "Главная",
    isMobileNav: true,
  },
  {
    path: "/auth",
    slug: "auth",
    title: "Личный кабинет",
    description: "Вход/регистрация в личном кабинете",
    component: <Auth />,
    isNav: false,
    navTitle: "Войти",
    isMobileNav: false,
  },
  {
    path: "/cases",
    slug: "cases",
    title: "Сообщения о кражах",
    description: "Список всех сообщений о кражах",
    component: <Cases />,
    isNav: false,
    navTitle: "Сообщения о кражах",
    isMobileNav: false,
  },
  {
    path: "/officers",
    slug: "officers",
    title: "Ответственные сотрудники",
    description: "Список всех ответственных сотрудников",
    component: <Officers />,
    isNav: false,
    navTitle: "Ответственные сотрудники",
    isMobileNav: false,
  },
  {
    path: "/report",
    slug: "report",
    title: "Сообщить о краже",
    description: "Сообщите о краже велосипеда",
    component: <ReportCase />,
    isNav: true,
    navTitle: "Сообщить о краже",
    isMobileNav: true,
  },
];

export const DYNAMIC_PAGES_CONFIG = [
  {
    path: "/cases",
    title: "Случай о краже",
    description: "Случай о краже",
    component: <Case />,
  },

  {
    path: "/officers",
    title: "Ответственный сотрудник",
    description: "Страничка ответственного сотрудника",
    component: <Officer />,
  },
];
