import {takeEvery, put, call, apply} from 'redux-saga/effects';
import requestHelper from "../utils/requestHelper";
import * as constants from '../../constants';
import * as actions from "../actions";
import { initTheme } from './managers/themeManager/saga';

export default function* watchSaga() {
    yield call(setNameAndEmailAction);
    yield call(drawUsers);
    yield call(initTheme);
    yield takeEvery(constants.USERS, drawUsers);
    yield takeEvery(constants.LEAVE, leaveAccount);
    yield takeEvery(constants.AUTH_USER, handleAuthUser);
    yield takeEvery(constants.CREATE_USER, handleCreateUser);
}

export function* handleCreateUser(action) {
    const url = `${constants.LOCALHOST}/signin`;
    const response = yield call(requestHelper.sendPost, url, action.payload);

    if (response.status === 200) {
        yield call(windowLocation, '/login');
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
        localStorage.setItem('chat', JSON.stringify(user));
        yield call(windowLocation, '/main');
    } else {
        const errorText = yield apply(response, response.text);
        yield put(actions.showModalAction({ isOpen: true, modalType: constants.ERROR_MODAL_TYPE, content: errorText }));
    }
}

export function* drawUsers() {
    const url = `${constants.LOCALHOST}/users`;
    const users = yield call(requestHelper.sendGet, url);
    yield put(actions.setToUserListAction({ users: users }));
    yield put(actions.changeWindowState({ state: constants.USERS }));
}

export function* leaveAccount(action) {
    yield put(actions.leaveAccountAction({ name: '', email: '' }));
    localStorage.removeItem('chat');
    yield call(windowLocation, '/login');
}

export function* windowLocation(href) {
    window.location.href = href;
}

export function* setNameAndEmailAction() {
    const user = JSON.parse(localStorage.getItem('chat'));

    if (user) {
        yield put(actions.setNameAndEmailAction({ id: user._id, name: user.name, email: user.email }));
    }
}