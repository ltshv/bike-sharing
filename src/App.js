import css from "./App.module.scss";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { SiteRoutes } from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllOfficers } from "./storage/reducers/officers/getAllOfficers";
import { getAllCases } from "./storage/reducers/cases/getAllCases";
import { MainLoader } from "./components/loaders/mainLoader";
import { Notify } from "./components/notifys/statusNotify";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userToken = useSelector((state) => state.auth.authData.token);

  useEffect(() => {
    isAuth && dispatch(getAllOfficers({ token: userToken }));
    isAuth && dispatch(getAllCases({ token: userToken }));
  }, [dispatch, userToken, isAuth]);

  return (
    <div className={css.app}>
      <Router>
        <Header />
        <main className={css.main}>
          <SiteRoutes />
        </main>
        <Footer />
      </Router>
      {!isAuth && userToken && <MainLoader />}
      {/* <Notify text="Данные успешно обновлены" /> */}
    </div>
  );
}

export default App;
