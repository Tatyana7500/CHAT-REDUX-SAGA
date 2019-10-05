import { all } from 'redux-saga/effects';
import user from './usersSaga';
import settings from './settingsSaga';
import modal from './modalSaga';

export default function* rootSaga() {
    yield all([ modal(), settings(), user() ])
}