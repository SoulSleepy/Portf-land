import { IDeviceItem } from 'types/types'
import { createSlice } from '@reduxjs/toolkit'

interface initState {
    activeItem: IDeviceItem
}

const initialState: initState = {
    activeItem: {id: 1}
}

export const devices = createSlice({
    name: 'devices',
    initialState,
    reducers: {
        setActiveItem: (state, { payload }) => {
            state.activeItem = payload
        },
    },
})

export const { setActiveItem } = devices.actions

export default devices.reducer