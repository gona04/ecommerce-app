import { createContext, useState } from "react";

import PRODUCTS_LIST from '../data/shop-data.json';

export const ProductContext = createContext({
    products: [],
})

function ProductProvider({children}) {
    const [products, setProducts] = useState(PRODUCTS_LIST)

    const value = {products}
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;