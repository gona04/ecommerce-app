import { useContext } from "react";
import { ProductContext } from "../../context/productContext/product.context";
import ProductCard from "../../components/products/product-card.component";

import "./shop.styles.scss";

function Shop() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <h2 className="hats"> Hats </h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div>
    </>
  );
}

export default Shop;
