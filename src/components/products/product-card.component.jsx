import { useContext } from "react";
import "./product-card.styles.scss";
import { CartContext } from "../../context/cartContext/cart.context";

function ProductCard({ product }) {
  const { name, imageUrl, price } = product;
  const { addCartItems } = useContext(CartContext);

  function selectProduct() {
    addCartItems(product);
  }
  return (
    <div className="products-body">
      <div
        className="image-style"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <button
          type="button"
          className="button-add-to-cart"
          onClick={selectProduct}
        >
          Add To Cart{" "}
        </button>
      </div>
      <div className="product-label">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
