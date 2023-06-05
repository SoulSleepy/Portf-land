import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBase } from './config'
import { ICheckGenerateResponse, IGenerateKeysResponse } from 'types/types'

export const vpnApi = createApi({
    reducerPath: 'vpnApi',
    baseQuery: fetchBase(),
    endpoints: (builder) => ({
        getGenerateKeys: builder.query<IGenerateKeysResponse, void>({
            query: () => ({
                url: `setting-generateKeys`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'setting/generateKeys',
                    token: 'DEBUG',
                },
            }),
        }),
        getCheckGenerate: builder.query<ICheckGenerateResponse['data'], void>({
            query: () => ({
                url: `setting-checkGenerate`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'setting/checkGenerate',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: ICheckGenerateResponse) => data,
        }),
    }),
})

export const { useLazyGetGenerateKeysQuery, useLazyGetCheckGenerateQuery } = vpnApi
