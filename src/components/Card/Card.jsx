import React from 'react';
import './card.css'; 
import  useCurrency  from '../../hooks/useCurrency';

const Card = ({ product, addToCart, openModal, currency }) => {
  const { price } = useCurrency(product, currency);

  return (
    <div className="card">
      <div className="img">
        <img src={product.image} alt={product.name} onClick={openModal}/>
      </div>
      <div className="text">
        <p className="h3">{product.name}</p>
        <p className="p">{price} {currency}</p>
        <button className="btn" onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
};
export default Card;