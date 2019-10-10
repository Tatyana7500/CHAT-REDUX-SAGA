import {takeEvery, put, call, apply} from 'redux-saga/effects';
import * as constants from '../../constants';
import * as actions from "../actions";

export default function* watchSaga() {
    yield takeEvery(constants.HANDLE_HIDE_MODAL, handleHide);
    yield takeEvery(constants.HANDLE_OPEN_MENU, handleOpenMenu);
    yield takeEvery(constants.HANDLE_OPEN_MODAL, handleOpenModal);
    yield takeEvery(constants.HANDLE_OPEN_MODAL_ERROR, handleOpenModalError);
}

export function* handleOpenModal(action) {
    yield put(actions.showModalAction({ isOpen: true, modalType: constants.SETTINGS_MODAL_TYPE}));
}

export function* handleHide(action) {
    yield put(actions.showModalAction({ isOpen: false, modalType: '', content: '' }))
}

export function* handleOpenMenu(action) {
    yield put(actions.showMenuAction({ isOpenMenu: true }));
}

export function* handleCloseMenu(action) {
    yield put(actions.showMenuAction({ isOpenMenu: false }));
}

export function* handleOpenModalError(action) {
    yield put(actions.showModalAction({ isOpen: true, modalType: constants.ERROR_MODAL_TYPE, content: action.payload }))
}