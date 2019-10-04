import * as constants from '../../constants';

export const showModalAction = payload => ({ type: constants.SHOW_MODAL, payload });
export const closeModalAction = payload => ({ type: constants.CLOSE_MODAL, payload });
export const createUser = payload => ({ type: constants.CREATE_USER, payload });
export const handleHideModal = payload => ({ type: constants.HANDLE_HIDE_MODAL, payload});
export const handleOpenModal = payload => ({ type: constants.HANDLE_OPEN_MODAL, payload});
export const authUser = payload => ({ type: constants.AUTH_USER, payload });

export const changeLanguageAction = payload => ({ type: constants.LANGUAGE, payload });
export const changeActiveEmoji = payload => ({ type: constants.ACTIVE_EMOJI, payload });
export const changeActivePrivateChat = payload => ({ type: constants.ACTIVE_PRIVATE_CHAT, payload });
export const changeThemeAction = payload => ({ type: constants.THEME, payload });
export const defaultSettingsAction = payload => ({ type: constants.DEFAULT_SETTINGS, payload });
