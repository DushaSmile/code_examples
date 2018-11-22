import React from 'react';

const TableRow = ({ row }) => {
    return (
        <tr>
            <td>{ row.price } { currencySymbols[row.currency] }</td>
            <td>{ row.id }</td>
            <td>{ row.date_from } - { row.date_until }</td>
            <td>{ row.passengers }</td>
        </tr>
    )
};

const currencySymbols = {
    'USD': '$',
    'EUR': '€'
};

export default TableRow;