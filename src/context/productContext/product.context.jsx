import PRODUCTS from '../../shop-data.json';
import { createContext, useState } from "react";

export const ProductContext = createContext({
    products: [],
    selectedProducts: [],
    setSelectedProducts:() => null
})

export function ProductContextProvider({children}) {
    const [products, setProducts] = useState(PRODUCTS);
    const [selectedProducts, setSelectedProducts] = useState([])
    return (
        <ProductContext.Provider value={{products, selectedProducts, setSelectedProducts}}>
            {children}
        </ProductContext.Provider>
    )
}