import './App.css';
import React from 'react';
import { Text } from './components/Text';
import { Banner } from './components/Banner/Banner';
import Search from './components/Search/Search';
import { Title } from './components/Text';
import ProductList from './components/Product/ProductList';
import CartIcon from './components/Cart/CartIcon';
import LoginControl from './components/Login/Logout/LoginControl';
import ProductModal from './components/Product/ProductModal';
import CurrencySwitcher from './components/Product/CurrencySwitcher';
import { HeaderProvider, useHeader } from './context/HeaderContext';
import { ContentProvider, useContent } from './context/ContentContext';
import { FooterProvider } from './context/FooterContext';
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CartPage from './components/Cart/CartPage';
import Debug from './components/Navigation/Debug';

function App() {
  return (
    <CartProvider>
      <HeaderProvider>
        <ContentProvider>
          <FooterProvider>
            <Router>
              <div className="Page">
                <Header />
                <Routes>
                  <Route path="/" element={<Content />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/books" element={<div>Books Page</div>} />
                  <Route path="/collections" element={<div>Collections Page</div>} />
                  <Route path="/categories" element={<div>Categories </div>} />
                  <Route path="/pages" element={<div>Pages Page</div>} />
                  <Route path="/contact" element={<div>Contact Page</div>} />
                </Routes>
                <Footer />
                <Debug />
              </div>
            </Router>
          </FooterProvider>
        </ContentProvider>
      </HeaderProvider>
    </CartProvider>
  );
}

const Header = () => {
  const { cartCount } = useHeader();

  return (
    <header>
      <div className="MenuLeft">
        <img src="/img/logo.png" alt="logo"></img>
        <Link to="/"><Text name="Home"/></Link>
        <Link to="/books"><Text name="Book"/></Link>
        <Link to="/collections"><Text name="Collections"/></Link>
        <Link to="/categories"><Text name="Categories"/></Link>
        <Link to="/pages"><Text name="Pages"/></Link>
        <Link to="/contact"><Text name="Contact"/></Link>
      </div>
      <div className="MenuRight">
        <Search /> 
        <Link to="/cart">
          <CartIcon cartCount={cartCount}/>
        </Link>
        <LoginControl />
      </div>
    </header>
  );
};

const Content = () => {
  const { products, openModal, selectedProduct, modalOpen, closeModal, handleAddComment, updateProductComments } = useContent();
  const { currency } = useHeader();

  return (
    <>
      <Banner 
        title="Discounts up to 50% on bestsellers!" 
        text="Don't miss the chance to buy your favourite books at bargain prices." 
        name="View discounts" 
      />
      <Title text="This year's top sellers" />
      <div className="mainPage">
        <ProductList products={products} openModal={openModal} currency={currency} />
      </div>
      {selectedProduct && (
          <ProductModal 
            isOpen={modalOpen} 
            onClose={closeModal} 
            product={selectedProduct} 
            onAddComment={handleAddComment}
            currency={currency}
            updateProductComments={updateProductComments}
          />
      )}
    </>
  );
};



const Footer = () => {
  const { setCurrency } = useHeader();
  return(
    <footer>
        <CurrencySwitcher setCurrency={setCurrency} />
    </footer>
  ) ;
};

export default App;