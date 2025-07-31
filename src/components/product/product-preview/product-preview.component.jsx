import { useNavigate } from "react-router-dom";
import ProductItem from '../product-item/product-item.component';

import './product-preview.style.scss';

function ProductPreview({title, products}) {
    const navigate = useNavigate()
    return (
        <div className='category-preview-contaner'>
            <h2>
                <span className='title' onClick={() => navigate(title)}> {title.toUpperCase()} </span>
            </h2>
            <div className='preview'>
                {
                    products
                    .filter((_, idx) => idx < 4)
                    .map(product => (
                        <ProductItem key={product.id} product={product} buttonVisible={false}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductPreview;