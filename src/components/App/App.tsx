import type { FC } from "react";
import { Layout } from "components";
import "./App.scss"
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "routes";
import { ButtonPage, HomePage } from "pages";

export const App: FC = () => {
  

  return (
    <div className="App">

      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />}/>
          <Route path={ROUTES.BUTTON} element={<ButtonPage />}/>
        </Routes>
      </Layout>
    </div>
  );
};

