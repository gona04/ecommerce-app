import PRODUCTS from '../../shop-data.json';
import { createContext, useEffect, useState } from "react";
import { getProductDetails } from '../../utils/firebase/firebase.utils';

export const ProductContext = createContext({
    products: [],
    selectedProducts: [],
    setSelectedProducts:() => null
})

export function ProductContextProvider({children}) {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([])
    useEffect(() => {
        console.log('IN PRODUCT CONTEXT PROVIERS USE EFFECT')
        async function getProductsData() {
            const data = await getProductDetails('categories')
            setProducts(data);
        }
        getProductsData();
    }, [])
    return (
        <ProductContext.Provider value={{products, selectedProducts, setSelectedProducts}}>
            {children}
        </ProductContext.Provider>
    )
}