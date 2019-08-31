import React, { createContext, useState, useEffect } from "react";

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemCount,
  getCartItemsPriceTotal,
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  cleartItemFromCart: () => {},
  cartItemsCount: 0,
  clearItemFromCart: () => {},
  cartItemTotal: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const itemCount = getCartItemCount(cartItems);
    const cartTotal = getCartItemsPriceTotal(cartItems);
    setCartItemsCount(itemCount);
    setTotal(cartTotal);
  }, [cartItems]);

  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = item =>
    setCartItems(filterItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);

  return (
    <CartContext.Provider
      value={{
        hidden,
        cartItems,
        toggleHidden,
        addItem,
        cartItemsCount,
        removeItem,
        clearItemFromCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
