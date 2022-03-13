import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerContent: {
    title: "제목 없는 설문지",
    description: "설문지 설명",
  },
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.headerContent.title = action.payload;
    },

    setDescription: (state, action) => {
      state.headerContent.description = action.payload;
    },
  },
});

export const { setTitle, setDescription } = headerSlice.actions;

export default headerSlice.reducer;
