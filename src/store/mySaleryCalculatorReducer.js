import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    taxableYearId: null,
    gstId:null,
    registrationAop:null,
    registrationSole:null,
    registrationAdd:null,
    registrationRemove:null
    
};

const salarySlice = createSlice({
    name: 'SalaryCalculatore',
    initialState,
    reducers: {
        setTaxableYearId: (state, action) => {
            state.taxableYearId = action.payload
        },
        setBusinessName:(state,action)=>{
            state.businessname=action.payload
        },
        setBusinessType:(state,action)=>{
            state.businessType=action.payload
        },
        setBusinessDate:(state,action)=>{
            state.businessDate=action.payload
        },
        setNature:(state,action)=>{
            state.nature=action.payload
        },
        setBusinessDescription:(state,action)=>{
            state.businessDescription=action.payload
        },
        setNumber:(state,action)=>{
            state.number=action.payload
        },
        setGstId:(state,action)=>{
            state.gstId=action.payload
        },
        setId:(state,action)=>{
            state.Id=action.payload
        },
        setName:(state,action)=>{
            state.name=action.payload
        },
        setuserEmail:(state,action)=>{
            state.useremail=action.payload
        },
        setuserPhone:(state,action)=>{
            state.phone=action.payload
        },
        setincorporationtypeId:(state,action)=>{
            state.incorporationtypeId=action.payload
        },
        setPin:(state,action)=>{
            state.irisPin=action.payload
        },
        setPassword:(state,action)=>{
            state.irisPassword=action.payload
        },
        setCommencementDate:(state,action)=>{
            state.commencementDate=action.payload
        },
        setRegistrationAop:(state,action)=>{
            state.registrationAop=action.payload
        },
        setRegistrationSole:(state,action)=>{
            state.registrationSole=action.payload
        },
        setRegistrationAdd:(state,action)=>{
            state.registrationAdd=action.payload
        },
        setRegistrationRemove:(state,action)=>{
            state.registrationRemove=action.payload
        },
        setFbrId:(state,action)=>{
            state.fbrId=action.payload
        },
        setFbrPassword:(state,action)=>{
            state.fbrPassword=action.payload
        },
        setAdressOfBusiness:(state,action)=>{
            state.adressOfBusiness=action.payload
        },
        setPrincipleActivity:(state,action)=>{
            state.principleActivity=action.payload
        },
        setSoleBusinessName:(state,action)=>{
            state.businessName=action.payload
        },
        
    }
});

export const {
    setTaxableYearId,
    setBusinessName,
    setBusinessType,
    setBusinessDate,
    setNature,
    setBusinessDescription,
    setNumber,
    setGstId,
    setId,
    setName,
    setuserEmail,
    setuserPhone,
    setincorporationtypeId,
    setPin,
    setPassword,
    setCommencementDate,
    setRegistrationAop,
    setRegistrationSole,
    setRegistrationAdd,
    setRegistrationRemove,
    setFbrId,
    setFbrPassword,
    setAdressOfBusiness,
    setPrincipleActivity,
    setSoleBusinessName
}
    = salarySlice.actions;

export default salarySlice.reducer;
