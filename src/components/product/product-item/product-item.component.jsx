import React, { useContext } from "react";

import { CartContext } from "../../../context/cart.context";
import "./product-item.style.scss";
import Button from "../../button/button.component";

function ProductItem({ product, buttonVisible }) {
  const { addToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  function addProductToCart() {
    addToCart(product);
  }
  return (
    <div className='-product-cards-container'>
      <div className="image-button-container">
        <img src={imageUrl} />
        <Button
          className={`add-to-cart-btn ${buttonVisible ? "show" : "hide"}`}
          type={"button"}
          buttonVisible={buttonVisible}
          onClick={addProductToCart}
          buttonType={"inverted"}
          children={"Add To Cart"}
        />
      </div>
      <div className="product-details">
        <span>{name}</span>
        <span> {price} </span>
      </div>
    </div>
  );
}

export default ProductItem;
