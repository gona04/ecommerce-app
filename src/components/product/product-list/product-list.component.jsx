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