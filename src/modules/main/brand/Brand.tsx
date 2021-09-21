import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import { useDispatch, useSelector } from "react-redux";

import { setIsSidebarCollapsed } from "redux/reducers/appReducer";

import btnArrowSvg from '../../../theme/assets/media/svg/Navigation/Angle-double-left.svg';

const Brand = () => {

    const dispatch = useDispatch();

    const isSideBarCollapsed = useSelector((state: any) => state.app.isSidebarCollapsed);

    const toggleCollapse = () => {
        dispatch(setIsSidebarCollapsed(!isSideBarCollapsed));
    }

    return (
        <div className="brand flex-column-auto">
            <Link to="" className="brand--logo">
                <span>APP</span>
            </Link>

            <button className="brand--toggle btn btn-sm px-0" onClick={() => toggleCollapse()}>
                <span className="svg-icon svg-icon-xl">
                    <SVG fontSize={isSideBarCollapsed ? '20px' : '24px'} src={btnArrowSvg} />
                </span>
            </button>
        </div>
    );
}

export default Brand;