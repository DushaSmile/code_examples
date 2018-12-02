import {
    GET_FILTERED_TRANSACTIONS_SUCCESS,
    GET_FILTERED_TRANSACTIONS_FAILURE,

    CLEAN_FILTERED_TRANSACTIONS,

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
        case GET_FILTERED_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                suggestions: action.payload
            };
        case GET_FILTERED_TRANSACTIONS_FAILURE:
            alert(action.payload);
            return state;

        case CLEAN_FILTERED_TRANSACTIONS:
            return initialState;

        case GET_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                recent_transactions: [ ...action.payload.trans_token ]
            };
        case GET_TRANSACTIONS_FAILURE:
            alert(action.payload);
            return state;


        default:
            return state;
    }
};

export default transactionsReducer;