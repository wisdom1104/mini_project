import { configureStore } from "@reduxjs/toolkit";
import board from "../modules/boradSlice";
import detail from "../modules/detailSlice";
import write from "../modules/writeSlice";
import comment from "../modules/commentSlice";
import login from "../modules/login";

const store = configureStore({
  reducer: {
    login,
    board: board,
    detail: detail,
    write: write,
    comment: comment,
  },
  devTools: process.env.NODE_ENV === "developmetns" ? false : true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
