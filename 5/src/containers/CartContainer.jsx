import React from 'react';

import { connect } from 'react-redux';

import { Grid, Row } from 'react-bootstrap';
import ItemForm from '../components/CartContainer/ItemForm/NewItemForm';
import DiscountForm from '../components/CartContainer/DiscountForm/ApplyCartDiscountForm';
import Cart from '../components/CartContainer/Cart';

import { addCartItem } from '../actions/cartActions';
import { applyDiscount } from '../actions/cartActions';

class CartContainer extends React.Component {

    constructor(props) {
        super(props);
        this.onNewItemFormSubmit = this.onNewItemFormSubmit.bind(this);
        this.onApplyCartDiscountForm = this.onApplyCartDiscountForm.bind(this);
    }

    onNewItemFormSubmit(values) {
        this.props.addCartItem({
            name: values.name,
            price: Number.parseInt(values.price)
        });
    }

    onApplyCartDiscountForm(values) {
        this.props.applyDiscount(Number.parseInt(values.discount));
    }

    render() {
        return (
            <Grid>
                <Row>
                    <h1>Добавить продукт</h1>
                    <ItemForm onSubmit={this.onNewItemFormSubmit} />
                </Row>
                <hr/>
                <Row>
                    <h1>Корзина</h1>
                    <Cart cart={this.props.cart} />
                    <DiscountForm onSubmit={this.onApplyCartDiscountForm} />
                </Row>
            </Grid>
        )
    }
}

export default connect(
    state => ({
        cart: state.cart
    }),
    dispatch => {
        return {
            addCartItem: item => {
                dispatch(
                    addCartItem(item)
                )
            },
            applyDiscount: discount => {
                dispatch(
                    applyDiscount(discount)
                )
            }
        }
    }
)(CartContainer);