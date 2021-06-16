import { Link } from "react-router-dom"
import SVG from "react-inlinesvg";

import btnArrowSvg from '../../../theme/assets/media/svg/Navigation/Angle-double-left.svg';
const Brand = () => {

    return (
        <div className="brand flex-column-auto">
            <Link to="" className="brand--logo">
                <span>APP</span>
            </Link>

            <button className="brand--toggle btn btn-sm px-0">
                <span className="svg-icon svg-icon-xl">
                    <SVG src={btnArrowSvg} />
                </span>
            </button>
        </div>
    );
}

export default Brand;