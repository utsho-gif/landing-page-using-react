import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleCart} = props;
    const {name, img, price, seller, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='name'>{name}</p>
                <h4>${price}</h4>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} Stars</small></p>
            </div>
            <button className='btn'>
                <p onClick={()=> handleCart(product)}>Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Product;