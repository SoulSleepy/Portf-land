import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { authApi } from './rtk/auth.rtk'
import { usersApi } from './rtk/users.rtk'
import { settingsApi } from './rtk/settings.rtk'
import { systemApi } from './rtk/system.rtk'
import { homeApi } from './rtk/home.rtk'
import { dangerAndEventApi } from './rtk/dangerAndEvent.rtk'
import { devicesApi } from './rtk/devices.rtk'

import modalsSlice from './slices/modals.slice'
import filterSlice from './slices/filter.slice'
import userSlice from './slices/auth.slice'
import mainSlice from './slices/main.slice'
import { mapApi } from './rtk/map'

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [settingsApi.reducerPath]: settingsApi.reducer,
        [systemApi.reducerPath]: systemApi.reducer,
        [homeApi.reducerPath]: homeApi.reducer,
        [dangerAndEventApi.reducerPath]: dangerAndEventApi.reducer,
        [devicesApi.reducerPath]: devicesApi.reducer,
        [mapApi.reducerPath]: mapApi.reducer,
        auth: userSlice,
        filter: filterSlice,
        modals: modalsSlice,
        main: mainSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat([
            authApi.middleware,
            usersApi.middleware,
            settingsApi.middleware,
            systemApi.middleware,
            homeApi.middleware,
            dangerAndEventApi.middleware,
            devicesApi.middleware,
            mapApi.middleware
        ]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
