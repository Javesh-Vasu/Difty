import { configureStore } from "@reduxjs/toolkit";
import gptReducer from "./redux/slices/generateTextSlice";

export const store = configureStore({
    reducer: {
        gptContent: gptReducer
    }
})