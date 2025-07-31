import { useContext, useEffect } from "react";
import { CategoryContext } from "../../../context/category.context";
import "./product-list.styles.scss";
import ProductPreview from "../product-preview/product-preview.component";

function ProductList() {
  const { categoryMap } = useContext(CategoryContext);

  useEffect(() => {
    if (categoryMap.hats) console.log(categoryMap.hats[0]);
  }, [categoryMap]);

  return (
    <div className="shop-container">
      {Object.keys(categoryMap).map((category) => (
       <ProductPreview key={category} title={category} products={categoryMap[category]}/>
      ))}
    </div>
  );
}

export default ProductList;

// to be added in product details 
/*  <div key={category}>
          <h2>{category.toUpperCase()}</h2>
          <div className="product-list">
            {Array.isArray(categoryMap[category]) && categoryMap[category].length > 0 ? (
              categoryMap[category].map((product) => (
                <div className="product-list-container" key={product.id}>
                  <ProductItem product={product} />
                </div>
              ))
            ) : (
              <div>No products found.</div>
            )}
          </div>
        </div> */