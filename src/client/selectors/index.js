export const getModalType = state => state.modal.type;
export const getIsModalOpen = state => state.modal.isOpen;
export const getModalContent = state => state.modal.content;

export const getSettings = state => state.settings;
export const getActiveEmoji = state => state.settings.emoji;
export const getCurrentTheme = state => state.settings.theme;
export const getDefaultLanguage = state => state.settings.lang;
export const getActivePrivateChat = state => state.settings.privateChat;

export const getName = state => state.user.name;
export const getEmail = state => state.user.email;
export const getUsers = state => state.user.users;
export const getIdSender = state => state.user.idSender;
export const getIdReceiver = state => state.user.idReceiver;
export const getUsersOnline = state => state.user.usersOnline;

export const getStateChat = state => state.messages.chat;
export const getEmojiMenu = state => state.messages.emojiMenu;
export const getMessage = state => state.messages.messageAreaValue;
export const getMessagesList = state => state.messages.messageList;

export const getWindowState = state => state.content.windowState;
