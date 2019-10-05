import * as constants from '../../constants';

const initialState = {
    users: [],
};

export default function(state = initialState, action) {
    switch(action.type) {
        // case REGISTER_USER_SUCCESS:
        //     return { ...state, isSuccessRegister: true };
        default:
            return state;
    }
}