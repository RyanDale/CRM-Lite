import axios from 'axios';

import { GET_CONTACTS, CONTACTS_LOADING } from "./types";

export const getContacts = () => dispatch => {
    dispatch(setContactsLoading());
    axios.get('/api/contacts').then(response => dispatch({
        type: GET_CONTACTS,
        payload: response.data
    }));
}

export const setContactsLoading = () => {
    return {
      type: CONTACTS_LOADING
    };
  };
  