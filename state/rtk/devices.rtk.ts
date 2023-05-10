import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBase } from './config'
import {
    IDangerListResponse,
    IDeviceInfoResponse,
    IDeviceProgramsResponse,
    IDevicesListResponse,
    IEventListResponse,
} from 'types/types'

export const devicesApi = createApi({
    reducerPath: 'devicesApi',
    baseQuery: fetchBase(),
    endpoints: (builder) => ({
        getDevicesList: builder.query<IDevicesListResponse['data'], void>({
            query: () => ({
                url: `device-list`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'device/list',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IDevicesListResponse) => data,
        }),
        getDeviceInfo: builder.query<IDeviceInfoResponse['data'], number>({
            query: (id) => ({
                url: `device-get`,
                method: 'POST',
                body: {
                    args: { id, tab: 'info' },
                    path: 'device/get',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IDeviceInfoResponse) => data,
        }),
        getDeviceTasks: builder.query<IDangerListResponse['data'], number>({
            query: (id) => ({
                url: `device-getTasks`,
                method: 'POST',
                body: {
                    args: { id, tab: 'tasks' },
                    path: 'device/getTasks',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IDangerListResponse) => data,
        }),
        getDeviceIncidents: builder.query<IEventListResponse['data'], number>({
            query: (id) => ({
                url: `device-getIncidents`,
                method: 'POST',
                body: {
                    args: { id, tab: 'incidents' },
                    path: 'device/getIncidents',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IEventListResponse) => data,
        }),
        getDevicePrograms: builder.query<IDeviceProgramsResponse['data'], number>({
            query: (id) => ({
                url: `device-getPrograms`,
                method: 'POST',
                body: {
                    args: { id, tab: 'programs' },
                    path: 'device/getPrograms',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IDeviceProgramsResponse) => data,
        }),
    }),
})

export const {
    useGetDevicesListQuery,
    useLazyGetDeviceInfoQuery,
    useLazyGetDeviceTasksQuery,
    useLazyGetDeviceIncidentsQuery,
    useLazyGetDeviceProgramsQuery,
} = devicesApi
