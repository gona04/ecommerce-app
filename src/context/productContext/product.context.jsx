import { createContext, useEffect, useState } from "react";
import { getProductDetails } from '../../utils/firebase/firebase.utils';

export const ProductContext = createContext({
    products: [],
    setSelectedProducts:() => null
})

export function ProductContextProvider({children}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getProductsData() {
            const data = await getProductDetails('categories')
            setProducts(data);
        }
        getProductsData();
    }, [])
    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}