import { takeLatest } from "@redux-saga/core/effects";
import { handleLoadAppMenu } from "redux/handlers/app";

export const actionTypes = {
    FetchSideBarMenu: "[FetchSidebar] Action",
    GetSideBarMenu: "[GetSidebar] Action",
    SetSideBarMenu: "[SetSidebar] Action"
}

export const fetchSidebarMenu = () => ({
    type: actionTypes.FetchSideBarMenu
});


export const setSidebarMenu = (menus) => ({
    type: actionTypes.SetSideBarMenu,
    menus
});

const initialState = {
    menus: []
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SetSideBarMenu:
            const { menus } = action;
            return { menus };
        default:
            return state;
    }
}

export function* saga() {
    yield takeLatest(actionTypes.FetchSideBarMenu, handleLoadAppMenu);
}

export default reducer;