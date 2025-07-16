import React from 'react';

import './cart-dropdown.styles.scss';

const CartDropdown = ({uniqueProducts}) => (
  <div className="drop-down">
        <div className="dorp-down-data-wrapper">
          {uniqueProducts.map((product) => (
            <div key={product.id} className="drop-down-data">
              <img src={product.imageUrl} />
              <div className="product-details">
                <span className="product-name">{product.name}</span>
                <span>
                  {product.count} x ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="button-wrapper">
          <button> Go To Cart </button>
        </div>
      </div>
);

export default CartDropdown;