import userSlice from "./slice";



//importing Reducer
export const userSliceReducer = userSlice.reducer;

//Action for user Reducer
export const {
    setUserData,
    setIsLoaderVisible
} = userSlice.actions;

export const selectUserData = (state) => state.user.data