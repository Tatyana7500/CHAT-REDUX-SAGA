import { fork } from 'redux-saga/effects';
import userAuthentication from './usersSaga';

export default function* startForman() {
    yield fork(userAuthentication);
}