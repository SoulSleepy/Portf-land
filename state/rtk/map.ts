import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBase } from './config'
import { IGetMapListResponse } from 'types/types'

export const mapApi = createApi({
    reducerPath: 'mapApi',
    baseQuery: fetchBase(),
    endpoints: (builder) => ({
        getMapList: builder.query<IGetMapListResponse['data'], void>({
            query: () => ({
                url: `setting-getSettingsFirewall`,
                method: 'POST',
                body: {
                    args: { format: 'map' },
                    path: 'setting/getSettingsFirewall',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IGetMapListResponse) => data,
        }),
    }),
})

export const { useGetMapListQuery } = mapApi
