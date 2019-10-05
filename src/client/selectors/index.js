export const getModalType = state => state.modal.type;
export const getIsModalOpen = state => state.modal.isOpen;
export const getModalContent = state => state.modal.content;

export const getSettings = state => state.settings;
export const getActiveEmoji = state => state.settings.emoji;
export const getCurrentTheme = state => state.settings.theme;
export const getDefaultLanguage = state => state.settings.lang;
export const getActivePrivateChat = state => state.settings.privateChat;
