import { configureStore } from "@reduxjs/toolkit";

import cartData from "./Features/cartDataSlice";

const store = configureStore({
  reducer: {
    cartDataItems: cartData,
  },
});

export default store;
