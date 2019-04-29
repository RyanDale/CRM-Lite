import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import contactReduceer from './contactReducer';

export default combineReducers({
    account: accountReducer,
    contact: contactReduceer
});
