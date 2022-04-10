import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (item) => {
        const rest = cart.filter(i => i.id !== item.id)
        setCart(rest);
        removeFromDb(item.id);
    }
    const navigator = useNavigate()
    const goTo = () =>{
        navigator('/inventory')
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(item => <ReviewItem handleRemoveProduct = {handleRemoveProduct} item={item} key={item.id}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                   <button onClick={goTo}>To Inventory</button>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;