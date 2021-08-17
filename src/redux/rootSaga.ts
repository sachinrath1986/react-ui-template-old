import { all } from 'redux-saga/effects';

import * as auth from './reducers/authReducer';
import * as app from './reducers/appReducer';

export function* watcherSaga() {
    yield all([app.saga(), auth.saga()])
}