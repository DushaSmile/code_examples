// React
import React from 'react';

const TableRow = ({row}) => (
    <tr>
        <td>{row.username}</td>
        <td>{row.date}</td>
        <td>{row.amount}</td>
        <td>{row.balance}</td>
    </tr>
);

export default TableRow;