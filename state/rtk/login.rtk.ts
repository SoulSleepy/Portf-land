import { fetchUser } from './services/login.api'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuthUser } from 'state/slices/user.slice'


export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        authUser: builder.query<any, any>({
            queryFn: async (data) => {
                return { data: await fetchUser(data) }
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                dispatch(setAuthUser(true))
            },
        }),
    }),
})

export const { useLazyAuthUserQuery } = loginApi