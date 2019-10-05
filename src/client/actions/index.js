import * as constants from '../../constants';

export const authUser = payload => ({ type: constants.AUTH_USER, payload });
export const createUser = payload => ({ type: constants.CREATE_USER, payload });
export const showModalAction = payload => ({ type: constants.SHOW_MODAL, payload });
export const handleHideModal = payload => ({ type: constants.HANDLE_HIDE_MODAL, payload});
export const handleOpenModal = payload => ({ type: constants.HANDLE_OPEN_MODAL, payload});

export const settingsAction = payload => ({ type: constants.SETTINGS, payload });
export const changeThemeAction = payload => ({ type: constants.THEME, payload });
export const changeLanguageAction = payload => ({ type: constants.LANGUAGE, payload });
export const changeActiveEmojiAction = payload => ({ type: constants.EMOJI, payload });
export const changeActivePrivateChatAction = payload => ({ type: constants.PRIVATE_CHAT, payload });
