import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    quantity: 0,
    total: 0,
  });

  const addToCart = (product, quantity = 1) => {
    const existingItemIndex = cart.items.findIndex((cartItem) => cartItem.product._id === product._id);
  
    if (existingItemIndex !== -1) {
      const updatedItems = [...cart.items];
      updatedItems[existingItemIndex].cartQuantity += quantity;
  
      setCart({
        ...cart,
        items: updatedItems,
        quantity: cart.quantity + quantity,
        total: cart.total + product.price * quantity,
      });
    } else {
      const newItem = {
        product: product,
        cartQuantity: quantity,
      };
      setCart({
        ...cart,
        items: [...cart.items, newItem],
        quantity: cart.quantity + quantity,
        total: cart.total + product.price * quantity,
      });
    }
  };

  const removeFromCart = (productId) => {
    const updatedItems = cart.items.filter((cartItem) => cartItem.product._id !== productId);
    const removedItem = cart.items.find((cartItem) => cartItem.product._id === productId);
  
    setCart({
      ...cart,
      items: updatedItems,
      quantity: cart.quantity - removedItem.cartQuantity,
      total: cart.total - removedItem.product.price * removedItem.cartQuantity,
    });
  };
  

  const clearCart = () => {
    setCart({
      ...cart,
      items: [],
      quantity: 0,
      total: 0,
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;