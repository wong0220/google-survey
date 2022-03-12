import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../features/header/headerSlice";
import contentReducer from "../features/content/contentSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    content: contentReducer,
  },
});
