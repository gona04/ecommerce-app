import { createContext, useReducer } from "react";

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
    .map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item))
    .filter((item) => item.count > 0);
};

const deleteAllCartItem = (cartItems, id) => {
  return cartItems.filter((item) => item.id !== id);
};

const calculateTotals = (cartItems) => {
  return cartItems.reduce(
    (acc, item) => ({
      totalCount: acc.totalCount + item.count,
      totalCost: acc.totalCost + item.price * item.count,
    }),
    { totalCount: 0, totalCost: 0 }
  );
};

const updateCartAndCalculateTotals = (state, currentCart) => {
  const { totalCount, totalCost } = calculateTotals(currentCart);
  return {
    ...state,
    cartItems: currentCart,
    totalCount,
    totalCost,
  };
};

const reducer = (state, action) => {
  const { type, payload } = action;

  let currentCart;
  switch (type) {
    case "TOGGLE_IS_OPEN": {
      return { ...state, isOpen: !state.isOpen };
    }
    case "ADD_TO_CART": {
      currentCart = addCartItem(state.cartItems, payload);
      return updateCartAndCalculateTotals(state, currentCart)
    }
    case "DELETE_SINGLE_CART_ITEM": {
      const {id} = payload
      currentCart = deleteCartItem(state.cartItems, id);
      return updateCartAndCalculateTotals(state, currentCart)
    }
    case "DELETE_COMPLETE_ITEM": {
       const {id} = payload
      currentCart = deleteAllCartItem(state.cartItems, id);
      return updateCartAndCalculateTotals(state, currentCart)
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  cartItems: [],
  totalCost: 0,
  isOpen: false,
  totalCount: 0,
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart: (product) =>
          dispatch({ type: "ADD_TO_CART", payload: product }),
        isOpen: state.isOpen,
        setIsOpen: () => dispatch({ type: "TOGGLE_IS_OPEN" }),
        totalCount: state.totalCount,
        totalCost: state.totalCost,
        deleteInstanceFromcart: (id) =>
          dispatch({ type: "DELETE_SINGLE_CART_ITEM", payload: { id } }),
        deleteAllFromCart: (id) =>
          dispatch({ type: "DELETE_COMPLETE_ITEM", payload: { id } }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
