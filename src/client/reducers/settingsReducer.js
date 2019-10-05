import * as constants from "../../constants";

const initialState = {
    privateChat: true,
    emoji: true,
    theme: '',
    lang: '',
};

export default function(state = initialState, action) {
    switch(action.type) {
        case constants.THEME:
            return {
                ...state,
                theme: action.payload.theme
            };
        case constants.LANGUAGE:
            return {
                ...state,
                lang: action.payload.lang
            };
        case constants.EMOJI:
            return {
                ...state,
                emoji: action.payload.emoji
            };
        case constants.PRIVATE_CHAT:
            return {
                ...state,
                privateChat: action.payload.privateChat
            };
        case constants.SETTINGS:
            return {
                ...state,
                lang: action.payload.lang,
                privateChat: action.payload.privateChat,
                emoji: action.payload.emoji,
                theme: action.payload.theme,
            };
        default:
            return state;
    }
};