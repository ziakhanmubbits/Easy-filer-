import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gstRegistrationservices = createApi({
    reducerPath: 'gstRegistration',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://easyfiler.nettechltd.com/api/' }),
    // tagTypes: 'personal',
    endpoints: builder => ({
        getGstBusinessType: builder.query({
            query: () => ({
                url: 'types',
                method: 'get',
            }),
        }),
        getGstBusinessNature: builder.query({
            query: () => ({
                url: 'natures',
                method: 'get',
            }),
        }),
        getBusinessIncorporationType: builder.query({
            query: () => ({
                url: 'incorporation-types',
                method: 'get',
            }),
        }),
    }),
});

export
    const { useGetGstBusinessTypeQuery,
        useGetGstBusinessNatureQuery,
        useGetBusinessIncorporationTypeQuery
    } = gstRegistrationservices;
