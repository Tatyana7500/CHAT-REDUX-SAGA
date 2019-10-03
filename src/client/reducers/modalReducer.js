import { REGISTER_USER_ERROR, IS_OPEN_MODAL } from "../../constants";

const initialState = {
    isOpen: false,
    errorText: 'Error',
};

export default function(state = initialState, action) {
    switch(action.type) {
        case REGISTER_USER_ERROR:
            return { ...state, isOpen: true };
        case IS_OPEN_MODAL:
            return { ...state, isOpen: false };
        default:
            return state;
    }
}