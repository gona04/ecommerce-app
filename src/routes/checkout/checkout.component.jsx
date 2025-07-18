import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";

function Checkout() {
  const {
    selectedProductsCount,
    setSelectedProductCount,
    setSelectedProducts,
    selectedProducts,
  } = useContext(CartContext);

  //Temp array to use
  let sp = [...selectedProductsCount];
  let p = [...selectedProducts];

  function addSelectedProduct(index, id) {
    sp[index].count += 1;
    setSelectedProductCount([...sp]);
    addsp(id)
  }

  function addsp(id) {
    let pObj = p.find(i => i.id == id);
    p.push(pObj);
    console.log(p);
    setSelectedProducts([...p])
  }

  function reduceCount(index, id) {
    sp[index].count -= 1;
    setSelectedProductCount([...sp]);
    const pIndex = findingOneInstance(id)
    deleteOneInstanceFromSelectedProducts(pIndex);
  }

  function deleteSelectedProduct(index, id) {
    sp.splice(index, 1);
    setSelectedProductCount([...sp]);
    deletingFromSelectedProducts(id);
  }

  function deleteOneInstanceFromSelectedProducts(index) {
    p.splice(index, 1);
    setSelectedProducts([...p]);
  }

  function deletingFromSelectedProducts(id) {
    p = p.filter(a => a.id !== id);
    setSelectedProducts([...p]);
  }

  function findingOneInstance(id) {
    return p.findIndex((a) => a.id == id);
  }
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
          {selectedProductsCount.map(
            ({ id, name, imageUrl, price, count }, i) => (
              <tr key={id} className="table-body-row">
                <td>
                  <img className="table-img" src={imageUrl} />
                </td>
                <td>{name}</td>
                <td>
                  <span
                    className="less-more"
                    onClick={() => reduceCount(i, id)}
                  >
                    {"< "}
                  </span>
                  <span>{count} </span>
                  <span  onClick={() => addSelectedProduct(i, id)} className="less-more">{" >"}</span>
                </td>
                <td> {price * count} </td>
                <td>
                  <button onClick={() => deleteSelectedProduct(i, id)}>
                    X
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Checkout;
