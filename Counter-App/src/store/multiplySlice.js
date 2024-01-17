import { createSlice } from "@reduxjs/toolkit";

const multiplySlice = createSlice({
  name: "multiply",
  initialState: { var: 10 },
  reducers: {
    multiply: (state, action) => {
      state.var *= action.payload;
    },
  },
});

export const { multiply } = multiplySlice.actions;
export { multiplySlice };
