const {configureStore} = require("@reduxjs/toolkit")
import  reducer  from "../slices/slice";
export const store = configureStore({
    reducer: {
        api:reducer
    }
})