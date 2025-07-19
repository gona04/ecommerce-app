import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";
import CartItems from "../../components/cart/cart-items/cart-items.component";

function Checkout() {
  const {
    cartItems,
    totalCost
  } = useContext(CartContext);


  return (
    <div className="table-container">
      {cartItems.length !== 0 ? (
        <table>
          <thead>
            <tr className="table-header">
              <th>Product</th>
              <th>Description</th>
              <th>Quantity</th>
              <th> Price </th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((product) => (
              <CartItems product={product}/>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>
                <strong>Total is :</strong>
              </td>
              <td> {totalCost} </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div className="text-center">
          <em>Your Cart Is Empty</em>
        </div>
      )}
    </div>
  );
}

export default Checkout;
