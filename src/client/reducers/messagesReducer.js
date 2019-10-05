import * as constants from '../../constants';

const initialState = {
    messageList: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.MESSAGE_LIST:
            return {
                ...state,
                messageList: action.payload.messageList,
            }
        default: {
            return state;
        }
    }
}