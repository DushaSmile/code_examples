import {
    ADD_CART_ITEM,
    APPLY_DISCOUNT
} from '../actions/types';

const initialState = {
    items: [],
    discount: 10,
    total: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.item,
                ],
                total: state.total + action.item.price
            };
        case APPLY_DISCOUNT:
            return {
                ...state,
                discount: action.discount
            };
        default:
            return state;
    }
};

export default cartReducer;