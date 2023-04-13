import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.module.scss';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import handleAuthActions from './storage/reducers/auth/actions/handleAuthActions';

const store = configureStore({ reducer: handleAuthActions });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
