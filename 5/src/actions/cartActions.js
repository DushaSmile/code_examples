import {
    ADD_CART_ITEM,
    APPLY_DISCOUNT
} from './types';

export const addCartItem = item => ({
    type: ADD_CART_ITEM,
    item: item
});

export const applyDiscount = discount => ({
    type: APPLY_DISCOUNT,
    discount: discount
});