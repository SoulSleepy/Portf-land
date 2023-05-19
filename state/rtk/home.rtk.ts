import {
    IGrahpicResponse,
    IHomeInfoResponse,
    ISetToggleWifiRequest,
    ISetToggleWifiResponse,
    ISpeedNetResponse,
    ISpeedTestResponse,
    IToggleWiFiResponse,
} from 'types/types'
import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBase } from './config'

export const homeApi = createApi({
    reducerPath: 'homeApi',
    baseQuery: fetchBase(),
    endpoints: (builder) => ({
        getToggleWiFi: builder.query<IToggleWiFiResponse['data'], void>({
            query: () => ({
                url: `setting-getWifiToggleInfo`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'setting/getWifiToggleInfo',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IToggleWiFiResponse) => data,
        }),
        setToggleWiFi: builder.query<
            ISetToggleWifiResponse,
            ISetToggleWifiRequest
        >({
            query: (params) => ({
                url: `setting-toggleWifi`,
                method: 'POST',
                body: {
                    args: params,
                    path: 'setting/toggleWifi',
                    token: 'DEBUG',
                },
            }),
        }),
        getSpeedTest: builder.query<ISpeedTestResponse, void>({
            query: () => ({
                url: `main-speedInternetStart`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'main/speedInternetStart',
                    token: 'DEBUG',
                },
            }),
        }),
        getSpeedNet: builder.query<ISpeedNetResponse['data'], void>({
            query: () => ({
                url: `main-speedInternetResult`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'main/speedInternetResult',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: ISpeedNetResponse) => data,
        }),
        getHomeInfo: builder.query<IHomeInfoResponse['data'], void>({
            query: () => ({
                url: `main-index`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'main/index',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IHomeInfoResponse) => data,
        }),
        getGrahpic: builder.query<IGrahpicResponse['data'], void>({
            query: () => ({
                url: `main-getGraphicData`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'main/getGraphicData',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IGrahpicResponse) => data,
        }),
    }),
})

export const {
    useGetToggleWiFiQuery,
    useLazyGetSpeedTestQuery,
    useLazyGetSpeedNetQuery,
    useGetHomeInfoQuery,
    useGetGrahpicQuery,
    useLazySetToggleWiFiQuery,
    useLazyGetToggleWiFiQuery,
} = homeApi
