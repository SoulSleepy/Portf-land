import {IFilterDevicesResponse, IFilter, IDangerListResponse, IEventListResponse } from 'types/types'
import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBase } from './config'

export const dangerAndEventApi = createApi({
    reducerPath: 'dangerAndEventApi',
    baseQuery: fetchBase(),
    endpoints: (builder) => ({
        getDevices: builder.query<IFilterDevicesResponse['data'], void>({
            query: () => ({
                url: `task-getDevices`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'task/getDevices',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IFilterDevicesResponse) => data,
        }),
        getDangerList: builder.query<IDangerListResponse['data'], IFilter>({
            query: (body) => ({
                url: `task-listWithFilters`,
                method: 'POST',
                body: {
                    args: {
                        changeFilters: true,
                        ...body,
                        limit: 100,
                    },
                    path: 'task/listWithFilters',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IDangerListResponse) => data,
        }),
        getEventList: builder.query<IEventListResponse['data'], IFilter>({
            query: (body) => ({
                url: `incident-listWithFilters`,
                method: 'POST',
                body: {
                    args: {
                        changeFilters: true,
                        ...body,
                        limit: 100,
                    },
                    path: 'incident/listWithFilters',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IEventListResponse) => data,
        }),
    }),
})

export const { useGetDevicesQuery, useGetDangerListQuery, useGetEventListQuery } = dangerAndEventApi
