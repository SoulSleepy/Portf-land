import { IAuthForm, IAuthResponse } from 'types/types'
import { createApi } from '@reduxjs/toolkit/query/react'
import { setAuthUser } from 'state/slices/auth.slice'
import { fetchBaseAuth } from './config'

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
                if (data.status) {
                    dispatch(setAuthUser(true))
                    localStorage.setItem('isAuth', 'true')
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
                localStorage.removeItem('isAuth')
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
                    dispatch(setAuthUser(true))
                    localStorage.setItem('isAuth', 'true')
                }
            },
        }),
    }),
})

export const { useLazyAuthUserQuery, useLazyLogoutUserQuery, useLazyCrateUserQuery } = authApi
