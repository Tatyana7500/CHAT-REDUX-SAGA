import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
   user: usersReducer,
   modal: modalReducer,
});

export default rootReducer;