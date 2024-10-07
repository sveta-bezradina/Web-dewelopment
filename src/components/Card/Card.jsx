import React from 'react';
import './card.css'; 

const exchangeRates = {
  USD: 0.027,
  UAH: 1
};

export const Card = ({ product, currency, addToCart, openModal }) => {
  const price = (product.price * exchangeRates[currency]).toFixed(2);

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
