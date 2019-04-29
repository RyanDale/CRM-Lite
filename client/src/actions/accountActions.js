import axios from 'axios';

import { GET_ACCOUNT, GET_ACCOUNTS, ACCOUNTS_LOADING, CREATE_ACCOUNT } from "./types";

export const createAccount = account => (dispatch, getState) => {
    axios
      .post('/api/accounts', account, getState)
      .then(response =>
        dispatch({
          type: CREATE_ACCOUNT,
          payload: response.data
        })
      );
  };

export const getAccount = id => dispatch => {
    dispatch(setAccountsLoading());
    axios.get(`/api/accounts/${id}`).then(response => dispatch({
        type: GET_ACCOUNT,
        payload: response.data
    }));
}

export const getAccounts = () => dispatch => {
    dispatch(setAccountsLoading());
    axios.get('/api/accounts').then(response => dispatch({
        type: GET_ACCOUNTS,
        payload: response.data
    }));
}

export const setAccountsLoading = () => {
    return {
      type: ACCOUNTS_LOADING
    };
  };
