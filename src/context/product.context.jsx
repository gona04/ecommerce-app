import { createContext, useState } from "react";

import PRODUCTS_LIST from '../data/shop-data.json';

export const ProductContext = createContext({
    products: [],
    selectedProducts: [],
    setSelectedProducts: () => {},
    selectedProductsCount: [],
    setSelectedProductCount: () => {}
})

function ProductProvider({children}) {
    const [products, setProducts] = useState(PRODUCTS_LIST)
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectedProductsCount, setSelectedProductCount] = useState([]);

    const value = {products, selectedProducts, setSelectedProducts, selectedProductsCount, setSelectedProductCount}
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;