import {
    GET_ACCOUNT,
    GET_ACCOUNTS,
    ACCOUNTS_LOADING,
    CREATE_ACCOUNT
} from '../actions/types';

const initialState = {
    account: {},
    accounts: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_ACCOUNT:
        return {
          ...state,
          accounts: [action.payload, ...state.accounts]
        };
        case GET_ACCOUNT:
            return {
                ...state,
                account: action.payload,
                loading: false
            };
        case GET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload,
                loading: false
            };
        case ACCOUNTS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
