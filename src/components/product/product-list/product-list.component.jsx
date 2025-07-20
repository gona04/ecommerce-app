import { useContext, useEffect } from "react";
import ProductItem from "../product-item/product-item.component";
import { CategoryContext } from "../../../context/category.context";
import "./product-list.styles.scss";

function ProductList() {
  const { categoryMap } = useContext(CategoryContext);

  useEffect(() => {
    if (categoryMap.hats) console.log(categoryMap.hats[0]);
  }, [categoryMap]);

  return (
    <>
      {Object.keys(categoryMap).map((category) => (
        <div key={category}>
          <h2>{category.toUpperCase()}</h2>
          <div className="product-list">
            {Array.isArray(categoryMap[category]) && categoryMap[category].length > 0 ? (
              categoryMap[category].slice(0, 4).map((product) => (
                <div className="product-list-container" key={product.id}>
                  <ProductItem product={product} />
                </div>
              ))
            ) : (
              <div>No products found.</div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductList;