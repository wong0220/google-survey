import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  answerTitles: {},
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    Increment: (state, action) => {
      state.value = [...state.value, action.payload];
    },

    SetAnsTitle: (state, action) => {
      state.answerTitles = {
        ...state.answerTitles,
        [action.payload[0]]: action.payload[1],
      };
    },
  },
});

export const { Increment, SetAnsTitle } = contentSlice.actions;

export default contentSlice.reducer;
