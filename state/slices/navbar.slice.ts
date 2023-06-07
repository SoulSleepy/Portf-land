import { createSlice } from '@reduxjs/toolkit'

interface initState {
    vulner: number
    incident: number
}

const initialState: initState = {
    vulner: 0,
    incident: 0
}

export const navbar = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        setStateVulner: (state, { payload }) => {
            state.vulner = payload
        },
        setStateIncident: (state, { payload }) => {
            state.incident = payload
        }
    },
})

export const { setStateIncident, setStateVulner } = navbar.actions

export default navbar.reducer
