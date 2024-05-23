import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  myIrisProfile: null, // Initial value of your variable
};

const irisProfileSlice = createSlice({
  name: 'irisProfileReducer',
  initialState,
  reducers: {
    setIrisEmail:(state,action)=>{
      state.irisEmail=action.payload
    },
    setIrisPassword:(state,action)=>{
      state.irisPassword=action.payload
    },
    setIrisPin:(state,action)=>{
      state.irisPin=action.payload
    },
    setIrisPhoneNumber:(state,action)=>{
      state.irisPhoneNumber=action.payload
    },
    setIrisAdress:(state,action)=>{
      state.irisAdress=action.payload
    },
    setIrisTypesId:(state,action)=>{
      state.irisTypeId=action.payload
    },
    setIrisBankId:(state,action)=>{
      state.irisBankTypeId=action.payload
    },
    setIrisIban:(state,action)=>{
      state.irisIban=action.payload
    },
    setId:(state,action)=>{
      state.userId=action.payload
    },
    
  },
});

export const {
  setIrisEmail,
  setIrisPassword,
  setIrisPin,
  setIrisPhoneNumber,
  setIrisAdress,
  setIrisTypesId,
  setIrisBankId,
  setIrisIban,
  setId
}
  = irisProfileSlice.actions;

export default irisProfileSlice.reducer;