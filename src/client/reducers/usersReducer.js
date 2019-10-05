import * as constants from '../../constants';

const initialState = {
    users: [],
    name: '',
    email: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
         case constants.LEAVE_ACCOUNT:
           return {
                ...state,
                email: action.payload.email,
                name: action.payload.name,
                };
        case constants.SET_NAME_AND_EMAIL:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
            };
        case constants.SET_TO_USER_LIST:
            return {
                ...state,
                users: action.payload.users,
            }
        default:
            return state;
    }
}