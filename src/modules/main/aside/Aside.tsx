import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SVG from "react-inlinesvg";
import Brand from "../brand/Brand";
import AsideMenu from "../aside-menu/AsideMenu";
import logoutSVG from "../../../theme/assets/media/svg/Home/Door-open.svg";

const Aside = () => {
  const history = useHistory();

  const isSideBarCollapsed = useSelector(
    (state: any) => state.app.isSidebarCollapsed
  );

  const logout = () => {
    history.push("/auth/login");
  };
  return (
    <div
      className={
        `aside d-flex flex-column flex-row-auto ` +
        (isSideBarCollapsed ? "isCollapsed" : "")
      }
    >
      <Brand />
      <AsideMenu />
      <div className="logout-ct d-flex flex-center" onClick={() => logout()}>
        <SVG src={logoutSVG} />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Aside;
