import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    fetch(
      `https://murmuring-basin-85240.herokuapp.com/product?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  useEffect(() => {
    fetch("https://murmuring-basin-85240.herokuapp.com/datacount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pageCount = Math.ceil(count / size);
        setPages(pageCount);
      });
  }, [page, size]);

  const handleCart = (selectedProduct) => {
    const exist = cart.find((product) => product._id === selectedProduct._id);
    let newCart = [];
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  const navigator = useNavigate();
  const goTo = () => {
    navigator("/orders");
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleCart={handleCart}
          ></Product>
        ))}
        <div className="pagination">
          {[...Array(pages).keys()].map((number) => (
            <button
              className={page === number ? "selected" : ""}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={goTo}>Review Item</button>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
