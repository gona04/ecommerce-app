import { useContext } from "react";
import { ProductContext } from "../../context/productContext/product.context";
import ProductCard from "../../components/products/product-card.component";

import "./shop.styles.scss";

function Shop() {
  const { products } = useContext(ProductContext);

  return Object.keys(products).map((title) => (
    <>
      <h2 className="hats"> {title} </h2>
      <div className="products-container">
        {products[title].map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div>
    </>
  ));
}

export default Shop;
