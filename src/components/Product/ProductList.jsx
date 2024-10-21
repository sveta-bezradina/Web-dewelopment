import React from 'react';
import Card  from '../Card/Card';
import './product.css'; 


const ProductList = ({products, addToCart, openModal, currency }) => {

  return (
    <div className="product-list">
      {products.map(product => (
        <Card 
          key={product.id} 
          product={product}
          addToCart={addToCart} 
          openModal={() => openModal(product)}
          currency={currency}
        />
      ))}
    </div>
  );
};

export default ProductList;