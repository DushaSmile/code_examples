import { GET_DATA_SUCCESS, GET_DATA_FAILURE } from '../actions/types';

const dataReducer = (state = {}, action) => {

    switch (action.type) {

        case GET_DATA_SUCCESS:
            return { ...state, data: action.payload };

        case GET_DATA_FAILURE:
            alert(`Failed to request. ${action.error}`);
            return state;

        default:
            return state

    }

};

export default dataReducer;