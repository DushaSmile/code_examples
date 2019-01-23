import React from 'react';

import { Table, Col } from 'react-bootstrap';

import calculateDiscount from '../../util/calculateDiscount';

const Cart = ({cart}) => {
    const calculatedDiscountItems = calculateDiscount(cart.items, cart.discount);
    return (
        <Col xs={12} sm={6} md={6}>
            <Table bordered={true} striped={true}>
                <thead>
                    <tr>
                        <th>Продукт</th>
                        <th>Цена</th>
                        <th>Цена со скидкой</th>
                    </tr>
                </thead>
                <tbody>
                    {calculatedDiscountItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.discPrice}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    {cart.items.length > 0 && (
                        <tr>
                            <td align="right">Итого</td>
                            <td>{calculatedDiscountItems.reduce((prev, el) => prev + el.price, 0)}</td>
                            <td>{calculatedDiscountItems.reduce((prev, el) => prev + el.discPrice, 0)}</td>
                        </tr>
                    )}
                </tfoot>
            </Table>
        </Col>
    )
};

export default Cart;