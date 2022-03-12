import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mltplChcOp: {
    firstContent: {
      etc: false,
      essential: false,
      content: "제목없는 질문",
      opt: { firstOpt: "옵션" },
    },
  },
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    Increment: (state, action) => {
      state.mltplChcOp = {
        ...state.mltplChcOp,
        [action.payload]: {
          etc: false,
          essential: false,
          content: "제목없는 질문",
          opt: { firstOpt: "옵션" },
        },
      };
    },

    OptIncrement: (state, action) => {
      state.mltplChcOp = {
        ...state.mltplChcOp,
        [action.payload[1]]: {
          ...state.mltplChcOp[action.payload[1]],
          opt: {
            ...state.mltplChcOp[action.payload[1]].opt,
            [action.payload[0]]: "옵션",
          },
        },
      };
    },

    SetAnsTitle: (state, action) => {
      state.mltplChcOp = {
        ...state.mltplChcOp,
        [action.payload[0]]: {
          ...state.mltplChcOp[action.payload[0]],
          content: action.payload[1],
        },
      };
    },

    SetMltAns: (state, action) => {
      state.mltplChcOp = {
        ...state.mltplChcOp,
        [action.payload[0]]: {
          ...state.mltplChcOp[action.payload[0]],
          opt: {
            ...state.mltplChcOp[action.payload[0]].opt,
            [action.payload[1]]: action.payload[2],
          },
        },
      };
    },

    SetEtc: (state, action) => {
      state.mltplChcOp = {
        ...state.mltplChcOp,
        [action.payload]: {
          ...state.mltplChcOp[action.payload],
          etc: true,
        },
      };
    },

    SetEssential: (state, action) => {
      state.mltplChcOp = {
        ...state.mltplChcOp,
        [action.payload[0]]: {
          ...state.mltplChcOp[action.payload[0]],
          essential: action.payload[1],
        },
      };
    },

    SetDuplicate: (state, action) => {
      state.mltplChcOp = {
        ...state.mltplChcOp,
        [action.payload[1]]: {
          ...state.mltplChcOp[action.payload[0]],
          opt: { ...state.mltplChcOp[action.payload[0]].opt },
        },
      };
    },
  },
});

export const {
  Increment,
  SetAnsTitle,
  SetMltAns,
  OptIncrement,
  SetEtc,
  SetEssential,
  SetDuplicate,
} = contentSlice.actions;

export default contentSlice.reducer;
