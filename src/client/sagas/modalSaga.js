import {takeEvery, put, call, apply} from 'redux-saga/effects';
import * as constants from '../../constants';
import * as actions from "../actions";

export default function* watchSaga() {
    yield takeEvery(constants.HANDLE_HIDE_MODAL, handleHide);
    yield takeEvery(constants.HANDLE_OPEN_MODAL, handleOpenModal);
}

export function* handleOpenModal(action) {

    yield put(actions.showModalAction({ isOpen: true, modalType: constants.SETTINGS_MODAL_TYPE}));
}

export function* handleHide(action) {
    yield put(actions.showModalAction({ isOpen: false, modalType: '', content: '' }))
}