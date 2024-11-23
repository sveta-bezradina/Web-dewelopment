import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      console.log("Before addItem:", state);
      state.items.push(action.payload);
      console.log("After addItem:", state);
    },
    removeItem(state, action) {
      console.log("Before removeItem:", state);
      state.items = state.items.filter(item => item.id !== action.payload);
      console.log("After removeItem:", state);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
