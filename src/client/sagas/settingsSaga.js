import {takeEvery, put, call, apply, select} from 'redux-saga/effects';
import * as selectors from '././../selectors';
import * as constants from '../../constants';
import * as actions from "../actions";

export default function* watchSaga() {
    yield call(getSavedSettings);
    yield takeEvery(constants.CHANGE_THEME, changeTheme);
    yield takeEvery(constants.CHANGE_LANGUAGE, changeLanguage);
    yield takeEvery(constants.APPLY_DEFAULT_SETTINGS, applyDefaultSettings);
    yield takeEvery(constants.CHANGE_ACTIVE_EMOJI, changeActiveEmoji);
    yield takeEvery(constants.CHANGE_ACTIVE_PRIVATE_CHAT, changeActivePrivateChat);
}

export function* changeTheme(action) {
    let theme = yield select(selectors.getCurrentTheme);
    theme = theme === constants.LIGHT ? constants.DARK : constants.LIGHT;
    document.body.setAttribute('data-theme', theme);
    yield put(actions.changeThemeAction({ theme: theme }));
    const settings = yield select(selectors.getSettings);
    setSettingsLocalStorage(settings);
}

export function* changeLanguage(action) {
    const lang = action.payload;

    if (lang === 'AE') {
        document.body.setAttribute('style', 'direction:rtl');
    } else {
        document.body.setAttribute('style', 'direction:ltr');
    }

    yield put(actions.changeLanguageAction({ lang: lang }));
    const settings = yield select(selectors.getSettings);
    setSettingsLocalStorage(settings);
}

export function* applyDefaultSettings(action) {
    document.body.setAttribute('data-theme', 'light');
    yield put(actions.settingsAction({ lang: 'US', emoji: true, theme: 'light', privateChat: true }));
    const settings = yield select(selectors.getSettings);
    setSettingsLocalStorage(settings);
}

export function* changeActiveEmoji(action) {
    let emoji = yield select(selectors.getActiveEmoji);
    emoji = !emoji;
    yield put(actions.changeActiveEmojiAction({ emoji: emoji }));
    const settings = yield select(selectors.getSettings);
    setSettingsLocalStorage(settings);
}

export function* changeActivePrivateChat(action) {
    let privateChat = yield select(selectors.getActivePrivateChat);
    privateChat = !privateChat;
    yield put(actions.changeActivePrivateChatAction({ privateChat: privateChat }));
    const settings = yield select(selectors.getSettings);
    setSettingsLocalStorage(settings);
}

export function* getSavedSettings(action) {
    const settings = JSON.parse(localStorage.getItem('settings'));

    if(settings) {
        yield put(actions.settingsAction({
            lang: settings.lang,
            emoji: settings.emoji,
            theme: settings.theme,
            privateChat: settings.privateChat
        }));
        document.body.setAttribute('data-theme', settings.theme);
        //установить язык
    } else {
        yield put(actions.settingsAction({
            lang: 'US',
            emoji: true,
            theme: 'light',
            privateChat: true
        }));
        document.body.setAttribute('data-theme', 'light');
        //установить язык
    }
}

const setSettingsLocalStorage = settings => {
    localStorage.setItem('settings', JSON.stringify(settings));
};