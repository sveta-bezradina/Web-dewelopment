import { useState, useEffect } from 'react';

const useCurrency = (product, currency) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (product && product.price) {
      if (currency === 'USD') {
        setPrice((product.price / 27).toFixed(2));
      } else {
        setPrice(product.price);
      }
    }
  }, [currency, product]);

  return { price };
};
export default useCurrency;