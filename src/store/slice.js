import { getApiCall } from '../src/Services/GetApiCall';

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    data: null,
    isLoaderVisible: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.data = action.payload
        }
    }
})

export default userSlice;