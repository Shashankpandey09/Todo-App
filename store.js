import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./src/Slices/todoSlice";
const store=configureStore({
    reducer:{
     todo:todoReducer,
    }
})
export default store