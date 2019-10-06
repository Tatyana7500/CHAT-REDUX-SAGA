import { takeEvery, call, select, put } from 'redux-saga/effects';
import * as selectors from '../../../selectors';
import * as constants from '../../../../constants';
import { setTheme } from './themeManager';

export default function* watchSaga() {
    yield call(initTheme);
}

export function* initTheme() {
    const device = yield select(selectors.getDevice);
    let currentTheme = yield select(selectors.getCurrentTheme);

    if(!currentTheme) {
        currentTheme = 'light';
    }

    const theme = yield call(setTheme, currentTheme, device.deviceName);
    yield put({ type: constants.SET_THEME_STORE, payload: theme });
}