import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProduct: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartProduct: (state, action) => {
      const ifItemExist = state.cartProduct.some(
        (el) => el.name === action.payload.name
      );
      if (ifItemExist) {
        alert("item already added");
      } else {
        const total = action.payload.price;
        state.cartProduct = [
          ...state.cartProduct,
          { ...action.payload, qty: 1, total: total },
        ];
      }
    },
    cartProductIncrement: (state, action) => {
      const { name } = action.payload;

      const findProductIndex = state.cartProduct.findIndex(
        (product) => product.name === name
      );

      let qty = state.cartProduct[findProductIndex].qty;
      const qtyIncrease = ++qty;
      state.cartProduct[findProductIndex].qty = qtyIncrease;

      const price = state.cartProduct[findProductIndex].price;
      const total = price * qtyIncrease;
      state.cartProduct[findProductIndex].total = total;
    },

    cartProductDecrement: (state, action) => {
      const { name } = action.payload;

      const findProductIndex = state.cartProduct.findIndex(
        (product) => product.name === name
      );

      let qty = state.cartProduct[findProductIndex].qty;
      if (qty > 1) {
        const qtyDecrease = --qty;
        state.cartProduct[findProductIndex].qty = qtyDecrease;

        const price = state.cartProduct[findProductIndex].price;
        const total = price * qtyDecrease;
        state.cartProduct[findProductIndex].total = total;
      }
    },

    deleteCartProduct: (state, action) => {
      const filteredData = state.cartProduct.filter(
        (item) => item.name !== action.payload
      );
      state.cartProduct = filteredData;
    },
  },
});

export const {
  addCartProduct,
  cartProductIncrement,
  cartProductDecrement,
  deleteCartProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
