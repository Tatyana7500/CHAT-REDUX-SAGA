import { takeEvery, put, call } from 'redux-saga/effects';
import { registerUserService } from '../selectors/logic';

import { CREATE_USER, LOCALHOST, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR, IS_OPEN_MODAL, HANDLE_HIDE } from '../../constants';

export default function* watchSaga() {
    yield takeEvery(CREATE_USER, handleCreateUser);
    yield takeEvery(HANDLE_HIDE, handleHide);
}

export function* handleCreateUser(action) {

        const response = yield call(registerUserService, action);

        if (response.status === 200) {
            yield put({type: REGISTER_USER_SUCCESS, response});
        } else {
            yield put({type: REGISTER_USER_ERROR, response});
        }
}

export function* handleHide(action) {
    const isOpen = false;
    yield put ({ type: IS_OPEN_MODAL, isOpen })
}