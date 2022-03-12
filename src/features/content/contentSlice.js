import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mltplChcOp: {
    firstContent: {
      type: 30,
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
          type: 30,
          etc: false,
          essential: false,
          content: "제목없는 질문",
          opt: { firstOpt: "옵션" },
        },
      };
    },

    Decrement: (state, action) => {
      delete state.mltplChcOp[action.payload];
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

    OptDecrement: (state, action) => {
      delete state.mltplChcOp[action.payload[0]].opt[action.payload[1]];
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

    OffEtc: (state, action) => {
      state.mltplChcOp = {
        ...state.mltplChcOp,
        [action.payload]: { ...state.mltplChcOp[action.payload], etc: false },
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

    SetType: (state, action) => {
      if (action.payload[1] === 10 || action.payload[1] === 20) {
        state.mltplChcOp = {
          ...state.mltplChcOp,
          [action.payload[0]]: {
            ...state.mltplChcOp[action.payload[0]],
            type: action.payload[1],
            etc: false,
            opt: { firstOpt: "옵션" },
          },
        };
      } else if (action.payload[1] === 50) {
        state.mltplChcOp = {
          ...state.mltplChcOp,
          [action.payload[0]]: {
            ...state.mltplChcOp[action.payload[0]],
            etc: false,
            type: action.payload[1],
          },
        };
      } else {
        state.mltplChcOp = {
          ...state.mltplChcOp,
          [action.payload[0]]: {
            ...state.mltplChcOp[action.payload[0]],
            type: action.payload[1],
          },
        };
      }
    },
  },
});

export const {
  Increment,
  Decrement,
  SetAnsTitle,
  SetMltAns,
  OptIncrement,
  OptDecrement,
  SetEtc,
  OffEtc,
  SetEssential,
  SetDuplicate,
  SetType,
} = contentSlice.actions;

export default contentSlice.reducer;
