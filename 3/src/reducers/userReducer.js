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
    isLoggedIn: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.id_token
            };
        case LOGIN_FAILURE:
            alert(action.payload);
            return state;

        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.id_token
            };
        case REGISTER_FAILURE:
            alert(action.payload);
            return state;

        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                ...action.payload.user_info_token
            };
        case GET_USER_INFO_FAILURE:
            alert(action.payload);
            return state;

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