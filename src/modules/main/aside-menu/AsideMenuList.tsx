import { NavLink } from "react-router-dom";

import SVG from "react-inlinesvg";

const AsideMenuList = ({ menus }) => {
    return (
        <>
            <ul className="menu-nav">
                {
                    menus.map((m, i) => (
                        <li key={i} className="menu-item">
                            <NavLink className="menu-link" to={m.route}>
                                <span className="svg-icon menu-icon">
                                    <SVG src={m.icon} />
                                </span>
                                <span className="menu-text">{m.label}</span>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default AsideMenuList;