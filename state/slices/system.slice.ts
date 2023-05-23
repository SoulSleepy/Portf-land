import { createSlice } from '@reduxjs/toolkit'

interface initState {
    connect: boolean
}

const initialState: initState = {
    connect: false
}

export const system = createSlice({
    name: 'system',
    initialState,
    reducers: {
        setConnect: (state, { payload }) => {
            state.connect = payload
        },
    },
})

export const { setConnect } = system.actions

export default system.reducer