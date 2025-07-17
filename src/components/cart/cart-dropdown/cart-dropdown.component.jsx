import { useContext } from 'react';
import Button from '../../button/button.component';
import './cart-dropdown.styles.scss';
import { ProductContext } from '../../../context/product.context';

function CartDropdown() {
    const {selectedProductsCount} = useContext(ProductContext)
    return (
        <aside className='cart-dropdown'>
        <main className='cart-item-container'>
            {
                selectedProductsCount.map(({id, name, imageUrl, count, price}) => (
                    <div key={id} className="cart-item">
                        <img src={imageUrl} alt={name} className='cart-image'/>
                        <div className="item-details">
                            <span className="name">{name}</span>
                            <span className="price">{count} x ${price}</span>
                        </div>
                    </div>
                ))
            }
        </main>
           <footer className='button-box'>
             <Button children={'GO TO CART'}/>
           </footer>
        </aside>
    )
}

export default CartDropdown;