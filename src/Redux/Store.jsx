import { configureStore } from "@reduxjs/toolkit";
import CartSllice from "./CartSllice";

export const store = configureStore({
  reducer: {
    carCart: CartSllice,
  },

  devTools: true,
});
