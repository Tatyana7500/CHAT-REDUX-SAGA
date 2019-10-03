import {REGISTER_USER_SUCCESS, REGISTER_USER_ERROR, CREATE_USER} from '../../constants';

const initialState = {
    isSuccessRegister: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
        // case REGISTER_USER_SUCCESS:
        //     return { ...state, isSuccessRegister: true };
        default:
            return state;
    }
}