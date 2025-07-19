import { useContext } from "react";

import { CartContext } from "../../../context/cart.context";
import "./product-item.style.scss";
import Button from "../../button/button.component";

function ProductItem({ product }) {
  const { addToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  function addProductToCart() {
    addToCart(product);
  }
  return (
    <>
      <div className="image-button-container">
        <img src={imageUrl} />
        <Button
          type={"button"}
          onClick={addProductToCart}
          buttonType={"inverted"}
          children={"Add To Cart"}
        />
      </div>
      <div className="product-details">
        <span>{name}</span>
        <span> {price} </span>
      </div>
    </>
  );
}

export default ProductItem;
