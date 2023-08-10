import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../redux/reducers";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
