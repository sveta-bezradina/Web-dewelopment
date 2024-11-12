import React, { createContext, useContext, useState } from 'react';
import { useCart } from './CartContext';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [currency, setCurrency] = useState('UAH');
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <HeaderContext.Provider value={{currency, setCurrency, cartCount }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
