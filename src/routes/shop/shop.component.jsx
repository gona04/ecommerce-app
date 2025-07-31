
import { Route, Routes } from 'react-router-dom';
import './shop.styles.scss';
import ProductList from '../../components/product/product-list/product-list.component';
import Category from '../category/category.component';

function Shop() {
    return (
       <Routes>
            <Route index element={<ProductList/>}/>
            <Route path=":category" element={<Category/>}/>
       </Routes>
    )
}

export default Shop;