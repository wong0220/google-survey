import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../features/header/headerSlice";
import contentReducer from "../features/content/contentSlice";
import previewReducer from "../features/preview/previewSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    content: contentReducer,
    preview: previewReducer,
  },
});
