import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";

function Checkout() {
  const { selectedProductsCount, setSelectedProductCount } =
    useContext(CartContext);
  return (
    <div className="table-container">
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
          {selectedProductsCount.map(({ id, name, imageUrl, price, count }) => (
            <tr key={id} className="table-body-row">
              <td>
                <img className="table-img" src={imageUrl} />
              </td>
              <td>{name}</td>
              <td> {count} </td>
              <td> {price * count} </td>
              <td>
                <button>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Checkout;
