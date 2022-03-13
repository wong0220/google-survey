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

    SetRadioVal: (state, action) => {
      if (action.payload[2] === undefined) {
        state.previewContent = {
          ...(state.previewContent = {
            ...state.previewContent,
            [action.payload[0]]: action.payload[1],
          }),
        };
      } else {
        state.previewContent = {
          ...(state.previewContent = {
            ...state.previewContent,
            [action.payload[0]]: [action.payload[1], action.payload[2]],
          }),
        };
      }
    },
  },
});

export const { SetSentence, SetRadioVal } = previewSlice.actions;

export default previewSlice.reducer;
