import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    Increment: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { Increment } = contentSlice.actions;

export default contentSlice.reducer;
