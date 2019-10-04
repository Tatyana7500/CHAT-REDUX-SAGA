import {takeEvery, put, call, apply} from 'redux-saga/effects';
import requestHelper from "../utils/requestHelper";
import logic from '../components/login/logic';
import * as constants from '../../constants';
import * as actions from "../actions";

export default function* watchSaga() {
    yield takeEvery(constants.HANDLE_OPEN_MODAL, handleOpenModal);
}

export function* handleOpenModal(action) {
    yield put(actions.showModalAction({ modalType: constants.SETTINGS_MODAL_TYPE}));

}