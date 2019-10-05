import {takeEvery, put, call, apply} from 'redux-saga/effects';
import requestHelper from "../utils/requestHelper";
import logic from '../components/login/logic';
import * as constants from '../../constants';
import * as actions from "../actions";

export default function* watchSaga() {
    yield takeEvery(constants.CREATE_USER, handleCreateUser);
    yield takeEvery(constants.HANDLE_HIDE_MODAL, handleHide);
    yield takeEvery(constants.AUTH_USER, handleAuthUser);
}

export function* handleCreateUser(action) {
    const url = `${constants.LOCALHOST}/signin`;
    const response = yield call(requestHelper.sendPost, url, action.payload);

    if (response.status === 200) {
        window.location.href = '/login';
    } else {
        const errorText = yield apply(response, response.text);
        yield put(actions.showModalAction({ isOpen: true, modalType: constants.ERROR_MODAL_TYPE, content: errorText }));
    }
}

export function* handleAuthUser(action) {
    const url = `${constants.LOCALHOST}/auth`;
    const response = yield call(requestHelper.sendPost, url, action.payload);

    if (response.status === 200) {
        const user = yield response.json();
        logic.setToLocalStorage(user);
        window.location.href = '/main';
    } else {
        const errorText = yield apply(response, response.text);
        yield put(actions.showModalAction({ isOpen: true, modalType: constants.ERROR_MODAL_TYPE, content: errorText }));
    }
}

export function* handleHide(action) {
    yield put(actions.showModalAction({ isOpen: false, modalType: '', content: '' }))
}