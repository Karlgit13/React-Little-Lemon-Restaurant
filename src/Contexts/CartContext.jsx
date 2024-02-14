import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    cartItems.forEach((cartItem) => {
      totalAmount += cartItem.price * cartItem.quantity;
    });
    return totalAmount;
  };

  const addToCart = (item) => {
    setCartItems((currentItems) => {
      const itemExists = currentItems.find((i) => i.title === item.title);
      if (itemExists) {
        return currentItems.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...currentItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemTitle) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.title !== itemTitle)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalCartAmount }}>
      {children}
    </CartContext.Provider>
  );
};
