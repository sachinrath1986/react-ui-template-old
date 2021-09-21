import { combineReducers } from 'redux';

import * as app from "./reducers/appReducer";
import * as auth from "./reducers/authReducer";

export const rootReducer = combineReducers({
    app: app.reducer,
    auth: auth.reducer
});