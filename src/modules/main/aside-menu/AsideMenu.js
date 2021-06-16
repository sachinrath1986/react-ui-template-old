import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSidebarMenu } from "redux/reducers/appReducer";
import AsideMenuList from "./AsideMenuList";

const AsideMenu = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSidebarMenu());
    }, []);


    const menus = useSelector(state => state.app.menus) || [];

    return (
        <div className="aside-menu my-4">
            <AsideMenuList menus={menus} />
        </div>
    );
}

export default AsideMenu;