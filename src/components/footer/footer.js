import React from "react";
import css from "./footer.module.scss";
import Nav from "../navigation/nav";
import { Container } from "../containers/container";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <Nav />
      </Container>
    </footer>
  );
};
