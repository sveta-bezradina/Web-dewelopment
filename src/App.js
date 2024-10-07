import './App.css';
import React, { useState } from 'react';
import { Text } from './components/Text';
import { Banner } from './components/Banner/Banner';
import { Input } from './components/Search/Search';
import { Title } from './components/Text';
import ProductList from './components/Product/ProductList';
import LoginControl from './components/Login/Logout/LoginControl';
import ProductModal from './components/Product/ProductModal';
import CurrencySwitcher from './components/Product/CurrencySwitcher';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Viper in the window", image: "/img/package1.jpg", price: 500, comments: [] },
    { id: 2, name: "Never Stop Dream", image: "./img/package2.jpg", price: 600, comments: [] },
    { id: 3, name: "The Sequence of the Books", image: "./img/package3.jpg", price: 250, comments: [] },
    { id: 4, name: "Network R", image: "./img/package4.jpg", price: 300, comments: [] },
    { id: 5, name: "Autobiography", image: "./img/package5.jpg", price: 450, comments: [] },
    { id: 6, name: "The Cave", image: "./img/package6.jpg", price: 500, comments: [] },
    { id: 7, name: "Natural Cosmetic", image: "./img/package7.jpg", price: 1500, comments: [] },
    { id: 8, name: "The Birth", image: "./img/package8.jpg", price: 700, comments: [] }
  ]);

  const [cartCount, setCartCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currency, setCurrency] = useState('UAH');

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

  const handleAddComment = (productId, comment) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          comments: [...product.comments, comment]
        };
      }
      return product;
    });

    setProducts(updatedProducts);
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
        <ProductList products={products} currency={currency} addToCart={addToCart} openModal={openModal} />
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
