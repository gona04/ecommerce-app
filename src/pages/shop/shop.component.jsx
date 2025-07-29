import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext/product.context";
import ProductCard from "../../components/products/product-card.component";

import "./shop.styles.scss";

function Shop() {
  const { products } = useContext(ProductContext);

  return Object.keys(products).map((title) => (
    <React.Fragment key={title}>
      <h2 className="hats"> {title} </h2>
      <div className="products-container">
        {products[title].map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </React.Fragment>
  ));
}

export default Shop;
