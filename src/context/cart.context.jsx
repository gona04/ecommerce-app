import { createContext, useState } from "react";

export const CartContext = createContext({
    isOpen: false,
    selectedProducts: [],
    selectedProductsCount: [],
    setIsOpen: () => null,
    setSelectedProducts: () => {},
    setSelectedProductCount: () => {}
})

function CartProvider({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectedProductsCount, setSelectedProductCount] = useState([]);
    
    return (
        <CartContext.Provider value={{isOpen, setIsOpen, selectedProducts, setSelectedProducts, selectedProductsCount, setSelectedProductCount}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider;