import { useContext } from 'react';
import { ProductContext } from '../../context/productContext/product.context';
import './product-card.styles.scss';

function ProductCard({products}) {
    const {name, imageUrl, price} = products;
    const {selectedProducts, setSelectedProducts} = useContext(ProductContext);

    function selectProduct() {
        let currentList = [...selectedProducts];
        currentList.push(products);
        setSelectedProducts(currentList);
    }
    return (
        <div className='products-body'>
            <div className='image-style' style={{backgroundImage:`url(${imageUrl})`}}>
                        <button type='button' className='button-add-to-cart' onClick={selectProduct}> Add To Cart </button>
                    </div>
                    <div className='product-label'>
                        <p>{name}</p>
                        <p>{price}</p>
                    </div>
        </div>
    )
}

export default ProductCard;