import { combineReducers } from 'redux';
import contactReduceer from './contactReducer';

export default combineReducers({
  contactList: contactReduceer,
});
