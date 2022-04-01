import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (item) => {
        const rest = cart.filter(i => i.id !== item.id)
        setCart(rest);
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(item => <ReviewItem handleRemoveProduct = {handleRemoveProduct} item={item} key={item.id}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;