import { REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from '../../constants';

export default function(state = [], action) {
    const response = action.response;

    switch(action.type) {
        case REGISTER_USER_SUCCESS:
            return { ...state, response };
        case REGISTER_USER_ERROR:
            return { ...state, response };
        default:
            return state;
    }
}