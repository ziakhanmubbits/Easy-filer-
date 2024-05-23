import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myVariable: null, // Initial value of your variable
};

const mySlice = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {
    setVariable: (state, action) => {
      state.taxFilingId = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setResumeId: (state, action) => {
      state.resumeId = action.payload;
    },
    setIncomeId: (state, action) => {
      state.incomeId = action.payload;
    },
    setBusinessId: (state, action) => {
      state.businessId = action.payload
    },
    setTaxRateId: (state, action) => {
      state.taxRateId = action.payload
    },
    setAdjustableRateId: (state, action) => {
      state.adjustableRateid = action.payload
    },
    setUtilityId: (state, action) => {
      state.utilityId = action.payload
    },
    setTaxDeductionId: (state, action) => {
      state.deductionTypeId = action.payload
    },
    setActivityId: (state, action) => {
      state.activityId = action.payload
    },
    setVehicleId: (state, action) => {
      state.vehicleId = action.payload
    },
    setProviderId: (state, action) => {
      state.providerId = action.payload
    },
    setPropertyId: (state, action) => {
      state.propertyId = action.payload
    },
    setAssetTypeId: (state, action) => {
      state.assetypetId = action.payload
    },
    setBankTypeId: (state, action) => {
      state.banktypeId = action.payload
    },
    setPossessionTypeId: (state, action) => {
      state.possessiontypeId = action.payload
    },
    setOtherAssetsId: (state, action) => {
      state.otherassetsId = action.payload
    },
    setLiabilitiesId: (state, action) => {
      state.liabilitiesId = action.payload
    },
    setOccupationId: (state, action) => {
      state.occupationId = action.payload
    },
    setPersonalId: (state, action) => {
      state.personalId = action.payload
    },
    setScreenName: (state, action) => {
      state.screenName = action.payload
    },
    setBusinessScreenName: (state, action) => {
      state.businessScreenName = action.payload
    },
    setTaxDeductedName: (state, action) => {
      state.taxDeductedName = action.payload
    },
    setWealthScreenName: (state, action) => {
      state.wealthscreenName = action.payload
    },
    setVehicleItemId: (state, action) => {
      state.vehicleItemId = action.payload
    },
    setLastStatusName: (state, action) => {
      state.lastStatusName = action.payload
    },
    setFiscalyear: (state, action) => {
      state.fiscalYear = action.payload
    },
    

  },
});

export const {
  setVariable,
  setUserId,
  setResumeId,
  setIncomeId,
  setBusinessId,
  setTaxRateId,
  setAdjustableRateId,
  setUtilityId,
  setTaxDeductionId,
  setVehicleId,
  setActivityId,
  setProviderId,
  setPropertyId,
  setAssetTypeId,
  setBankTypeId,
  setPossessionTypeId,
  setOtherAssetsId,
  setLiabilitiesId,
  setOccupationId,
  setPersonalId,
  setScreenName,
  setBusinessScreenName,
  setTaxDeductedName,
  setWealthScreenName,
  setVehicleItemId,
  setLastStatusName,
  setFiscalyear
}
  = mySlice.actions;

export default mySlice.reducer;
