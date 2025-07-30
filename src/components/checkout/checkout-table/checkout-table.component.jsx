import { useContext } from "react";
import { CartContext } from "../../../context/cartContext/cart.context";
import "./checkout-table.style.scss";

function CheckoutTable() {
  const { cartItems, addCartItems, deleteCartItem, deleteAllItems } = useContext(CartContext);

  function addItem(id) {
    const product = cartItems.find(item => item.id == id)
    addCartItems(product);
  }

  return (
    <div className="table-wrapper">
      {cartItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Price </th>
              <th> Quantity </th>
              <th> Total</th>
              <th> Remove </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(({ name, count, price, id }) => (
              <tr key={id}>
                <td> {name} </td>
                <td> {price} </td>
                <td>
                <span className="less-more" onClick={() => deleteCartItem(id)} > {'<'} </span>
                {count}
                <span className="less-more" onClick={() => addItem(id)}> {'>'} </span>
                </td>
                <td> {count * price} </td>
                <td  className="pointer" onClick={() => deleteAllItems(id)}> X </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <td colSpan={3}> Total </td>
            <td> {cartItems.reduce((sum, item) => sum + item.price * item.count, 0)} </td>
          </tfoot>
        </table>
      ): (
        <h2> No Item Added In The Cart </h2>
      )}
    </div>
  );
}

export default CheckoutTable;
