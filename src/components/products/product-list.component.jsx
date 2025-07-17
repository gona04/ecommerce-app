import { useContext } from 'react';
import { ProductContext } from '../../context/product.context';
import Button from '../button/button.component'
import './product-list.styles.scss';

function ProductList() {
    const {products, setSelectedProducts, selectedProducts } = useContext(ProductContext);

    function addProductToCart(id, name, price, imageUrl) {
        const product = {id, name, price, imageUrl};
        setSelectedProducts([...selectedProducts, product])
    }
return (
    <div className='product-list'>
        {
            products.map(({id, name, price, imageUrl}) => (
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
            )) 
        }
    </div>
)
}

export default ProductList;