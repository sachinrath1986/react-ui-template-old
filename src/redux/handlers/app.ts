import { call, put } from 'redux-saga/effects';
import { loadAppMenu } from 'services/app.service';
import { setSidebarMenu } from '../reducers/appReducer';

export function* handleLoadAppMenu(): any {
    const menus = yield call(loadAppMenu);
    yield put(setSidebarMenu(menus));
}