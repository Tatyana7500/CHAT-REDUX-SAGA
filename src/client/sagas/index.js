import { all } from 'redux-saga/effects';
import user from './usersSaga';
import settings from './settingsSaga';
import modal from './modalSaga';
import chat from './chatSaga';

export default function* rootSaga() {
    yield all([
        user(),
        chat(),
        modal(),
        settings()
    ])
}