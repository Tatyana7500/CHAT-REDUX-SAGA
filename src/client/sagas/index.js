import themeManager from './managers/themeManager/saga';
import { all } from 'redux-saga/effects';
import settings from './settingsSaga';
import modal from './modalSaga';
import user from './usersSaga';
import chat from './chatSaga';

export default function* rootSaga() {
    yield all([
        user(),
        chat(),
        modal(),
        settings(),
        themeManager()
    ])
}