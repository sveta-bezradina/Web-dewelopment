import React from 'react';
import { Card } from '../Card/Card';
import './product.css'; 

const ProductList = ({ products, currency, addToCart, openModal }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Card 
          key={product.id} 
          product={product}
          currency={currency} 
          addToCart={addToCart} 
          openModal={() => openModal(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
