import { Header, MenuPanel } from "components";
import { ReactNode } from "react";
import "./Layout.scss";
import { Outlet } from "react-router-dom";

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <MenuPanel />
      <Outlet />
      <div className="Layout-Container">{children}</div>
    </div>
  );
};
