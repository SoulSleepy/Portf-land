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
        setTimeoutTime: (state) => {
            state.timeoutTime = state.timeoutTime - 1
            Cookies.set('timeoutTime', `${state.timeoutTime}`)
        },
        resetTimeoutTime: (state) => {
            state.timeoutTime = START_TIME_SEC
            state.timeoutLogin = false
            Cookies.remove('timeoutTime')
        },
        setInitTimeoutLogin: (state, { payload }:PayloadAction<number | false>) => {
            state.timeoutLogin = typeof payload === 'number' ? true : false
            state.timeoutTime = typeof payload === 'number' ? payload : 60
        },
        setStartTimeoutLogin: (state) => {
            state.timeoutLogin = true
            state.timeoutTime = START_TIME_SEC
            Cookies.set('timeoutTime', `${START_TIME_SEC}`)
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
    setStartTimeoutLogin,
    setTimeoutTime,
    resetTimeoutTime,
    setInitTimeoutLogin
} = auth.actions

export default auth.reducer
