import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { fetchLogoutUser } from './services/logout.api'
import { setAuthUser } from 'state/slices/user.slice'

export const logoutApi = createApi({
    reducerPath: 'logoutApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        deleteUser: builder.query<void, number>({
            queryFn: async (tokenId) => {
                return { data: await fetchLogoutUser(tokenId) }
            },
            onQueryStarted: async (arg, { dispatch }) => {
                // localStorage.removeItem('accessToken') 
            },
        }),
    }),
})

export const { useLazyDeleteUserQuery } = logoutApi
