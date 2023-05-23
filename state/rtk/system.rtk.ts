import {
    IAdminOutsideResponse,
    IChangeUpdateResponse,
    IParamsChangeUpdate,
    IRebootResponse,
    IRegisterServerResponse,
    IRegisterServerForm,
    IResetResponse,
    IServerInfoResponse,
    ISystemInfoResponse,
    ISystemVersionResponse,
    IRegisterItems,
    IAnketaServerResponse,
    IServerOnOffResponse,
    IDisconnectServerResponse,
} from 'types/types'
import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBase } from './config'
import { setConnect } from '../slices/system.slice'

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
        getRegistrationServer: builder.query<IRegisterServerResponse['data'], IRegisterServerForm>({
            query: (params) => ({
                url: `server-registration`,
                method: 'POST',
                body: {
                    args: {
                        ...params
                    },
                    path: 'server/registration',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IRegisterServerResponse) => data,
        }),
        setAnketaServer: builder.query<IAnketaServerResponse, IRegisterItems[]>({
            query: (anketa) => ({
                url: `server-anketa`,
                method: 'POST',
                body: {
                    args: {anketa},
                    path: 'server/anketa',
                    token: 'DEBUG',
                },
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled
                if (data.msg === 'anketa-success') {
                    dispatch(setConnect(true))
                }
            },
        }),
        getServerOnOff: builder.query<IServerOnOffResponse, void>({
            query: () => ({
                url: `main-isServerConnected`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'main/isServerConnected',
                    token: 'DEBUG',
                },
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled
                if (data.msg) {
                    dispatch(setConnect(data.msg))
                }
            },
        }),
        getDisconnectServer: builder.query<IDisconnectServerResponse, void>({
            query: () => ({
                url: `server-disconnect`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'server/disconnect',
                    token: 'DEBUG',
                },
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled
                if (data.msg === 'disconnect-successfully') {
                    dispatch(setConnect(false))
                }
            },
        }),
    }),
})

export const {
    useGetSystemInfoQuery,
    useLazyGetSystemVersionQuery,
    useGetAdminOutsideQuery,
    useLazyGetServerInfoQuery,
    useLazyGetResetQuery,
    useLazyGetRebootQuery,
    useLazyGetChangeUpdateQuery,
    useLazyGetRegistrationServerQuery,
    useLazySetAnketaServerQuery,
    useGetServerOnOffQuery,
    useLazyGetServerOnOffQuery,
    useLazyGetDisconnectServerQuery,
} = systemApi
