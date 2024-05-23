import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const irisProfielapicall = createApi({
  // reducerPath: 'irisProfielapicall',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://easyfiler.nettechltd.com/api/' }),
  // tagTypes: 'personal',
  endpoints: builder => ({
    getIrisTypes: builder.query({
      query: () => ({
        url: 'incomesources',
        method: 'get',
      }),
    }),
    getIrisBankAccounts: builder.query({
      query: () => ({
        url: 'bankaccounts',
        method: 'get',
      }),
    }),
    addIrisProfilePost: builder.mutation({
      query: (formData, UserId) => {
        // console.log('formdata', formData?.formData[0]);
        console.log('UserIdhfhfhhfhf', formData.userId);
        const postData = {
          irisbanks: [
            {
              bankaccount_id: '1',
              iban: '2'
            }
          ],
          iris:
          {
            email: '1',
            password: '1',
            pin: '1',
            phone: '1',
            present_address: '1',
            employer: '1',
            incomesource_id: '1',
          }

        };
        console.log('postData', formData.bankDeatils),
        console.log('postData', postData)
        return {
          url: `users/${formData.userId}/irisprofiles`,
          method: 'POST',
          body: formData.postData,
        }
      },
    }),
  }),
});

export const
  {
    useGetIrisTypesQuery,
    useGetIrisBankAccountsQuery,
    useAddIrisProfilePostMutation,

  } = irisProfielapicall;