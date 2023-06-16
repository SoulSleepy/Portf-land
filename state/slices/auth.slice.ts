import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { HYDRATE } from 'next-redux-wrapper'

const START_TIME_SEC = 60

export interface IState {
    authUser: boolean | null
    activeUser: boolean | null
    timeoutLogin: boolean
    timeoutTime: number
}

const initialState: IState = {
    authUser: null,
    activeUser: null,
    timeoutLogin: false,
    timeoutTime: START_TIME_SEC,
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<boolean>) => {
            state.authUser = action.payload
        },
        setActiveUser: (state, action: PayloadAction<boolean>) => {
            state.activeUser = action.payload
        },
        setTimeoutLogin: (state, action: PayloadAction<boolean>) => {
            state.timeoutLogin = action.payload
        },
        setTimeoutTime: (state, action: PayloadAction<number>) => {
            state.timeoutTime = action.payload
        },
        setTimeoutNewTime: (state) => {
            state.timeoutTime = state.timeoutTime - 1
        },
        resetTimeoutTime: (state) => {
            state.timeoutTime = START_TIME_SEC
            state.timeoutLogin = false
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
            }
        },
    },
})

export const {
    setAuthUser,
    setActiveUser,
    setTimeoutNewTime,
    resetTimeoutTime,
    setTimeoutLogin,
    setTimeoutTime
} = auth.actions

export default auth.reducer
