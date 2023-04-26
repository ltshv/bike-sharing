import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.module.scss";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import authSlice from "./storage/reducers/auth/actions/authSlice";
import officersSlice from "./storage/reducers/officers/officersSlice";
import casesSlice from "./storage/reducers/cases/casesSlice";

const store = configureStore({
  reducer: { auth: authSlice, officers: officersSlice, cases: casesSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
