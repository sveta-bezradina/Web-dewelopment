import React from 'react';
import { useCart } from '../../context/CartContext'; 
import ProductList from '../Product/ProductList';
import { useHeader } from '../../context/HeaderContext';
import './cart.css'; 

const CartPage = () => {
  const { cartItems, /*removeFromCart*/ } = useCart();
  // const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const { currency } = useHeader();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty!</h2>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        <ProductList 
          products={cartItems} 
          currency={currency} 
        />
      </div>
      <div className="total">
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
