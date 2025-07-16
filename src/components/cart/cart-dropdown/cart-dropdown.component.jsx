import React from 'react';

import './cart-dropdown.styles.scss';

const CartDropdown = ({products}) => (
  <div className='cart-dropdown-container'>
    <div className='cart-items' >
        {
            products.map(p => {
                <span> {p.name} </span>
            })
        }
    </div>
    <button> Go To Checkout </button>
  </div>
);

export default CartDropdown;