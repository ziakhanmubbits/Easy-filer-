import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const incomeBussinesServices = createApi({
    reducerPath: 'getApiCall',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://60c4-115-186-169-3.ngrok-free.app/api/' }),
    // tagTypes: 'personal',
    endpoints: builder => ({
        getData: builder.query({
            query: () => ({
                url: 'tax_rates',
                method: 'get',
            }),
        }),
      
     
    }),
});

export const { useGetDataQuery } = incomeBussinesServices;