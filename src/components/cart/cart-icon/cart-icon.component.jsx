import { useContext, useEffect } from "react";
import cart_icon from "../../../assets/shopping-bag.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./cart-icon.styles.scss";
import { ProductContext } from "../../../context/product.context";

function CartIcon() {
  const { selectedProducts, selectedProductsCount, setSelectedProductCount } =
    useContext(ProductContext);

  function addProductsWithCounts() {
    let newObj = {};
    let sp = [...selectedProducts];

    sp.forEach((p) => {
      if (newObj[p.id]) newObj[p.id].count = newObj[p.id].count + 1;
      else {
        newObj[p.id] = { ...p, count: 1 };
      }
    });
    setSelectedProductCount([...Object.values(newObj)]);
  }

  useEffect(() => {
    addProductsWithCounts();
  }, [selectedProducts]);

  return (
    <div className="cart-icon-wrapper">
      <div className="cart-icon-button">
        <img src={cart_icon} alt="Shopping cart" />
        <span className="cart-count-badge">{selectedProducts.length}</span>
      </div>
      <CartDropdown/>
    </div>
  );
}

export default CartIcon;
