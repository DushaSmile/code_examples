// React
import React from 'react';

// Components
import { Table as BootstrapTable } from 'react-bootstrap';

const Table = ({transactions}) => (
    <BootstrapTable>
        <thead>
            <tr>
                <th>Username</th>
                <th>Data</th>
                <th>Amount</th>
                <th>Balance</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map(transaction => (
                <tr key={transaction.id}>
                    <td>{transaction.username}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.balance}</td>
                </tr>
            ))}
        </tbody>
    </BootstrapTable>
);

export default Table;