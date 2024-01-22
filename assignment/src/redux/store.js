import { configureStore } from "@reduxjs/toolkit";
import authentication from "./reducer";
export const store = configureStore({
  reducer: {
    counter: authentication,
  },
});
