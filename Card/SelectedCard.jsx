// components/ProductCard.jsx
import React from 'react';
import { Card, Button, Checkbox } from 'antd';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, isInCart = false }) => {
  const { addToCart, removeFromCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <Card
      style={{ width: 300, display: 'inline-block', margin: '0 10px' }}
      cover={<img alt={product.name} src={product.image} />}
    >
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <Checkbox>Selected</Checkbox>
      <div>
        {!isInCart ? (
          <Button type="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        ) : (
          <Button type="dashed" danger onClick={handleRemoveFromCart}>
            Remove
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
