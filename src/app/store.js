import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../features/header/headerSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});
