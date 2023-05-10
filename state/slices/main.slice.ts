import { IFilter, IFilterDevice } from 'types/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface initState {
    theme: 'light' | 'dark'
}

const initialState: initState = {
    theme: 'light',
}

export const main = createSlice({
    name: 'filterDanger',
    initialState,
    reducers: {
        setStateTheme: (state, { payload }) => {
            state.theme = payload
        },
    },
})

export const { setStateTheme } = main.actions

export default main.reducer
