import { useContext } from "react";
import Button from "../../button/button.component";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../../context/cart.context";
import { useNavigate } from "react-router-dom";

function CartDropdown() {
  const { selectedProductsCount, setIsOpen } = useContext(CartContext);
  const nav = useNavigate();

  function navigateToCheckout() {
    nav("/checkout");
    setIsOpen(false);
  }

  return (
    <aside className="cart-dropdown">
      <main className="cart-item-container">
        {
          selectedProductsCount.length !== 0 ? 
          (
            selectedProductsCount.map(({ id, name, imageUrl, count, price }) => (
          <div key={id} className="cart-item">
            <img src={imageUrl} alt={name} className="cart-image" />
            <div className="item-details">
              <span className="name">{name}</span>
              <span className="price">
                {count} x ${price}
              </span>
            </div>
          </div>
        ))
          ) : (
            <div className="empty-cart-style">
              Your Cart Is Empty
            </div>
          )
        }
      </main>
      <div className="button-box">
        <Button type="button" onClick={navigateToCheckout}>
          GO TO CHECKOUT
        </Button>
      </div>
    </aside>
  );
}

export default CartDropdown;