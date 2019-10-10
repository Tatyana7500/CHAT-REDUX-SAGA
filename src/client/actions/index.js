import * as constants from '../../constants';

export const authUser = payload => ({ type: constants.AUTH_USER, payload });
export const createUser = payload => ({ type: constants.CREATE_USER, payload });
export const showModalAction = payload => ({ type: constants.SHOW_MODAL, payload });
export const showMenuAction = payload => ({ type: constants.SHOW_MENU, payload});
export const handleHideModal = payload => ({ type: constants.HANDLE_HIDE_MODAL, payload});
export const handleOpenModal = payload => ({ type: constants.HANDLE_OPEN_MODAL, payload});
export const addUserOnlineAction = payload => ({ type: constants.USER_ONLINE, payload });

export const settingsAction = payload => ({ type: constants.SETTINGS, payload });
export const changeThemeAction = payload => ({ type: constants.THEME, payload });
export const changeLanguageAction = payload => ({ type: constants.LANGUAGE, payload });
export const changeActiveEmojiAction = payload => ({ type: constants.EMOJI, payload });
export const changeActivePrivateChatAction = payload => ({ type: constants.PRIVATE_CHAT, payload });

export const changeWindowState = payload => ({ type: constants.USER_LIST, payload });
export const idReceiverAction = payload => ({ type: constants.ID_RECEIVER, payload });
export const leaveAccountAction = payload => ({ type: constants.LEAVE_ACCOUNT, payload });
export const setToUserListAction = payload => ({ type: constants.SET_TO_USER_LIST, payload });
export const setToMessagesListAction = payload => ({ type: constants.MESSAGE_LIST, payload });
export const setNameAndEmailAction = payload => ({ type: constants.SET_NAME_AND_EMAIL, payload });

export const addEmojiAction = payload => ({ type: constants.ADD_EMOJI, payload });
export const changeStateChat = payload => ({ type: constants.STATE_CHAT, payload });
export const showEmojiAction = payload => ({ type: constants.OPEN_MENU_EMOJI, payload });
export const updateMessageListAction = payload => ({ type: constants.MESSAGE_LIST, payload });
export const updateMessageValueAction = payload => ({ type: constants.MESSAGE_VALUE, payload });
export const socketMessageAction = payload => ({ type: constants.SOCKET_MESSAGE, payload });
export const initSocketChanelAction = payload => ({ type: constants.INIT_SOCKETS, payload });
