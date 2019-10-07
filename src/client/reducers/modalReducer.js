import * as constants from "../../constants";

const initialState = {
    isOpen: false,
    isOpenMenu: false,
    content: '',
    type: '',
};

export default function(state = initialState, action) {
    switch(action.type) {
        case constants.SHOW_MODAL:
            return {
                ...state,
                isOpen: action.payload.isOpen, content: action.payload.content, type: action.payload.modalType
            };
        case constants.SHOW_MENU:
            return {
                ...state,
                isOpenMenu: action.payload.isOpenMenu,
            };
        default:
            return state;
    }
}