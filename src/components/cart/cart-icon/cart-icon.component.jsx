import { useContext, useEffect } from "react";
import cartIcon from "../../../assets/shopping-bag.svg";
import { ProductContext } from "../../../context/productContext/product.context";
import "./cart-icon.styles.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

function CartIcon({ isOpen = true }) {
  const { selectedProducts } = useContext(ProductContext);
  let totalItems = 0;

  const productCounts = {};
  selectedProducts.forEach((product) => {
    if (productCounts[product.id]) {
      productCounts[product.id].count += 1;
      totalItems = totalItems + 1;
    } else {
      productCounts[product.id] = { ...product, count: 1 };
      totalItems = totalItems + 1;
    }
  });
  console.log(totalItems);

  // Get an array of unique products with counts
  const uniqueProducts = Object.values(productCounts);
  console.log(isOpen);
  return (
    <div className="cart-wrapper">
      <div className="cart-icon-wrapper">
        <img src={cartIcon} />
        <span className="item-count">{totalItems}</span>
      </div>
      {isOpen && (
        <div className="drop-down">
          <div className="dorp-down-data-wrapper">
            {uniqueProducts.map((product) => (
              <div key={product.id} className="drop-down-data">
                <img src={product.imageUrl} />
                <div className="product-details">
                  <span className="product-name">{product.name}</span>
                  <span>
                    {" "}
                    {product.count} x ${product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="button-wrapper">
            <button> Go To Cart </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartIcon;
