import './App.css';
import React, { useState } from 'react';
import { Text } from './components/Text';
import { Banner } from './components/Banner/Banner';
import { Input } from './components/Search/Search';
import { Title } from './components/Text';
import ProductList from './components/ProductList';
import LoginControl from './components/Login/Logout/LoginControl';

function App() {
  const products = [
        { id: 1, name: "Viper in the window", image: "/img/package1.jpg", price: 500 },
        { id: 2, name: "Never Stop Dream", image: "./img/package2.jpg", price: 500 },
        { id: 3, name: "The Sequence of the Books", image: "./img/package3.jpg", price: 500 },
        { id: 4, name: "Network R", image: "./img/package4.jpg", price: 500 },
        { id: 5, name: "Autobiography", image: "./img/package5.jpg", price: 500 },
        { id: 6, name: "The Cave", image: "./img/package6.jpg", price: 500 },
        { id: 7, name: "Natural Cosmetic", image: "./img/package7.jpg", price: 500 },
        { id: 8, name: "The Birth", image: "./img/package8.jpg", price: 500 }
  ];

  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
      setCartCount(prevCount => prevCount + 1);
    };

  return (
    <div className="Page">
      <header>
        <Text name="Book" />
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
         <ProductList products={products} addToCart={addToCart} />
      </div>

      <footer>309</footer>
    </div>
  );
}

export default App;
