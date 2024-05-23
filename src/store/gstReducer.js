import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  businessname: '',
};

const gstSlice = createSlice({
    name: 'GstRegistration',
    initialState,
    reducers: {
        setBusinessName: (state, action) => {
            state.businessname = action.payload;
          },
          setBusinessType: (state, action) => {
            state.businessType = action.payload;
          },
          setDate: (state, action) => {
            state.date = action.payload;
          },
          setBusinessDescription: (state, action) => {
            state.businessDescription = action.payload;
          },
          setConsumerNumber: (state, action) => {
            state.consumerNumber = action.payload;
          },
          
    }
});

export const {
    setBusinessName,
    setBusinessType,
    setDate,
    setBusinessDescription,
    setConsumerNumber

}
    = gstSlice.actions;

export default gstSlice.reducer;
