import * as constants from "../../constants";

const initialState = {
    privateChat: true,
    emoji: true,
    theme: 'light',
    lang: 'US',
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
        case constants.DEFAULT_SETTINGS:
            return {
                ...state,
                lang: action.payload.lang,
                privateChat: action.payload.private,
                emoji: action.payload.emoji,
                theme: action.payload.theme,
            };
        default:
            return state;
    }
};