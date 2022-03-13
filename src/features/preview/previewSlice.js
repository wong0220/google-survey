import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previewContent: {},
};

export const previewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {
    SetSentence: (state, action) => {
      state.previewContent = {
        ...state.previewContent,
        [action.payload[0]]: action.payload[1],
      };
    },
  },
});

export const { SetSentence } = previewSlice.actions;

export default previewSlice.reducer;
