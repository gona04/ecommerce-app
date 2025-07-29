import { createContext, useEffect } from "react";

export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => null
}) 

export function CartProvider({children}) {
    const [cartItems, setCartItems] = setCartItems([]);

    useEffect(() => {
        console.log('Need a get call for data')
    }, [])

    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}