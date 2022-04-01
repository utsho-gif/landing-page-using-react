import { faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { handleRemoveProduct, item } = props;
  const { name, img, price, shipping, quantity } = item;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-details">
          <p className="product-name" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            Price: <span className="colors">${price}</span>
          </p>
          <p>
            Shipping: <small>${shipping}</small>
          </p>
          <p>
            Quantity: <small>${quantity}</small>
          </p>
        </div>
        <div className="delete-btn">
          <button onClick={() => handleRemoveProduct(item)} className="delete-button">
            <FontAwesomeIcon
              className="dlt-icon"
              icon={faTrashRestoreAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
