import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [
      { id: 1, name: "Viper in the window", image: "/img/package1.jpg", price: 500, comments: [] },
      { id: 2, name: "Never Stop Dream", image: "./img/package2.jpg", price: 600, comments: [] },
      { id: 3, name: "The Sequence of the Books", image: "./img/package3.jpg", price: 250, comments: [] },
      { id: 4, name: "Network R", image: "./img/package4.jpg", price: 300, comments: [] },
      { id: 5, name: "Autobiography", image: "./img/package5.jpg", price: 450, comments: [] },
      { id: 6, name: "The Cave", image: "./img/package6.jpg", price: 500, comments: [] },
      { id: 7, name: "Natural Cosmetic", image: "./img/package7.jpg", price: 1500, comments: [] },
      { id: 8, name: "The Birth", image: "./img/package8.jpg", price: 700, comments: [] }
    ];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return [products, setProducts];
};
