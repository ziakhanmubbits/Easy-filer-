import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getApiCall = createApi({
    reducerPath: 'getApiCall',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://easyfiler.nettechltd.com/api/' }),
    // tagTypes: 'personal',
    endpoints: builder => ({
        getData: builder.query({
            query: () => ({
                url: 'occupations',
                method: 'get',
            }),
        }),
        addNewPost: builder.mutation({
            query: (data) => {
                // console.log('zzzzzz', data)
                // console.log('myId', data.postParams);
                // console.log('myIdksksksksk', data.personalId);

                if (data.personalId === 0) {
                    console.log('myId is zero', data.PersonalId);
                    return {
                        url: `taxfillings/${data.taxFilingId}/personals`,
                        method: 'post',
                        body: {
                            personal: {
                                name: data.postParams.name,
                                cnic: data.postParams.cnic,
                                email: data.postParams.email,
                                phone: data.postParams.phone,
                                dob: data.postParams.dob,
                                citizen: data.postParams.citizen,
                                residence: data.postParams.residence,
                                occupation_id: data.postParams.occupation_id,
                            },
                        },
                    }
                } else {
                    return {
                        url: `taxfillings/${data.taxFilingId}/personals/${data.personalId}`,
                        method: 'put',
                        body: {
                            personal: {
                                name: data.postParams.name,
                                cnic: data.postParams.cnic,
                                email: data.postParams.email,
                                phone: data.postParams.phone,
                                dob: data.postParams.dob,
                                citizen: data.postParams.citizen,
                                residence: data.postParams.residence,
                                occupation_id: data.postParams.occupation_id,

                            },
                        },
                    }
                }

            },
        }),
        getpersonalData: builder.query({
            query: (taxFilingId) => `taxfillings/${taxFilingId}/personals`,
            method: 'get'

        }),
        getIncomeType: builder.query({
            query: () => ({
                url: 'income_types',
                method: 'get',
            }),
        }),
        getBusinessType: builder.query({
            query: () => ({
                url: 'business_types',
                method: 'get',
            }),
        }),
        getTaxRates: builder.query({
            query: () => ({
                url: 'tax_rates',
                method: 'get',
            }),
        }),
        getRate: builder.query({
            query: () => ({
                url: 'adjustables',
                method: 'get',
            }),
        }),
        getDeductionTypes: builder.query({
            query: () => ({
                url: 'deductiontypes',
                method: 'get',
            }),
        }),
        getActivity: builder.query({
            query: () => ({
                url: 'activities',
                method: 'get',
            }),
        }),
        getVehicles: builder.query({
            query: () => ({
                url: 'vehicles',
                method: 'get',
            }),
        }),
        getUtility: builder.query({
            query: () => ({
                url: 'utilities',
                method: 'get',
            }),
        }),
        getProvider: builder.query({
            query: (id) => ({
                url: `utilities/${id}/providers`,
                method: 'get',
            }),
        }),
        getWealthType: builder.query({
            query: () => ({
                url: 'wealthtypes',
                method: 'get',
            }),
        }),
        getPropertyType: builder.query({
            query: (id) => ({
                url: 'propertytypes',
                method: 'get',
            }),
        }),
        getBankAccounts: builder.query({
            query: (id) => ({
                url: 'bankaccounts',
                method: 'get',
            }),
        }),
        getOtherAssets: builder.query({
            query: (id) => ({
                url: 'otherassets',
                method: 'get',
            }),
        }),
        getPossession: builder.query({
            query: (id) => ({
                url: 'possessions',
                method: 'get',
            }),
        }),
        getOtherLiabilities: builder.query({
            query: (id) => ({
                url: 'otherliabilities',
                method: 'get',
            }),
        }),
        addIncomesPost: builder.mutation({
            query: (data) => {
                // console.log('data.taxFilingId', data.taxFilingId)
                // console.log('IncomeParams', data.postParams);
                // console.log('IncomeParams', data.id);
                if (data.id === 0) {
                    return {
                        url: `taxfillings/${data.taxFilingId}/incomes`,
                        method: 'post',
                        body:
                        {
                            income: {
                                inctax_revenue: data.postParams.inctax_revenue,
                                taxdedected_revenue: data.postParams.taxdedected_revenue,
                                taxrate_id: data.postParams.taxrate_id,
                                direct_expense: data.postParams.direct_expense,
                                indirect_expense: data.postParams.indirect_expense,
                                assets: data.postParams.assets,
                                liability: data.postParams.liability,
                                capital: data.postParams.capital,
                                adjustable_id: data.postParams.adjustable_id,
                                adjustable_amount: data.postParams.adjustable_amount,
                                businesstype_id: data.postParams.businesstype_id,
                                incometype_id: data.postParams.incometype_id,
                                taxfilling_id: data.postParams.taxfilling_id,
                            },
                        },
                    }
                } else {
                    return {
                        url: `taxfillings/${data.taxFilingId}/incomes/${data.id}`,
                        method: 'put',
                        body:
                        {
                            income: {
                                inctax_revenue: data.postParams.inctax_revenue,
                                taxdedected_revenue: data.postParams.taxdedected_revenue,
                                taxrate_id: data.postParams.taxrate_id,
                                direct_expense: data.postParams.direct_expense,
                                indirect_expense: data.postParams.indirect_expense,
                                assets: data.postParams.assets,
                                liability: data.postParams.liability,
                                capital: data.postParams.capital,
                                adjustable_id: data.postParams.adjustable_id,
                                adjustable_amount: data.postParams.adjustable_amount,
                                businesstype_id: data.postParams.businesstype_id,
                                incometype_id: data.postParams.incometype_id,
                                taxfilling_id: data.postParams.taxfilling_id,
                            },
                        },
                    }
                }
            }
        }),
        addTaxDeductionPost: builder.mutation({
            query: (data) => {
                console.log('data.taxFilingId', data.taxFilingId)
                // console.log('IncomeParams', data.postParams.utility_id);
                // console.log('IncomeParams', data.postParams.provider_id);
                // console.log('IncomeParams', data.postParams.consumer_no);
                // console.log('IncomeParams', data.postParams.tax_deducted);

                return {
                    url: `taxfillings/${data.taxFilingId}/taxdeducts`,
                    method: 'post',
                    body:
                    {
                        taxdeduct: {
                            registration_no: data.postParams.registration_no,
                            consumer_no: data.postParams.consumer_no,
                            tax_deducted: data.postParams.tax_deducted,
                            tax_paid_property_purchase: data.postParams.tax_paid_property_purchase,
                            tax_paid_property_sale: data.postParams.tax_paid_property_sale,
                            tax_paid_on_education: data.postParams.tax_paid_on_education,
                            tax_paid_fund_withdraw: data.postParams.tax_paid_fund_withdraw,
                            deductiontype_id: data.postParams.deductiontype_id,
                            activity_id: data.postParams.activity_id,
                            vehicle_id: data.postParams.vehicle_id,
                            utility_id: data.postParams.utility_id,
                            provider_id: data.postParams.provider_id,
                        },
                    },
                }
            }
        }),
        addWealthStatementPost: builder.mutation({
            query: (data) => {
                console.log('data.taxFilingId', data.taxFilingId)
                console.log('data.postParams.cash_balance', data.postParams.cash_balance)
                // console.log('data.postParams.asset_type_id', data.postParams.asset_type_id)

                return {
                    url: `taxfillings/${data.taxFilingId}/wealthstatements`,
                    method: 'post',
                    body:
                    {
                        wealth: {
                            assets: data.postParams.assets,
                            address: data.postParams.address,
                            cost: data.postParams.cost,
                            registration_no: data.postParams.registration_no,
                            account_no: data.postParams.account_no,
                            company_name: data.postParams.company_name,
                            description: data.postParams.description,
                            premium_paid: data.postParams.premium_paid,
                            asset_cost: data.postParams.asset_cost,
                            value_at_cost: data.postParams.value_at_cost,
                            cash_balance: data.postParams.cash_balance,
                            institution_name: data.postParams.institution_name,
                            amount: data.postParams.amount,
                            taxfilling_id: data.postParams.taxfilling_id,
                            property_type_id: data.postParams.property_type_id,
                            vehicle_id: data.postParams.vehicle_id,
                            bankaccount_id: data.postParams.bankaccount_id,
                            possession_type_id: data.postParams.possession_type_id,
                            asset_type_id: data.postParams.asset_type_id,
                            libility_type_id: data.postParams.libility_type_id,
                            wealth_type_id: data.postParams.wealth_type_id,

                        },
                    },
                }

            }
        }),
        addExpensePost: builder.mutation({
            query: (data) => {
                console.log('data.taxFilingId', data.taxFilingId)
                console.log('data.postParams.taxfilling_id', data.postParams)
                return {
                    url: `taxfillings/${data.taxFilingId}/expenses`,
                    method: 'post',
                    body:
                    {
                        expense: {
                            household: data.postParams.household,
                            rent: data.postParams.rent,
                            vehicle_run_maintenance: data.postParams.vehicle_run_maintenance,
                            electricity: data.postParams.electricity,
                            gas: data.postParams.gas,
                            medical: data.postParams.medical,
                            function_gathering: data.postParams.function_gathering,
                            insurance_premium: data.postParams.insurance_premium,
                            interest_expense: data.postParams.interest_expense,
                            travelling: data.postParams.travelling,
                            rate_taxes_charge: data.postParams.rate_taxes_charge,
                            income_tax: data.postParams.income_tax,
                            water: data.postParams.water,
                            telephone: data.postParams.telephone,
                            educational: data.postParams.educational,
                            donation_zakat: data.postParams.donation_zakat,
                            gift: data.postParams.gift,

                        },
                    },
                }
            }
        }),
        addTaxSavingPost: builder.mutation({
            query: (data) => {
                console.log('data.taxFilingId', data.taxFilingId)
                console.log('data.postParams.taxfilling_id', data.postParams)
                console.log('data.id', data.taxSavingId)
                if (data.taxSavingId === 0) {
                    return {
                        url: `taxfillings/${data.taxFilingId}/taxsavings`,
                        method: 'post',
                        body:
                        {
                            taxsave: {
                                donation: data.postParams.donation,
                                insurance: data.postParams.insurance,
                                pension_fund: data.postParams.pension_fund,
                                rent_house_load: data.postParams.rent_house_load,
                                health_insurance_premium: "1",
                                children_tuition_fee: data.postParams.children_tuition_fee,
                                taxfilling_id: data.postParams.taxfilling_id,

                            },
                        },
                    }
                } else {
                    return {
                        url: `taxfillings/${data.taxFilingId}/taxsavings/${data.taxSavingId}`,
                        method: 'put',
                        body:
                        {
                            taxsave: {
                                donation: data.postParams.donation,
                                insurance: data.postParams.insurance,
                                pension_fund: data.postParams.pension_fund,
                                rent_house_load: data.postParams.rent_house_load,
                                health_insurance_premium: "1",
                                children_tuition_fee: data.postParams.children_tuition_fee,
                                taxfilling_id: data.postParams.taxfilling_id,

                            },
                        },
                    }
                }
            }
        }),
        postNtnRegistration: builder.mutation({
            query: (formData) => ({
              url: `users/162/ntn-registrations`,
              method: 'POST',
              body: formData,
            }),
          }),


    }),
});

export const
    {
        useGetDataQuery,
        useAddNewPostMutation,
        useGetpersonalDataQuery,
        useGetIncomeTypeQuery,
        useGetBusinessTypeQuery,
        useGetTaxRatesQuery,
        useGetRateQuery,
        useAddIncomesPostMutation,
        useGetDeductionTypesQuery,
        useGetActivityQuery,
        useGetVehiclesQuery,
        useGetUtilityQuery,
        useGetProviderQuery,
        useAddTaxDeductionPostMutation,
        useGetWealthTypeQuery,
        useGetPropertyTypeQuery,
        useGetBankAccountsQuery,
        useGetOtherAssetsQuery,
        useGetPossessionQuery,
        useGetOtherLiabilitiesQuery,
        useAddWealthStatementPostMutation,
        useAddExpensePostMutation,
        useAddTaxSavingPostMutation,
        usePostNtnRegistrationMutation
    } = getApiCall;