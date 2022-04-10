import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, children} = props;
    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        price += product.price * product.quantity;
        shipping += product.shipping;
        quantity += product.quantity;
    }
    const tax = price * 0.1;
    const grandTotal = price + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${parseFloat(tax.toFixed(2))}</p>
            <h5>Grand Price: ${grandTotal.toFixed(2)}</h5>
            <p>{children}</p>
        </div>
    );
};

export default Cart;