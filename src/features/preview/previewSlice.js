import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previewContent: {},
};

export const previewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {
    SetShortAns: (state, action) => {
      state.previewContent = {
        ...state.previewContent,
        [action.payload[0]]: action.payload[1],
      };
    },
  },
});

export const { SetShortAns } = previewSlice.actions;

export default previewSlice.reducer;
