import Brand from "../brand/Brand"
import AsideMenu from "../aside-menu/AsideMenu";

const Aside = () => {
    return (
        <div className="aside d-flex flex-column flex-row-auto">
            <Brand />
            <AsideMenu />
        </div>
    );
}

export default Aside;