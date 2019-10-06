import constants from '../../constants';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.SET_THEME_STORE:
            return { ...action.payload };
        default:
            return state;
    }
}