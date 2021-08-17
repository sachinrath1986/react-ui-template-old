import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSidebarMenu } from "redux/reducers/appReducer";
import AsideMenuList from "./AsideMenuList";

const AsideMenu = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSidebarMenu());
    }, [dispatch]);


    const menus = useSelector((state: any) => state.app.menus) || [];

    return (
        <div className="aside-menu">
            <AsideMenuList menus={menus} />
        </div>
    );
}

export default AsideMenu;