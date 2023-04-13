import React from "react";
import css from "./case.module.scss";
import { useParams } from "react-router";

export const Case = () => {
  const id = useParams().id;
  return <div>{`This is case ${id}`}</div>;
};
