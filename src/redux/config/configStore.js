import { configureStore } from "@reduxjs/toolkit";
import gatherSlice from "../modules/gather";
import loginSlice from "../modules/login";

const store = configureStore({
    reducer: { loginSlice, gatherSlice },
    devTools: process.env.NODE_ENV === "developmetns" ? false : true,
});

export default store;
