import React, { createContext, useContext } from 'react';

const FooterContext = createContext();

export const FooterProvider = ({ children }) => {
  return (
    <FooterContext.Provider value={{}}>
      {children}
    </FooterContext.Provider>
  );
};

export const useFooter = () => useContext(FooterContext);
