import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  addCartItems: () => null,
  deleteCartItem: () => null,
  deleteAllItems: () => null,
});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  let items = [];
  useEffect(() => {
    items = [...cartItems];
  }, [cartItems]);

  function addCartItems(item) {
    const itemIndex = items.findIndex(i => i.id == item.id);
    if(itemIndex > -1) {
      items[itemIndex].count +=1
    } else {
      items.push(item);
      items[items.length -1].count = 1;
    }
    setCartItems(items);
  }

  function deleteCartItem(id) {
    let itemIndex = items.findIndex((i) => i == id);
    items[itemIndex].count -=1;
    setCartItems(items);
  }

  function deleteAllItems(id) {
    let items = items.filter((i) => i.id !== id);
    setCartItems(items);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addCartItems,
        deleteCartItem,
        deleteAllItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
