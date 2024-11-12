import React, { createContext, useContext, useState} from 'react';
import { useProducts } from '../hooks/useProducts';

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [products, updateProductComments] = useProducts();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddComment = (productId, newComment) => {
    updateProductComments(productId, [...selectedProduct.comments, newComment]);
  };

  return (
    <ContentContext.Provider value={{
      products,
      modalOpen,
      openModal,
      closeModal,
      selectedProduct,
      handleAddComment,
      updateProductComments
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
