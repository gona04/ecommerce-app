import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, product) => {
  const sameIndex = cartItems.findIndex((item) => item.id === product.id);
  if (sameIndex !== -1) {
    return cartItems.map((item, idx) =>
      idx === sameIndex ? { ...item, count: item.count + 1 } : item
    );
  } else {
    return [...cartItems, { ...product, count: 1 }];
  }
};

const deleteCartItem = (cartItems, id) => {
  return cartItems
    .map(item =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    )
    .filter(item => item.count > 0);
};

const deleteAllCartItem = (cartItems, id) => {
  return cartItems.filter(item => item.id !== id);
};

export const CartContext = createContext({
  isOpen: false,
  cartItems: [],
  totalCount: [],
  totalCost: null,
  setIsOpen: () => null,
  setCartItems: () => {},
  addToCart: () => null,
  deleteInstanceFromcart: () => null,
  deleteAllFromCart: () => null,
});

function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  let dv = [...cartItems]
  function settingTotalCount() {
    let total = dv.reduce((sum, next) => sum + next.count, 0);
    setTotalCount(total);
  }

  function settingTotalCost() {
  let total = dv.reduce((sum, next) => sum + (next.price * next.count), 0);
  setTotalCost(total);
}

  function addToCart(product) {
    const cartIs = addCartItem(dv, product);
    setCartItems(cartIs);
  }

  function deleteInstanceFromcart(id) {
    const cartIs = deleteCartItem(dv, id);
    console.log(cartIs);
    setCartItems(cartIs);
  }

  function deleteAllFromCart(id) {
    const cartIs = deleteAllCartItem(dv, id);
    setCartItems(cartIs);
  }

  useEffect(() => {
    settingTotalCount();
    settingTotalCost();
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        totalCost,
        totalCount,
        isOpen,
        setIsOpen,
        cartItems,
        setCartItems,
        addToCart,
        deleteInstanceFromcart,
        deleteAllFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
