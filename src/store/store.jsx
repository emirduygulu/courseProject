import { configureStore } from "@reduxjs/toolkit";
import { courseReducer } from "./slices/courseSlices";
import { formReducer } from "./slices/formSlice";

export const store = configureStore({
    reducer:{
        form:formReducer,
        courses:courseReducer,
    }
});