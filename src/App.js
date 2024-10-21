import './App.css';
import React, { useState } from 'react';
import { Text } from './components/Text';
import { Banner } from './components/Banner/Banner';
import { Input } from './components/Search/Search';
import { Title } from './components/Text';
import ProductList from './components/Product/ProductList';
import {useProducts}  from './hooks/useProducts';
import LoginControl from './components/Login/Logout/LoginControl';
import ProductModal from './components/Product/ProductModal';
import CurrencySwitcher from './components/Product/CurrencySwitcher';

function App() {
  const [products, setProducts] = useProducts();
  const [currency, setCurrency] = useState('UAH');
  const [cartCount, setCartCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddComment = (productId, newComment) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
          ? { ...product, comments: [...product.comments, newComment] } 
          : product
      )
    );
  };
  
  

  return (
    <div className="Page">
      <header>
        <Text name="Book" />
        <CurrencySwitcher setCurrency={setCurrency} />
        <Input />
        <LoginControl />
      </header>

      <Banner
        title="Discounts up to 50% on bestsellers!"
        text="Don't miss the chance to buy your favourite books at bargain prices."
        name="View discounts"
      />

      <Title text="This year's top sellers" />

      <div>
        <p style={{ float: 'right' }}>Favourite products: {cartCount}</p>
      </div>

      <div className="mainPage">
        <ProductList products={products} addToCart={addToCart} openModal={openModal} currency={currency}/>
      </div>

      {selectedProduct && (
        <ProductModal 
          isOpen={modalOpen} 
          onClose={closeModal} 
          product={selectedProduct} 
          onAddComment={handleAddComment}
          currency={currency}
        />
      )}

      <footer>309</footer>
    </div>
  );
}

export default App;
