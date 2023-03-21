import { configureStore } from "@reduxjs/toolkit";
import gather from "../modules/gather";
import login
    from "../modules/login";
const store = configureStore({
    reducer: {
        gather,
        login,
    },
    devTools: process.env.NODE_ENV === "developmetns" ? false : true,
});

export default store;
