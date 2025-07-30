import { useContext, useEffect, useState } from "react";
import cartIcon from "../../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../../context/cartContext/cart.context";

function CartIcon({ isOpen = true }) {
  const { cartItems } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalItems(cartItems.reduce((acc,next) => acc = acc + next.count, 0));
  }, [cartItems])
 
  return (
    <div className="cart-wrapper">
    <div className="cart-icon-wrapper">
      <img src={cartIcon} />
      <span className="item-count">{totalItems}</span>
    </div>
    {isOpen && <CartDropdown uniqueProducts={cartItems} />}
  </div>
  );
}

export default CartIcon;
