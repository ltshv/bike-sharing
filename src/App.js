import css from "./App.module.scss";
import { Header } from "./components/header/header";
import { SiteRoutes } from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className={css.app}>
    <Router>
      <Header/>
      <main className={css.main}>
        <SiteRoutes />
      </main>
    </Router>
    </div>
  );
}

export default App;
