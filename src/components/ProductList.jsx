import React from 'react';
import { Card } from './Card/Card';

const ProductList = ({ products, addToCart }) => {
  return (
    products.map(product => (
        <Card 
          key={product.id} 
          src={product.image}
          title={product.name} 
          price={product.price} 
          addToCart={addToCart} 
        />
      ))
  );
};

export default ProductList;
