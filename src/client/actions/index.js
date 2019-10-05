import * as constants from '../../constants';

export const showModalAction = payload => ({ type: constants.SHOW_MODAL, payload });
export const closeModalAction = payload => ({ type: constants.CLOSE_MODAL, payload });
export const createUser = payload => ({ type: constants.CREATE_USER, payload });
export const handleHideModal = payload => ({ type: constants.HANDLE_HIDE_MODAL, payload });
export const handleOpenModal = payload => ({ type: constants.HANDLE_OPEN_MODAL, payload });
export const authUser = payload => ({ type: constants.AUTH_USER, payload });

export const changeLanguageAction = payload => ({ type: constants.LANGUAGE, payload });
export const changeActiveEmoji = payload => ({ type: constants.ACTIVE_EMOJI, payload });
export const changeActivePrivateChat = payload => ({ type: constants.ACTIVE_PRIVATE_CHAT, payload });
export const changeThemeAction = payload => ({ type: constants.THEME, payload });
export const defaultSettingsAction = payload => ({ type: constants.DEFAULT_SETTINGS, payload });
export const leaveAccountAction = payload => ({ type: constants.LEAVE_ACCOUNT, payload });
export const setNameAndEmailAction = payload => ({ type: constants.SET_NAME_AND_EMAIL, payload });
export const setToUserListAction = payload => ({ type: constants.SET_TO_USER_LIST, payload });
export const changeWindowState = payload => ({ type: constants.USER_LIST, payload });
export const setToMessagesListAction = payload => ({ type: constants.MESSAGE_LIST, payload });Action