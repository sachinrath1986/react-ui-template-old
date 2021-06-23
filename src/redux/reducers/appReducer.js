import { takeLatest } from "@redux-saga/core/effects";
import { handleLoadAppMenu } from "redux/handlers/app";

export const actionTypes = {
    FetchSideBarMenu: "[FetchSidebar] Action",
    GetSideBarMenu: "[GetSidebar] Action",
    SetSideBarMenu: "[SetSidebar] Action",
    SetIsSideBarCollapsed: "[SetSideBarCollapseState] Action"
}

export const fetchSidebarMenu = () => ({
    type: actionTypes.FetchSideBarMenu
});


export const setSidebarMenu = (menus) => ({
    type: actionTypes.SetSideBarMenu,
    menus
});

export const setIsSidebarCollapsed = (isSidebarCollapsed) => ({
    type: actionTypes.SetIsSideBarCollapsed,
    isSidebarCollapsed
});

const initialState = {
    menus: [],
    isSidebarCollapsed: false
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SetSideBarMenu:
            const { menus } = action;
            return { ...state, menus };
        case actionTypes.SetIsSideBarCollapsed:
            const { isSidebarCollapsed } = action;
            return { ...state, isSidebarCollapsed };
        default:
            return state;
    }
}

export function* saga() {
    yield takeLatest(actionTypes.FetchSideBarMenu, handleLoadAppMenu);
}

export default reducer;