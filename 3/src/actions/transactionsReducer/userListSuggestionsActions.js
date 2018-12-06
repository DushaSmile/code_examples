import {
    GET_USER_LIST_SUGGESTIONS,
    GET_USER_LIST_SUGGESTIONS_SUCCESS,
    GET_USER_LIST_SUGGESTIONS_FAILURE,

    CLEAN_USER_LIST_SUGGESTIONS
} from './types';

// Begin AJAX request
export const getUserListSuggestions = (token, suggestion) => ({
    type: GET_USER_LIST_SUGGESTIONS,
    token: token,
    suggestion: suggestion
});

// AJAX Success
export const getUserListSuggestionsSuccess = response => ({
    type: GET_USER_LIST_SUGGESTIONS_SUCCESS,
    response: response
});

// AJAX Failure
export const getUserListSuggestionsFailure = error => ({
    type: GET_USER_LIST_SUGGESTIONS_FAILURE,
    error: error
});


// Clean suggestions
export const cleanUserListSuggestions = () => ({
    type: CLEAN_USER_LIST_SUGGESTIONS
});