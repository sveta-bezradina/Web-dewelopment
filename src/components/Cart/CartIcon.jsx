import React from 'react';
import './cart.css';
import {ShoppingCartOutlined } from  '@ant-design/icons';

const CartIcon = ({cartCount}) => (
  <div class="cart-container">
  <div class="cart-icon">
      <ShoppingCartOutlined alt="Icon" /> 
  </div>
  <span class="cart-count">{cartCount}</span>
</div>
);

export default CartIcon;
