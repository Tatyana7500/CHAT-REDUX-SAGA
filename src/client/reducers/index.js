import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import modalReducer from './modalReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
   user: usersReducer,
   modal: modalReducer,
   settings: settingsReducer,
});

export default rootReducer;