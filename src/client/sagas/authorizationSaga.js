import { put, call } from 'redux-saga/effects';
import { registerUserService } from '../selectors';

import { REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from '../../constants';

export function* registerSaga(payload) {
    try {
        const response = yield call(registerUserService, payload);
        yield [
            put({ type: REGISTER_USER_SUCCESS, response })
        ];
    } catch(error) {
        yield put({ type: REGISTER_USER_ERROR, error });
    }
}