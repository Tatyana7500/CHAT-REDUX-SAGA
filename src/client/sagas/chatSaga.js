import {takeEvery, put, call, apply} from 'redux-saga/effects';
import requestHelper from "../utils/requestHelper";
import logic from '../components/login/logic';
import * as constants from '../../constants';
import * as actions from "../actions";
import {changeLanguage} from "./settingsSaga";


export default function* watchSaga() {
    yield takeEvery(constants.CHAT, drawChat);
}

export function* drawChat() {
    const url = `${constants.LOCALHOST}/messages`;
    const messages = yield call(requestHelper.sendGet, url);
    yield put(actions.setToMessagesListAction({ messageList: messages }));
    yield put(actions.changeWindowStateAction({ state: constants.CHAT }));
}