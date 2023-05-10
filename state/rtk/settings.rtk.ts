import {
    ISetSettingWifiResponse,
    IDHCPSettings,
    IDHCPResponse,
    IFirewallResponse,
    IFirewallResponseTransform,
    ILanSettings,
    INetworkResponse,
    INewFirewallForm,
    INewFirewallResponse,
    ISetDHCPSettingsResponse,
    ISetNetworkSettingsResponse,
    IWanSettings,
    IWiFiForm,
    IWiFiResponse,
    IDellFirewallResponse,
    IResponseWiFiResponse,
    IResponseIWiFiItem,
} from 'types/types'
import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBase } from './config'

export const settingsApi = createApi({
    reducerPath: 'settingsApi',
    baseQuery: fetchBase(),
    tagTypes: ['Firewall', 'Wifi'],
    endpoints: (builder) => ({
        getWiFiInfo: builder.query<IResponseIWiFiItem, void>({
            query: () => ({
                url: `setting-getWifiInfo`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'setting/getWifiInfo',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IResponseWiFiResponse) => data,
            providesTags: (result) => {
                    return result
                    ? [({ type: 'Wifi', id: result['2.4'].ssid } as const),
                     ({ type: 'Wifi', id: result['5'].ssid } as const),
                              { type: 'Wifi', id: 'LIST' }
                      ]
                    : [{ type: 'Wifi', id: 'LIST' }]},
        }),
        setWifiSettings: builder.mutation<ISetSettingWifiResponse, IWiFiForm>({
            query: (params) => ({
                url: `setting-settingWifi`,
                method: 'POST',
                body: {
                    args: { ...params },
                    path: 'setting/settingWifi',
                    token: 'DEBUG',
                },
            }),
            invalidatesTags: [{ type: 'Wifi', id: 'LIST' }],
        }),
        getNetworkInfo: builder.query<INetworkResponse['data'], void>({
            query: () => ({
                url: `setting-getNetworkInfo`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'setting/getNetworkInfo',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: INetworkResponse) => data,
        }),
        setWanSettings: builder.query<
            ISetNetworkSettingsResponse,
            IWanSettings
        >({
            query: (params) => ({
                url: `setting-setWanSettings`,
                method: 'POST',
                body: {
                    args: {
                        ...params,
                    },
                    path: 'setting/setWanSettings',
                    token: 'DEBUG',
                },
            }),
        }),
        setLanSettings: builder.query<
            ISetNetworkSettingsResponse,
            ILanSettings
        >({
            query: (params) => ({
                url: `setting-setLanSettings`,
                method: 'POST',
                body: {
                    args: { ...params },
                    path: 'setting/setLanSettings',
                    token: 'DEBUG',
                },
            }),
        }),
        getDHCP: builder.query<IDHCPResponse['data'], void>({
            query: () => ({
                url: `setting-getDHCP`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'setting/getDHCP',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IDHCPResponse) => data,
        }),
        setDHCPSettings: builder.query<ISetDHCPSettingsResponse, IDHCPSettings>(
            {
                query: (params) => ({
                    url: `setting-changeDHCP`,
                    method: 'POST',
                    body: {
                        args: { ...params },
                        path: 'setting/changeDHCP',
                        token: 'DEBUG',
                    },
                }),
            }
        ),
        getSettingsFirewall: builder.query<IFirewallResponseTransform, void>({
            query: () => ({
                url: `setting-getSettingsFirewall`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'setting/getSettingsFirewall',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IFirewallResponse) =>
                Object.entries(data.redirect),
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(
                              ([key, item]) =>
                                  ({
                                      type: 'Firewall',
                                      id: item.dest_port,
                                  } as const)
                          ),
                          { type: 'Firewall', id: 'LIST' },
                      ]
                    : [{ type: 'Firewall', id: 'LIST' }],
        }),
        getNewFirewall: builder.mutation<
            INewFirewallResponse,
            INewFirewallForm
        >({
            query: (params) => ({
                url: `Setting-addSettingsFirewall`,
                method: 'POST',
                body: {
                    args: { module: 'firewall', params, type: 'redirect' },
                    path: 'Setting/addSettingsFirewall',
                    token: 'DEBUG',
                },
            }),
            invalidatesTags: [{ type: 'Firewall', id: 'LIST' }],
        }),
        getDellFirewall: builder.mutation<
            IDellFirewallResponse,
            INewFirewallForm
        >({
            query: (params) => ({
                url: `setting-delSettingsFirewall`,
                method: 'POST',
                body: {
                    args: { module: 'firewall', params, type: 'redirect' },
                    path: 'setting/delSettingsFirewall',
                    token: 'DEBUG',
                },
            }),
            invalidatesTags: [{ type: 'Firewall', id: 'LIST' }],
        }),
    }),
})

export const {
    useGetWiFiInfoQuery,
    useGetNetworkInfoQuery,
    useGetSettingsFirewallQuery,
    useGetDHCPQuery,
    useGetNewFirewallMutation,
    useSetWifiSettingsMutation,
    useLazySetWanSettingsQuery,
    useLazySetDHCPSettingsQuery,
    useLazySetLanSettingsQuery,
    useGetDellFirewallMutation,
} = settingsApi
