import { takeLatest } from 'redux-saga/effects';
import { registerSaga } from './authorizationSaga';

import { REGISTER_USER } from '../../constants';

export default function* userAuthentication() {
    yield takeLatest(REGISTER_USER, registerSaga);
}