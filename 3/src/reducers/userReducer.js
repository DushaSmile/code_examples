import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,

    USER_LOGOUT
} from '../actions/userReducer/types';

const initialState = {
    isLoggedIn: false,
    error_message: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.response.id_token,
                error_message: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error_message: action.error
            };


        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.response.id_token,
                error_message: null
            };
         case REGISTER_FAILURE:
            return {
                ...state,
                error_message: action.error
            };


        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                ...action.response.user_info_token,
                error_message: null
            };
        case GET_USER_INFO_FAILURE:
            return {
                ...state,
                error_message: action.error
            };


        case USER_LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };


        default:
            return state;
    }
};

export default userReducer;