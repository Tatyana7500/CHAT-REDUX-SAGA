import {takeEvery, put, call, apply} from 'redux-saga/effects';
import requestHelper from "../utils/requestHelper";
import logic from '../components/login/logic';
import * as constants from '../../constants';
import * as actions from "../actions";
import * as selectors from '././../selectors';

export default function* watchSaga() {
    yield takeEvery(constants.CREATE_USER, handleCreateUser);
    yield takeEvery(constants.HANDLE_HIDE_MODAL, handleHide);
    yield takeEvery(constants.AUTH_USER, handleAuthUser);
    yield takeEvery(constants.LEAVE, leaveAccount);
    yield takeEvery(constants.USERS, drawUsers);
   
}

export function* handleCreateUser(action) {
    const url = `${constants.LOCALHOST}/signin`;
    const response = yield call(requestHelper.sendPost, url, action.payload);

    if (response.status === 200) {
        window.location.href = '/login';
    } else {
        const errorText = yield apply(response, response.text);
        yield put(actions.showModalAction({ modalType: constants.ERROR_MODAL_TYPE, content: errorText }));
    }
}


export function* drawUsers() {
    const url = `${constants.LOCALHOST}/users`;
    const users = yield call(requestHelper.sendGet, url);
    yield put(actions.setToUserListAction({ users: users }));
    yield put(actions.changeWindowStateAction({ state: constants.USERS }));
}

export function* leaveAccount(action) {
    yield put(actions.leaveAccountAction({ email: '', name: '' }));
    localStorage.removeItem('chat');
}

export function* handleAuthUser(action) {
    const url = `${constants.LOCALHOST}/auth`;
    const response = yield call(requestHelper.sendPost, url, action.payload);
   
    if (response.status === 200) {
        const user = yield response.json();
        yield put(actions.setNameAndEmailAction({ name: user.name, email: user.email }));
        logic.setToLocalStorage(user);
        window.location.href = '/main';
    } else {
        const errorText = yield apply(response, response.text);
        yield put(actions.showModalAction({ modalType: constants.ERROR_MODAL_TYPE, content: errorText }));
    }
}

export function* handleHide(action) {
   yield put(actions.closeModalAction({ modalType: '', content: '' }))
}