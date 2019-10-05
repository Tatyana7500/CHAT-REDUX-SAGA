import * as constants from '../../constants';

const initialState = {
    windowState: '',
};

export default function (state = initialState, action) {
    switch (action.type) { 
        case constants.USER_LIST:
            return {
                ...state,
                windowState: action.payload.state,
            }
        default: {
            return state;
        }
    }
}