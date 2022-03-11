import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answerTitles: { firstContent: "제목없는 질문" },
  mltplChcOp: { firstContent: { firstOpt: "옵션" } },
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    Increment: (state, action) => {
      state.answerTitles = {
        ...state.answerTitles,
        [action.payload]: "제목없는 질문",
      };
      state.mltplChcOp = {
        ...state.mltplChcOp,
        [action.payload]: {
          ...state.mltplChcOp[action.payload],
          firstOpt: "옵션",
        },
      };
    },

    OptIncrement: (state, action) => {
      state.mltplChcOp = {
        ...state.mltplChcOp,
        [action.payload[1]]: {
          ...state.mltplChcOp[action.payload[1]],
          [action.payload[0]]: "옵션",
        },
      };
    },

    SetAnsTitle: (state, action) => {
      state.answerTitles = {
        ...state.answerTitles,
        [action.payload[0]]: action.payload[1],
      };
    },

    SetMltAns: (state, action) => {
      state.mltplChcOp = {
        ...state.mltplChcOp,
        [action.payload[0]]: {
          ...state.mltplChcOp[action.payload[0]],
          [action.payload[1]]: action.payload[2],
        },
      };
    },
  },
});

export const { Increment, SetAnsTitle, SetMltAns, OptIncrement } =
  contentSlice.actions;

export default contentSlice.reducer;
