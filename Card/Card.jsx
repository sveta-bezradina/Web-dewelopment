import React from 'react';
import styles from './Card.module.css'; 
import useCurrency from '../../hooks/useCurrency';
import { useCart } from '../../context/CartContext';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';

const Card = ({ product, openModal, currency,  }) => {
  const { price } = useCurrency(product, currency);
  const { addToCart } = useCart();
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={product.image} alt={product.name} onClick={openModal}/>
      </div>
      <div className={styles.text}>
        <p className={styles.h3}>{product.name}</p>
        <p className={styles.p}>{price} {currency}</p>
        {/* <button className={styles.btn} onClick={() => addToCart(product)}>Add to cart</button> */}
        <button className={styles.btn} onClick={() => dispatch(addItem(product))}>
              Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
