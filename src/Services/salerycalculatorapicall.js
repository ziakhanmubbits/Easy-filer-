import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const saleryCalculatorApiCall = createApi({
    reducerPath: 'SalaryCalculatore',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://easyfiler.nettechltd.com/api/' }),
    // tagTypes: 'personal',
    endpoints: builder => ({

        addSalaryTaxPsot: builder.mutation({
            query: (data) => {
                console.log('getData',data)
                return{
                url: 'salary-calculators',
                method: 'post',
                body:{
                    monthlyincome:data.monthlyincome,
                    fiscalyear_id:data.fiscalyear_id,
                }
            }
            },
        }),
    }),
});

export const
    {
        useGetTaxationYearQuery,
        useAddSalaryTaxPsotMutation
        

    } = saleryCalculatorApiCall;