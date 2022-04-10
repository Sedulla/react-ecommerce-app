import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const { quantity, price } = action.payload;
      state.quantity += quantity;
      state.products.push(action.payload);
      state.total += price * quantity;
      console.log(quantity);

      // const productIndex = state.products.findIndex((p) => p.id === product.id);
      // if (productIndex === -1) {
      //   state.products.push({ ...product, quantity });
      // } else {
      //   state.products[productIndex].quantity += quantity;
      // }
    },
    removeProduct: (state, action) => {
      const { product, quantity } = action.payload;
      const productIndex = state.products.findIndex((p) => p.id === product.id);
      if (productIndex === -1) {
        return;
      }
      state.products[productIndex].quantity -= quantity;
      state.quantity -= quantity;
      state.total -= product.price * quantity;
      if (state.products[productIndex].quantity === 0) {
        state.products.splice(productIndex, 1);
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
