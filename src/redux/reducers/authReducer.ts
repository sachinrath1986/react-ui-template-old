import { put, takeLatest } from "@redux-saga/core/effects";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes: any = {
    Login: "[Login] Action",
    Logout: "[Logout] Action",
    SetUser: "[Set User] Action"
}

const initialAuthState: any = {
    user: undefined,
    authToken: undefined
};

export const reducer = persistReducer(
    { storage, key: "v1-auth", whitelist: ["authToken", "user"] },
    (state = initialAuthState, action: any) => {
        switch (action.type) {
            case actionTypes.Login: {
                const { authToken } = action.payload;
                return { authToken, user: undefined };
            }

            case actionTypes.Logout:
                return initialAuthState;

            case actionTypes.SetUser: {

                // const { user } = action.payload;
                return {
                    ...(state as any), user: 'admin@demo.com'
                };
            }

            default:
                return state;
        }
    }
);

export const actions = {
    login: (authToken) => ({ type: actionTypes.Login, payload: { authToken } }),
    logout: () => ({ type: actionTypes.logout }),
    setUser: (user) => ({ type: actionTypes.SetUser, payload: { user } })
}

export function* saga() {
    yield takeLatest(actionTypes.Login, function* loginSaga() {
        yield put(actions.setUser({}));
    })
}

export default reducer;