import {takeEvery, put, call, apply} from 'redux-saga/effects';
import requestHelper from "../utils/requestHelper";
import logic from '../components/login/logic';
import * as constants from '../../constants';
import * as actions from "../actions";
import {changeLanguage} from "./settingsSaga";

export default function* watchSaga() {
    yield takeEvery(constants.CHANGE_LANGUAGE, changeLanguage);
}

export function* changeLanguage(action) {
    console.log(action.payload);
}