import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "slice",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {
        loading: (state) => {
            state.isLoading = true
        },
        failure: (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        },
        getApiCallSuccess: (state, action) => {
            
            state.isLoading = false
            state.data = action.payload;
        },
    }

})
export default slice.reducer
export const { loading, failure, getApiCallSuccess } = slice.actions