import { fork } from 'redux-saga/effects';
import userAuthentication from './usersSaga';
import settings from './settingsSaga';
import modal from './modalSaga';

export default function* startForman() {
    yield fork(userAuthentication);
    yield fork(settings);
    yield fork(modal);
}