import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import modalReducer from './modalReducer';
import themeReducer from './themeReducer';
import contentReducer from './contentReducer';
import messagesReducer from './messagesReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
    user: usersReducer,
    modal: modalReducer,
    content: contentReducer,
    settings: settingsReducer,
    messages: messagesReducer,
    theme: themeReducer,
});

export default rootReducer;