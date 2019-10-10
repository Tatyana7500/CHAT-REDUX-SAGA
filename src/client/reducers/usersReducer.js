import * as constants from '../../constants';

const initialState = {
    name: '',
    email: '',
    users: [],
    idSender: '',
    usersOnline: [],
    idReceiver: constants.ALL,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.LEAVE_ACCOUNT:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
            };
        case constants.SET_NAME_AND_EMAIL:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                idSender: action.payload.id,
            };
        case constants.SET_TO_USER_LIST:
            return {
                ...state,
                users: action.payload.users,
            };
        case constants.ID_RECEIVER:
            return {
                ...state,
                idReceiver: action.payload.idReceiver,
            };
        case constants.USER_ONLINE:
            return {
                ...state,
                usersOnline: action.payload,
            };
        default:
            return state;
    }
}