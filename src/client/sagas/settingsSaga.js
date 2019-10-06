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
    yield takeEvery(constants.TRANSLATE, translate);
}

export function* changeTheme(action) {
    let currentTheme = yield select(selectors.getCurrentTheme);
    const theme = currentTheme === constants.LIGHT ? constants.DARK : constants.LIGHT;
    yield call(setAttributeDataTheme, theme);
    yield put(actions.changeThemeAction({ theme: theme }));
    yield call(setSettingsLocalStorage);
}

export function* changeLanguage(action) {
    const lang = action.payload;

    if (lang === 'AE') {
        yield call(setAttributeStyleDirection, 'rtl');
    } else {
        yield call(setAttributeStyleDirection, 'ltr');
    }

    yield put(actions.changeLanguageAction({ lang: lang }));
    yield call(setSettingsLocalStorage);
}

export function* applyDefaultSettings(action) {
    yield call(setAttributeDataTheme, 'light');
    yield put(actions.settingsAction({ lang: 'US', emoji: true, theme: 'light', privateChat: true }));
    yield call(setSettingsLocalStorage);
}

export function* changeActiveEmoji(action) {
    let emoji = yield select(selectors.getActiveEmoji);
    yield put(actions.changeActiveEmojiAction({ emoji: !emoji }));
    yield call(setSettingsLocalStorage);
}

export function* changeActivePrivateChat(action) {
    let privateChat = yield select(selectors.getActivePrivateChat);
    yield put(actions.changeActivePrivateChatAction({ privateChat: !privateChat }));
    yield call(setSettingsLocalStorage);
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
        yield call(setAttributeDataTheme, settings.theme);

        if (settings.lang === 'AE') {
            yield call(setAttributeStyleDirection, 'rtl');
        }
        //установить язык
    } else {
        yield put(actions.settingsAction({
            lang: 'US',
            emoji: true,
            theme: 'light',
            privateChat: true
        }));
        yield call(setAttributeDataTheme, 'light');
        //установить язык
    }
}

export function* translate(action) {
    console.log('translate');
}

export function* setSettingsLocalStorage () {
    const settings = yield select(selectors.getSettings);
    localStorage.setItem('settings', JSON.stringify(settings));
}

export function* setAttributeDataTheme(theme) {
    yield document.body.setAttribute('data-theme', theme);
}

export function* setAttributeStyleDirection(direction) {
    yield document.body.setAttribute('style', `direction:${direction}`);
}