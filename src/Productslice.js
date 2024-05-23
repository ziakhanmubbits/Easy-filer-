import { getApiCall } from '../src/Services/GetApiCall';

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    data: null,
    isLoader: false,
    isError: false,
}

const ProductSlice = createSlice({
    name: 'occupations',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getApiCall.pending, (state, action) => {
            state.isLoader = true;
        });
        builder.addCase(getApiCall.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(getApiCall.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        });

    }
})

export default ProductSlice.reducer;