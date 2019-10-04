export const getModalType = state => state.modal.type;
export const getIsModalOpen = state => state.modal.isOpen;
export const getModalContent = state => state.modal.content;

export const getIsPrivateChat = state => state.settings.privateChat;
export const getIsEmoji = state => state.settings.emoji;
export const getIsTheme = state => state.settings.theme;
export const getDefaultLanguage = state => state.settings.lang;