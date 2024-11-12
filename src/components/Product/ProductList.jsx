import React from 'react';
import Card  from '../Card/Card';
import styles from'./Product.module.css';


const ProductList = ({products, addToCart, openModal, currency }) => {

  return (
    <div className={styles.product_list}>
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