import {takeEvery, put, call, apply} from 'redux-saga/effects';
import * as constants from '../../constants';
import requestHelper from "../utils/requestHelper";
import { showModalAction, closeModalAction } from "../actions";
import logic from '../components/login/logic';

export default function* watchSaga() {
    yield takeEvery(constants.CREATE_USER, handleCreateUser);
    yield takeEvery(constants.HANDLE_HIDE_MODAL, handleHide);
    yield takeEvery(constants.ENTER_USER, handleEnterUser);
}

export function* handleCreateUser(action) {
    const url = `${constants.LOCALHOST}/signin`;
    const response = yield call(requestHelper.sendPost, url, action.payload);

    if (response.status === 200) {
        window.location.href = '/login';
    } else {
        const errorText = yield apply(response, response.text);
        yield put(showModalAction({ modalType: constants.ERROR_MODAL_TYPE, content: errorText }));
    }
}

export function* handleEnterUser(action) {
    const url = `${constants.LOCALHOST}/auth`;
    const response = yield call(requestHelper.sendPost, url, action.payload);

    if (response.status === 200) {
        logic.setToLocalStorage(response.json());
        window.location.href = '/main';
    } else {
        const errorText = yield apply(response, response.text);
        yield put(showModalAction({ modalType: constants.ERROR_MODAL_TYPE, content: errorText }));
    }
}

export function* handleHide(action) {
    yield put(closeModalAction({ modalType: '', content: '' }))
}