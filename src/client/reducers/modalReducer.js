import * as constants from "../../constants";

const initialState = {
    isOpen: false,
    content: '',
    type: '',
};

export default function(state = initialState, action) {
    switch(action.type) {
        case constants.SHOW_MODAL:
            return {
                ...state,
                isOpen: true, content: action.payload.content, type: action.payload.modalType
            };
        case constants.CLOSE_MODAL:
            return {
                ...state,
                isOpen: false, content: action.payload.content, type: action.payload.modalType
            };
        default:
            return state;
    }
}