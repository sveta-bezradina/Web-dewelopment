import React from 'react';
import styles from './Card.module.css'; 
import useCurrency from '../../hooks/useCurrency';
import { useCart } from '../../context/CartContext';

const Card = ({ product, openModal, currency,  }) => {
  const { price } = useCurrency(product, currency);
  const { addToCart } = useCart();

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={product.image} alt={product.name} onClick={openModal}/>
      </div>
      <div className={styles.text}>
        <p className={styles.h3}>{product.name}</p>
        <p className={styles.p}>{price} {currency}</p>
        <button className={styles.btn} onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
