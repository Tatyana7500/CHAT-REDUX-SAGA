import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import modalReducer from './modalReducer';
import contentReducer from './contentReducer';
import messagesReducer from './messagesReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
   user: usersReducer,
   modal: modalReducer,
   settings: settingsReducer,
   content: contentReducer,
   messages: messagesReducer,
});

export default rootReducer;