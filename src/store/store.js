import { configureStore } from "@reduxjs/toolkit" 
import { courseReducer } from "./slices/courseSlice"
import { formReducer } from "./slices/formSlice"

//kapsayıcı indexjsde gecileceği icin export ediliyor
export const store = configureStore({
    reducer: {
        form: formReducer,
        courses: courseReducer
    }
})