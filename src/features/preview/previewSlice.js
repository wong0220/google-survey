import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previewContent: {},
  chckEtc: "",
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

    SetChckVal: (state, action) => {
      state.previewContent = {
        ...state.previewContent,
        [action.payload[0]]: action.payload[1],
      };
    },

    SetChckEtc: (state, action) => {
      state.chckEtc = {
        ...state.chckEtc,
        [action.payload[0]]: action.payload[1],
      };
    },
  },
});

export const { SetSentence, SetRadioVal, SetChckVal, SetChckEtc } =
  previewSlice.actions;

export default previewSlice.reducer;
