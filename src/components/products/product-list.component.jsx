// import { useContext } from 'react';
// import Button from '../button/button.component'
// import { CartContext } from '../../context/cart.context';
import './product-list.styles.scss';

function ProductList() {
    // const {products } = useContext(ProductContext);
    // const {addToCart} = useContext(CartContext)

    // function addProductToCart(id, name, price, imageUrl) {
    //     const product = {id, name, price, imageUrl};
    //     addToCart(product);
    // }

return (
    <>
    <h2>Hats</h2>
    <div className='product-list'>
        {
            {/* products.map(({id, name, price, imageUrl}) => (
                <div className='product-list-container' key={id}>
                    <div className='image-button-container'>
                        <img src={imageUrl}/>
                        <Button type={'button'} onClick={() => addProductToCart(id, name, price, imageUrl)}  buttonType={'inverted'} children={'Add To Cart'}/>
                    </div>
                    <div className='product-details'>
                    <span>{name}</span>
                    <span> {price} </span>
                    </div>
                </div>
            ))  */}
        }
    </div>
    </>
)
}

export default ProductList;