import {
    IDeleteUserResponse,
    INewUserForm,
    INewUserResponse,
    IUpdateUserForm,
    IUpdateUserResponse,
    IUserLogResponse,
    IUsersResponse,
} from 'types/types'
import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBase } from './config'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBase(),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query<IUsersResponse['data'], void>({
            query: () => ({
                url: `users-getUsers`,
                method: 'POST',
                body: {
                    args: {},
                    path: 'users/getUsers',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IUsersResponse) => data,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(
                              (item) =>
                                  ({
                                      type: 'Users',
                                      id: item.id,
                                  } as const)
                          ),
                          { type: 'Users', id: 'LIST' },
                      ]
                    : [{ type: 'Users', id: 'LIST' }],
        }),
        getUserLog: builder.query<IUserLogResponse['data'], number>({
            query: (userId) => ({
                url: `users-getLog`,
                method: 'POST',
                body: {
                    args: { id: userId },
                    path: 'users/getLog',
                    token: 'DEBUG',
                },
            }),
            transformResponse: ({ data }: IUserLogResponse) => data,
        }),
        getNewUser: builder.mutation<INewUserResponse, INewUserForm>({
            query: ({login, password}) => ({
                url: `users-createUser`,
                method: 'POST',
                body: {
                    args: {login, password},
                    path: 'users/createUser',
                    token: 'DEBUG',
                },
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),
        getDeleteUser: builder.mutation<IDeleteUserResponse, number>({
            query: (id) => ({
                url: `users-deleteUser`,
                method: 'POST',
                body: {
                    args: {id},
                    path: 'users/deleteUser',
                    token: 'DEBUG',
                },
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),
        getUpdateUser: builder.mutation<IUpdateUserResponse, IUpdateUserForm>({
            query: ({id, login, password}) => ({
                url: `users-updateUser`,
                method: 'POST',
                body: {
                    args: {id, login, password},
                    path: 'users/updateUser',
                    token: 'DEBUG',
                },
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),
    }),
})

export const {
    useGetUsersQuery,
    useLazyGetUserLogQuery,
    useGetNewUserMutation,
    useGetDeleteUserMutation,
    useGetUpdateUserMutation
} = usersApi
