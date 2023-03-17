import { configureStore } from "@reduxjs/toolkit";
import board from "../modules/boradSlice";
import detail from "../modules/detailSlice";
import loginSlice from "../modules/login";

const store = configureStore({
  reducer: { loginSlice, board: board, detail: detail },
  devTools: process.env.NODE_ENV === "developmetns" ? false : true,
});

export default store;
