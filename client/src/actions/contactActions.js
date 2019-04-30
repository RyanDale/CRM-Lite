import axios from 'axios';

import { GET_CONTACT, GET_CONTACTS, CONTACTS_LOADING, CREATE_CONTACT, DELETE_CONTACT } from "./types";

export const createContact = contact => (dispatch, getState) => {
    axios
      .post('/api/contacts', contact, getState)
      .then(response =>
        dispatch({
          type: CREATE_CONTACT,
          payload: response.data
        })
      );
  };

export const deleteContact = id => dispatch => {
    axios.delete(`/api/contacts/${id}`).then(() => dispatch({
        type: DELETE_CONTACT,
        payload: id
    }));
}

export const getContact = id => dispatch => {
    dispatch(setContactsLoading());
    axios.get(`/api/contacts/${id}`).then(response => dispatch({
        type: GET_CONTACT,
        payload: response.data
    }));
}

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
