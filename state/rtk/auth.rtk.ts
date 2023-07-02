import { IAuthForm, IAuthResponse, IAuthTimeoutResponse } from 'types/types'
import { createApi } from '@reduxjs/toolkit/query/react'
import { resetTimeoutTime, setActiveUser, setAuthUser, setTimeoutLogin, setTimeoutTime } from 'state/slices/auth.slice'
import { fetchBaseAuth } from './config'
import Cookies from 'js-cookie'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseAuth(),
    endpoints: (builder) => ({
        authUser: builder.query<IAuthResponse, IAuthForm>({
            query: (data) => ({
                url: `auth-login`,
                method: 'POST',
                body: {
                    args: data,
                    path: 'auth/login',
                    token: 'DEBUG',
                },
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled
                if (data.data === 'auth-success') {
                    dispatch(setAuthUser(true))
                    Cookies.set('isAuth', 'true')
                }
                if (data.msg === 'timeout') {
                    dispatch(setTimeoutLogin(true))
                }
            },
        }),
        logoutUser: builder.query<IAuthResponse, void>({
            query: () => ({
                url: `auth-logout`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'auth/logout',
                    token: 'DEBUG',
                },
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                dispatch(setAuthUser(false))
                Cookies.remove('isAuth')
            },
        }),
        crateUser: builder.query<IAuthResponse, IAuthForm>({
            query: (params) => ({
                url: `auth-create`,
                method: 'POST',
                body: {
                    args: params,
                    path: 'auth/create',
                    token: 'DEBUG',
                },
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled
                if (data.status) {
                    dispatch(setActiveUser(true))
                    dispatch(setAuthUser(true))
                    Cookies.set('isAuth', 'true')
                }
            },
        }),
        authTimeout: builder.query<IAuthTimeoutResponse['data'], void>({
            query: (params) => ({
                url: `auth-timeout`,
                method: 'POST',
                body: {
                    args: params,
                    path: 'auth/timeout',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IAuthTimeoutResponse) => data,
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled
                if (data.count === 0) {
                    dispatch(setTimeoutLogin(true))
                    dispatch(setTimeoutTime(data?.timeleft as number))
                } else dispatch(resetTimeoutTime())
            },
        }),
    }),
})

export const {
    useLazyAuthUserQuery,
    useLazyLogoutUserQuery,
    useLazyCrateUserQuery,
    useLazyAuthTimeoutQuery,
} = authApi
