import { useParams } from "react-router-dom";
import { CategoryContext } from "../../context/category.context";
import { useContext, useEffect, useState } from "react";
import ProductItem from '../../components/product/product-item/product-item.component';
import './category.style.scss';

function Category() {
    const { categoryMap } = useContext(CategoryContext) 
    const {category} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoryMap[category] || [])
    }, [category, categoryMap]); 

    return (
        <div className="categories-container">
            {
             products.map(item => (
                 <ProductItem key={item.id} product={item} buttonVisible={true}/>
             ))
            }
        </div>
    )
}

export default Category;