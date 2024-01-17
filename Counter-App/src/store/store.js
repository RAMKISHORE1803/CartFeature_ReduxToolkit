import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { multiplySlice } from "./multiplySlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    multiply: multiplySlice.reducer,
  },
});

export default store;
