import React from 'react';

import './cart-dropdown.styles.scss';
import { Link } from 'react-router-dom';

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
          <Link to={'/checkout'}> Go To Cart </Link>
        </div>
      </div>
);

export default CartDropdown;