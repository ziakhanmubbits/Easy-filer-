import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getApiCall } from "../../src/Services/GetApiCall";
import myReducer from "./myReducer";
import { saleryCalculatorApiCall } from "../Services/salerycalculatorapicall";
import salaryReducer from './mySaleryCalculatorReducer'
import irisProfileReducer from "./irisProfileReducer";
import { irisProfielapicall } from "../Services/irisprofileapicall";
import { gstRegistrationservices } from "../Services/gstregistrationapicall";
import gstReducer from "./gstReducer";





export const store = configureStore({
    reducer: {
        myReducer: myReducer,
        [getApiCall.reducerPath]: getApiCall.reducer,

        salary: salaryReducer,
        [saleryCalculatorApiCall.reducerPath]: saleryCalculatorApiCall.reducer,

        irisProfile: irisProfileReducer,
        [irisProfielapicall.reducerPath]: irisProfielapicall.reducer,

        gstRegistration: gstReducer,
        [gstRegistrationservices.reducerPath]: gstRegistrationservices.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(getApiCall.middleware, saleryCalculatorApiCall.middleware,irisProfielapicall.middleware,gstRegistrationservices.middleware),
});

setupListeners(store.dispatch);
export default store;