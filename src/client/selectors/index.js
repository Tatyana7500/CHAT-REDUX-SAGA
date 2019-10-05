export const getModalType = state => state.modal.type;
export const getIsModalOpen = state => state.modal.isOpen;
export const getModalContent = state => state.modal.content;

export const getIsPrivateChat = state => state.settings.privateChat;
export const getIsEmoji = state => state.settings.emoji;
export const getCurrentTheme = state => state.settings.theme;
export const getDefaultLanguage = state => state.settings.lang;
export const getName = state => state.user.name;
export const getEmail = state => state.user.email;
export const getUsers = state => state.user.users;
export const getWindowState = state => state.content.windowState;