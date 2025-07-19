import { useContext } from "react";
import "./cart-items.styles.scss";
import { CartContext } from "../../../context/cart.context";

function CartItems({ product }) {
  const { addToCart, deleteInstanceFromcart, deleteAllFromCart } =
    useContext(CartContext);
  /*
        Functions for CRUD operatons
    */
  function addSelectedProduct(product) {
    addToCart(product);
  }

  function reduceCount(id) {
    console.log("reduceCount");
    deleteInstanceFromcart(id);
  }

  function clearFromCart(id) {
    deleteAllFromCart(id);
  }
  return (
    <>
      <tr key={product.id} className="table-body-row">
        <td>
          <img className="table-img" src={product.imageUrl} />
        </td>
        <td>{product.name}</td>
        <td>
          <span className="less-more" onClick={() => reduceCount(product.id)}>
            {"< "}
          </span>
          <span>{product.count} </span>
          <span
            onClick={() => addSelectedProduct(product)}
            className="less-more"
          >
            {" >"}
          </span>
        </td>
        <td> {product.price * product.count} </td>
        <td>
          <button onClick={() => clearFromCart(product.id)} className="clear-button">
            &#10005;
          </button>
        </td>
      </tr>
    </>
  );
}

export default CartItems;
