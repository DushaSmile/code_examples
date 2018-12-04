import {
    GET_USER_LIST_SUGGESTIONS_SUCCESS,
    GET_USER_LIST_SUGGESTIONS_FAILURE,

    CLEAN_USER_LIST_SUGGESTIONS,

    GET_TRANSACTIONS_SUCCESS,
    GET_TRANSACTIONS_FAILURE
} from '../actions/transactionsReducer/types';

const initialState = {
    suggestions: [
        
    ],
    recent_transactions: [

    ]
};

const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LIST_SUGGESTIONS_SUCCESS:
            return {
                ...state,
                suggestions: action.response
            };
        case GET_USER_LIST_SUGGESTIONS_FAILURE:
            return {
                ...state,
                error_message: action.error
            };


        case CLEAN_USER_LIST_SUGGESTIONS:
            return initialState;


        case GET_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                recent_transactions: [ ...action.response.trans_token ]
            };
        case GET_TRANSACTIONS_FAILURE:
            return {
                ...state,
                error_message: action.error
            };


        default:
            return state;
    }
};

export default transactionsReducer;