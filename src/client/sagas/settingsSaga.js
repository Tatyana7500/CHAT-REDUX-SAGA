import {takeEvery, put, call, apply} from 'redux-saga/effects';
import requestHelper from "../utils/requestHelper";
import logic from '../components/login/logic';
import store from '../index.jsx';
import * as constants from '../../constants';
import * as actions from "../actions";

export default function* watchSaga() {
    yield takeEvery(constants.CHANGE_THEME, changeTheme);
    yield takeEvery(constants.CHANGE_LANGUAGE, changeLanguage);
    yield takeEvery(constants.APPLY_DEFAULT_SETTINGS, applyDefaultSettings);
    // yield takeEvery(constants.CHANGE_THEME, changeTheme);
    // yield takeEvery(constants.SAVE_SETTINGS, saveSettings);
    // yield takeEvery(constants.APPLY_THEME, applyTheme);
    // yield takeEvery(constants.GET_SAVED_SETTINGS, getSavedSettings);
    // yield takeEvery(constants.APPLY_RTL, applyRtl);
    // yield takeEvery(constants.SET_DEFAULT_SETTINGS, setDefaultSettings);
}

export function* changeTheme(action) {
    const theme = store.getState().settings.theme === constants.LIGHT ? constants.DARK : constants.LIGHT;
    document.body.setAttribute('data-theme', theme);
    yield put(actions.changeThemeAction({ theme: theme }));
    setSettingsLocalStorage();
}

export function* changeLanguage(action) {
    console.log(action);
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
    console.log('defaultSettings');
    document.body.setAttribute('data-theme', 'light');
    yield put(actions.defaultSettingsAction({ lang: 'US', emoji: true, theme: 'light', privateChat: true }));
    setSettingsLocalStorage();
}

const setSettingsLocalStorage = () => {
    console.log('setSettings');
    const settings = store.getState().settings;
    localStorage.setItem('settings', JSON.stringify(settings));
};
