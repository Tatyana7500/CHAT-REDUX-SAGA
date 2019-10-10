import * as constants from '../../constants';

const initialState = {
    chat: '',
    messageList: [],
    emojiMenu: false,
    messageAreaValue: '',
};

export default function (state = initialState, action) {

    switch (action.type) {
        case constants.MESSAGE_LIST:
            return {
                ...state,
                messageList: action.payload,
            };
        case 'SOCKET_MESSAGE':
            return {
                ...state,
                messageList: [...state.messageList, action.payload],
            };
        case constants.OPEN_MENU_EMOJI:
            return {
                ...state,
                emojiMenu: action.payload.emojiMenu,
            };
        case constants.ADD_EMOJI:
            return {
                ...state,
                messageAreaValue: action.payload.message,
            };
        case constants.MESSAGE_VALUE:
            return {
                ...state,
                messageAreaValue: action.payload.message,
            };
        case constants.STATE_CHAT:
            return {
                ...state,
                chat: action.payload.chat,
            };

        default: {
            return state;
        }
    }
}