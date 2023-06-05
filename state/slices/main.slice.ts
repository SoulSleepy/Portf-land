import { createSlice } from '@reduxjs/toolkit'

interface initState {
    theme: 'light' | 'dark'
}

const initialState: initState = {
    theme: 'light'
}

export const main = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setStateTheme: (state, { payload }) => {
            state.theme = payload
        }
    },
})

export const { setStateTheme } = main.actions

export default main.reducer
