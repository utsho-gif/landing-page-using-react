import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Select Product: {cart.length}</p>
        </div>
    );
};

export default Cart;