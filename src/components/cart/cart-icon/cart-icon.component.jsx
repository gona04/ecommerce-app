import { useContext } from "react";
import cart_icon from "../../../assets/shopping-bag.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./cart-icon.styles.scss";
import { CartContext } from "../../../context/cart.context";

function CartIcon() {
  const { isOpen, setIsOpen, totalCount } =
    useContext(CartContext);


  return (
    <div className="cart-icon-wrapper" onClick={() => setIsOpen(!isOpen)}>
      <div className="cart-icon-button">
        <img src={cart_icon} alt="Shopping cart" />
        <span className="cart-count-badge">{totalCount}</span>
      </div>
      {isOpen && <CartDropdown />}
    </div>
  );
}

export default CartIcon;
