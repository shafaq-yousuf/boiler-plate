import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../reducer/loginSlice";
import cardSlice from "../reducer/cardSlice";

const store = configureStore({
    reducer:{
        card: cardSlice,
    }
});

export default store;