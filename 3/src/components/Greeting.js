// React
import React from 'react';

const Greeting = ({user}) => (
    <div>
        <h4>Hello, {user.name}</h4>
        <p>Your balance is {user.balance}</p>
        <p>Your E-Mail is {user.email}</p>
    </div>
);

export default Greeting;