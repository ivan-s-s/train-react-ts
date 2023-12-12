import type { FC } from "react";
import { Layout } from "components";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "routes";
import { AccordionPage, ButtonPage, HomePage, IconPage } from "pages";

export const App: FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={ROUTES.ACCORDION} element={<AccordionPage />} />
          <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
          <Route path={ROUTES.ICON} element={<IconPage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
};
