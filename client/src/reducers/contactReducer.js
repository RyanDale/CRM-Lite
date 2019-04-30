import {
    DELETE_CONTACT,
    GET_CONTACT,
    GET_CONTACTS,
    CONTACTS_LOADING,
    CREATE_CONTACT
} from '../actions/types';

const initialState = {
    contact: {},
    contacts: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.payload)
            };
        case GET_CONTACT:
            return {
                ...state,
                contact: action.payload,
                loading: false
            };
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                loading: false
            };
        case CONTACTS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
