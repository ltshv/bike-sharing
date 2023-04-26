import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  SINGLE_PAGES_CONFIG,
  DYNAMIC_PAGES_CONFIG,
} from "../configs/pages/pagesConfig";
import { Container } from "../components/containers/container";
import { NotFound } from "../pages/single/404/404";

export const SiteRoutes = () => {
  return (
    <Container>
      <Routes>
        {SINGLE_PAGES_CONFIG.map((page) => {
          return (
            <Route
              path={page.slug}
              element={page.component}
              key={page.slug}
              title={page.title}
            />
          );
        })}

        {DYNAMIC_PAGES_CONFIG.map((page) => {
          return (
            <Route
              path={`${page.path}/:id`}
              element={page.component}
              key={page.path}
              title={page.title}
            />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
