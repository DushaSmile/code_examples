// React
import React from 'react';

// Components
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({transactions}) => (
    <table>
        <TableHeader />
        <tbody>
        {transactions.map(transaction => (
            <TableRow key={transaction.id} row={transaction} />
        ))}
        </tbody>
    </table>
);

export default Table;