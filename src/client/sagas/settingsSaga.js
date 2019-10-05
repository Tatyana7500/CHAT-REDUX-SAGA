import {takeEvery, put, call, apply, select} from 'redux-saga/effects';
import * as selectors from '././../selectors';
import requestHelper from "../utils/requestHelper";
import logic from '../components/login/logic';
import * as constants from '../../constants';
import * as actions from "../actions";

export default function* watchSaga() {
    yield takeEvery(constants.CHANGE_THEME, changeTheme);
    yield takeEvery(constants.CHANGE_LANGUAGE, changeLanguage);
    yield takeEvery(constants.APPLY_DEFAULT_SETTINGS, applyDefaultSettings);
}

export function* changeTheme(action) {
    let theme = yield select(selectors.getCurrentTheme);
    theme = theme === constants.LIGHT ? constants.DARK : constants.LIGHT;
    document.body.setAttribute('data-theme', theme);
    yield put(actions.changeThemeAction({ theme: theme }));
    setSettingsLocalStorage();
}

export function* changeLanguage(action) {
    const lang = action.payload;

    if (lang === 'AE') {
        document.body.setAttribute('style', 'direction:rtl');
    } else {
        document.body.setAttribute('style', 'direction:ltr');
    }

    yield put(actions.changeLanguageAction({ lang: lang }));
    setSettingsLocalStorage();
}

export function* applyDefaultSettings(action) {
    document.body.setAttribute('data-theme', 'light');
    yield put(actions.defaultSettingsAction({ lang: 'US', emoji: true, theme: 'light', privateChat: true }));
    setSettingsLocalStorage();
}

const setSettingsLocalStorage = () => {
    const settings = store.getState().settings;
    localStorage.setItem('settings', JSON.stringify(settings));
};
