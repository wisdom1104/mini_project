import { configureStore } from "@reduxjs/toolkit";
import board from "../modules/boradSlice";
import detail from "../modules/detailSlice";
import write from "../modules/writeSlice";
import loginSlice from "../modules/login";

const store = configureStore({
  reducer: { loginSlice, board: board, detail: detail, write: write },
  devTools: process.env.NODE_ENV === "developmetns" ? false : true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
