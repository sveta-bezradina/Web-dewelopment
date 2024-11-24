import React, { useState } from "react";
import { Button, Checkbox, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../store/cartSlice"; 
import { useHeader } from "../../context/HeaderContext";
import "./cart.css";

const CartPage = () => {
  const { currency } = useHeader();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [selectedItems, setSelectedItems] = useState([]);

  console.log("Before render: cartItems", cartItems);

  // Функція для перевірки чи кошик порожній
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty!</h2>
      </div>
    );
  }

  // Функція для вибору всіх елементів
  const selectAllItems = () => {
    setSelectedItems(cartItems.map((item) => item.id));
  };

  // Функція для зняття вибору з усіх елементів
  const deselectAllItems = () => {
    setSelectedItems([]);
  };

  // Функція для вибору/зняття вибору конкретного елемента
  const toggleItemSelection = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  // Функція для видалення обраних елементів
  const deleteSelectedItems = () => {
    selectedItems.forEach((id) => dispatch(removeItem(id))); // Викликаємо дію видалення
    setSelectedItems([]);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        <List
          bordered
          dataSource={cartItems}
          renderItem={(item) => (
            <List.Item>
              <Checkbox
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleItemSelection(item.id)}
              >
                {item.name} - {item.price} {currency}
              </Checkbox>
            </List.Item>
          )}
        />
      </div>
      <div className="cart-actions" style={{ marginTop: 20 }}>
      <Button
          type="primary"
          onClick={
            selectedItems.length === cartItems.length
              ? deselectAllItems
              : selectAllItems
          }
          style={{ marginRight: 10 }}
        >
          {selectedItems.length === cartItems.length
            ? "Deselect All"
            : "Select All"}
        </Button>
        <Button type="danger" onClick={deleteSelectedItems}>
          Delete Selected
        </Button>
      </div>

      {/* <div className="total">
        <button className="checkout-btn">Proceed to Checkout</button>
      </div> */}
    </div>

  );
};

export default CartPage;


// components/CartPage.jsx
// import React, { useState } from "react";
// import { Table, Button, InputNumber, Checkbox, message } from "antd";
// import { useCart } from "../../context/CartContext"; // Використовуємо контекст для кошика
// import { useHeader } from "../../context/HeaderContext"; // Контекст для валюти
//import useCurrency from './../../hooks/useCurrency';

// const CartPage = () => {
//   const { cartItems, removeFromCart, updateQuantity } = useCart(); // Доступ до функцій контексту
//   const { currency } = useHeader(); // Доступ до валюти
//   const [selectedItems, setSelectedItems] = useState([]); // Стан для вибору елементів

//   // Якщо кошик порожній
//   if (cartItems.length === 0) {
//     return (
//       <div className="empty-cart">
//         <h2>Your cart is empty!</h2>
//       </div>
//     );
//   }

//   // Функція для вибору всіх елементів
//   const selectAllItems = () => {
//     setSelectedItems(cartItems.map((item) => item.id));
//   };

//   // Функція для зняття вибору з усіх елементів
//   const deselectAllItems = () => {
//     setSelectedItems([]);
//   };

//   // Функція для вибору/зняття вибору конкретного елемента
//   const toggleItemSelection = (id) => {
//     setSelectedItems((prevSelected) =>
//       prevSelected.includes(id)
//         ? prevSelected.filter((itemId) => itemId !== id)
//         : [...prevSelected, id]
//     );
//   };

//   // Функція для зміни кількості товарів
//   const handleQuantityChange = (value, record) => {
//     if (value < 1) return; // Оскільки кількість не може бути менше 1
//     updateQuantity(record.id, value); // Оновлення кількості
//   };

//   // Функція для видалення обраних елементів
//   const deleteSelectedItems = () => {
//     selectedItems.forEach((id) => removeFromCart(id));
//     setSelectedItems([]);
//     message.success("Selected items removed from the cart");
//   };

//   // Структура таблиці
//   const columns = [
//     {
//       title: "Product",
//       dataIndex: "name",
//       render: (name, record) => (
//         <Checkbox
//           checked={selectedItems.includes(record.id)}
//           onChange={() => toggleItemSelection(record.id)}
//         >
//           {name}
//         </Checkbox>
//       ),
//     },
//     { title: "Price", dataIndex: "price", render: (price) => `${currency}${price}` },
//     {
//       title: "Quantity",
//       dataIndex: "quantity",
//       render: (quantity, record) => (
//         <InputNumber
//           min={1}
//           value={quantity}
//           onChange={(value) => handleQuantityChange(value, record)}
//         />
//       ),
//     },
//     {
//       title: "Action",
//       render: (text, record) => (
//         <Button danger onClick={() => removeFromCart(record.id)}>
//           Remove
//         </Button>
//       ),
//     },
//   ];

//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>
//       <Table
//         columns={columns}
//         dataSource={cartItems}
//         rowKey="id"
//         pagination={false}
//       />
//       <div className="cart-actions" style={{ marginTop: 20 }}>
//         <Button
//           type="primary"
//           onClick={selectedItems.length === cartItems.length ? deselectAllItems : selectAllItems}
//           style={{ marginRight: 10 }}
//         >
//           {selectedItems.length === cartItems.length ? "Deselect All" : "Select All"}
//         </Button>
//         <Button type="danger" onClick={deleteSelectedItems}>
//           Delete Selected
//         </Button>
//       </div>
//       <div style={{ marginTop: 20 }}>
//         <Button type="primary">Proceed to Checkout</Button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

