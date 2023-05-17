import {
    IAdminOutsideResponse,
    IChangeUpdateResponse,
    IParamsChangeUpdate,
    IRebootResponse,
    IResetResponse,
    IServerInfoResponse,
    ISystemInfoResponse,
    ISystemVersionResponse,
} from 'types/types'
import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBase } from './config'

export const systemApi = createApi({
    reducerPath: 'systemApi',
    baseQuery: fetchBase(),
    endpoints: (builder) => ({
        getSystemInfo: builder.query<ISystemInfoResponse['data'], void>({
            query: () => ({
                url: `update-index`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'update/index',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: ISystemInfoResponse) => data,
        }),
        getSystemVersion: builder.query<ISystemVersionResponse['data'], void>({
            query: () => ({
                url: `update-checkUpdateManually`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'update/checkUpdateManually',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: ISystemVersionResponse) => data,
        }),
        getAdminOutside: builder.query<IAdminOutsideResponse['data'], void>({
            query: () => ({
                url: `setting-passthroughAdminPanel`,
                method: 'POST',
                body: {
                    args: { action: 'status' },
                    path: 'setting/passthroughAdminPanel',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IAdminOutsideResponse) => data,
        }),
        getServerInfo: builder.query<IServerInfoResponse['data'], void>({
            query: () => ({
                url: `server-getConnectInfo`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'server/getConnectInfo',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IServerInfoResponse) => data,
        }),
        getReset: builder.query<IResetResponse, void>({
            query: () => ({
                url: `setting-reset`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'setting/reset',
                    token: 'DEBUG',
                },
            }),
        }),
        getReboot: builder.query<IRebootResponse, void>({
            query: () => ({
                url: `setting-reboot`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'setting/reboot',
                    token: 'DEBUG',
                },
            }),
        }),
        getChangeUpdate: builder.query<IChangeUpdateResponse, IParamsChangeUpdate>({
            query: (params) => ({
                url: `update-changeUpdateSettings`,
                method: 'POST',
                body: {
                    args: {
                        ...params
                    },
                    path: 'update/changeUpdateSettings',
                    token: 'DEBUG',
                },
            }),
        }),
    }),
})

export const {
    useGetSystemInfoQuery,
    useLazyGetSystemVersionQuery,
    useGetAdminOutsideQuery,
    useGetServerInfoQuery,
    useLazyGetResetQuery,
    useLazyGetRebootQuery,
    useLazyGetChangeUpdateQuery,
} = systemApi
