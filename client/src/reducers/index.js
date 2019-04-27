import { combineReducers } from 'redux';
import contactReduceer from './contactReducer';

export default combineReducers({
    contact: contactReduceer,
});
